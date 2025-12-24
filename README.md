# Smart Farm Monitoring Platform

End‑to‑end platform for **intelligent monitoring of agricultural plots**, combining:
- Secure **Django REST** backend (API for sensors, anomalies, and recommendations)
- Sensor data simulator (soil moisture, temperature, air humidity)
- **ML anomaly detection** module based on **Isolation Forest**
- Time‑series preprocessing (sliding windows, statistical feature extraction)
- Simple AI agent for decision support (recommendations triggered by anomalies)
- Full frontend website (interactive real‑time dashboard) built with Angular

## Key Features

- Ingestion and simulation of sensor data
- Automatic anomaly detection with scores, confidence, and severity levels
- Real‑time visualization of measurements and anomalies on the dashboard
- Management of plots, sensors, and anomaly events
- Documented API ready to be consumed by other services/frontends
