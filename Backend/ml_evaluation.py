"""
ML Evaluation using NORMAL_RANGES as ground truth
"""

# ====== CONFIG DJANGO ======
import os
import sys
import django

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BASE_DIR)

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "crop_app_project.settings")
django.setup()
# ==========================

import numpy as np
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

from ml_module.preprocessing import SensorDataPreprocessor, get_recent_readings_all_plots
from ml_module.views import load_detector_from_disk


NORMAL_RANGES = {
    "moisture": (45, 75),
    "temperature": (18, 28),
    "humidity": (45, 75),
}


def create_ground_truth(values, sensor_type):
    """1 = normal, -1 = anomaly selon les ranges physiques."""
    min_v, max_v = NORMAL_RANGES[sensor_type]
    return np.array([1 if (min_v <= v <= max_v) else -1 for v in values])


def evaluate_sensor(sensor_type: str, n_samples: int = 150):
    print("\n" + "=" * 70)
    print(f" EVALUATION BY RANGES FOR {sensor_type.upper()}")
    print("=" * 70)

    detector = load_detector_from_disk(sensor_type)
    if not detector.is_trained:
        print(f"[ERROR] Model for {sensor_type} is not trained.")
        return None

    # 1. Récupérer les valeurs récentes (tous plots)
    values = get_recent_readings_all_plots(sensor_type, count=n_samples)
    if len(values) < 20:
        print(f"[ERROR] Not enough data: {len(values)} samples.")
        return None

    # 2. Ground truth basé sur les ranges
    y_true = create_ground_truth(values, sensor_type)

    # 3. Prétraitement + fenêtres
    preproc = SensorDataPreprocessor(window_size=10)
    X = preproc.prepare_for_model(values, use_features=True)

    # 4. Aligner labels et fenêtres (fenêtre i finit au point i+9)
    y_true_w = y_true[9:]

    # 5. Prédiction du modèle (-1 / 1)
    y_pred = detector.predict(X)

    # 6. Métriques en pourcentage
    acc = accuracy_score(y_true_w, y_pred) * 100
    prec = precision_score(y_true_w, y_pred, pos_label=-1, zero_division=0) * 100
    rec = recall_score(y_true_w, y_pred, pos_label=-1, zero_division=0) * 100
    f1 = f1_score(y_true_w, y_pred, pos_label=-1, zero_division=0) * 100

    print(f" Total samples used : {len(y_true_w)}")
    print(f" Accuracy           : {acc:5.1f}%")
    print(f" Precision (anoms)  : {prec:5.1f}%")
    print(f" Recall (anoms)     : {rec:5.1f}%")
    print(f" F1-score (anoms)   : {f1:5.1f}%")

    return {"Acc": acc, "Prec": prec, "Rec": rec, "F1": f1}


if __name__ == "__main__":
    print("=" * 70)
    print(" ML MODEL EVALUATION (USING NORMAL_RANGES AS GROUND TRUTH)")
    print("=" * 70)

    sensors = ["moisture", "temperature", "humidity"]
    results = {}

    for s in sensors:
        r = evaluate_sensor(s)
        if r:
            results[s] = r

    print("\n" + "=" * 70)
    print(" GLOBAL SUMMARY (PERCENTAGES)")
    print("=" * 70)
    print(f"{'Sensor':<15} {'Acc%':>6} {'Prec%':>6} {'Rec%':>6} {'F1%':>6}")
    print("-" * 70)
    for s, r in results.items():
        print(f"{s:<15} {r['Acc']:6.1f} {r['Prec']:6.1f} {r['Rec']:6.1f} {r['F1']:6.1f}")
