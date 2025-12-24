AI-Enhanced Crop Monitoring and Anomaly Detection Platform
Overview
An intelligent agricultural monitoring system that combines IoT sensor simulation, machine learning-based anomaly detection, and AI-driven recommendations to help farmers optimize crop management. The platform ingests simulated sensor data (soil moisture, temperature, humidity), detects anomalies using Isolation Forest algorithm, and generates actionable recommendations through a rule-based AI agent.
Key Capabilities
•	Real-time sensor data ingestion via REST API
•	ML-powered anomaly detection using Isolation Forest
•	Explainable AI recommendations with rule-based agent
•	Interactive dashboard for data visualization
•	Flexible simulation with configurable anomaly scenarios

Features
Backend (Django REST API)
•	 JWT Authentication with role-based permissions
•	 PostgreSQL database with optimized indexes
•	 RESTful API endpoints for all operations
•	 Real-time data ingestion from simulator
ML Module (Anomaly Detection)
•	 Isolation Forest algorithm for sensor anomalies
•	Statistical preprocessing with windowing
•	Configurable confidence thresholds
•	Model persistence (saved to disk)
•	 Batch and single-plot detection
AI Agent (Recommendations)
•	 Rule-based decision engine
•	 Template-based explanations
•	 Severity-based action prioritization
•	 Domain-specific agricultural rules
Sensor Simulator
•	 Realistic diurnal patterns (temperature, humidity)
•	 Irrigation cycle simulation
•	 Anomaly injection scenarios (drops, spikes, drift)
•	 Fast mode for rapid data generation
•	 Multi-plot support
Data Flow
1.	Simulator generates sensor readings → POST to Django API
2.	Django saves SensorReading to database
3.	ML Module processes readings → creates AnomalyEvent if anomaly detected
4.	AI Agent analyzes anomaly → generates AgentRecommendation
5.	Frontend fetches data via REST API → displays in dashboard
Technology Stack
Backend
•	Django 5.1.4 - Web framework
•	Django REST Framework 3.15.2 - API framework
•	PostgreSQL - Primary database
•	SimpleJWT - Authentication
ML & Data Science
•	scikit-learn 1.6.0 - Isolation Forest model
•	NumPy 2.2.1 - Numerical computations
•	Pandas 2.2.3 - Data manipulation
Simulation & Tools
•	Requests 2.32.3 - HTTP client for simulator
•	python-dotenv - Environment variables
Frontend (Your Choice)
•	Angular 18+ / React 19+ / Vue 3+ / Next.js 15+ / Django Templates
crop_monitoring_system/
├── crop_app_project/           # Main Django project
│   ├── settings.py            # Django settings
│   ├── urls.py                # Main URL configuration
│   └── wsgi.py
│
├── crop_app/                  # Core application
│   ├── models.py              # Data models (Farm, Plot, Sensor, Anomaly)
│   ├── serializers.py         # DRF serializers
│   ├── views.py               # API views
│   └── urls.py                # App URLs
│
├── ml_module/                 # Machine Learning module
│   ├── anomaly_detector.py    # Isolation Forest implementation
│   ├── preprocessing.py       # Data preprocessing & windowing
│   ├── views.py               # ML API endpoints (ViewSets)
│   ├── serializers.py         # ML request/response serializers
│   ├── urls.py                # ML URLs
│   └── tests.py               # Unit tests
│
├── ai_agent/                  # AI Agent module
│   ├── rule_engine.py         # Decision rules
│   ├── views.py               # Agent API endpoints
│   └── urls.py                # Agent URLs
│
├── simulator/                 # Sensor data simulator
│   ├── sensor_simulator.py    # Main simulator (FAST MODE)
│   ├── simulator_config.py    # Configuration & parameters
│   ├── anomaly_scenarios.py   # Anomaly injection logic
│   └── requirements.txt       # Simulator dependencies
│
├── trained_models/            # Saved ML models (auto-created)
│   ├── moisture_model.pkl
│   ├── temperature_model.pkl
│   └── humidity_model.pkl
│
├── requirements.txt           # Python dependencies
├── .env                       # Environment variables (not in git)
├── .env.example               # Example environment file
├── manage.py                  # Django management script
├── Dockerfile                 # Docker configuration (WIP)
├── docker-compose.yml         # Docker Compose (WIP)
└── README.md                  # This file

Installation
Prerequisites

Python 3.11+
PostgreSQL 14+
pip (Python package manager)
Git

 ML Model Training
Training Process
The Isolation Forest model learns "normal" patterns from baseline sensor data:

Data Collection: Collects recent sensor readings (default: 200 samples globally)
Preprocessing: Creates sliding windows (10 readings) and extracts features
Feature Extraction: Mean, std, min, max, range for each window
Training: Fits Isolation Forest on feature vectors
Persistence: Saves trained model to trained_models/ directory

Model Files
Trained models are saved in trained_models/:

moisture_model.pkl - Soil moisture anomaly detector
temperature_model.pkl - Temperature anomaly detector
humidity_model.pkl - Humidity anomaly detector
