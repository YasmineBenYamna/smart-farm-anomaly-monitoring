#Contient la configuration de l’app (CropAppConfig) utilisée dans 
# INSTALLED_APPS pour enregistrer l’application.
from django.apps import AppConfig


class CropAppConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "crop_app"
