# crop_app/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (          
    SensorReadingListCreate,
    AnomalyList,
    RecommendationList,
    FarmProfileViewSet,
    FieldPlotViewSet
)
router = DefaultRouter()
router.register(r'farms', FarmProfileViewSet, basename='farm')
router.register(r'plots', FieldPlotViewSet, basename='plot')

urlpatterns = [
    path('sensor-readings/', SensorReadingListCreate.as_view()),
    path('anomalies/', AnomalyList.as_view()),
    path('recommendations/', RecommendationList.as_view()),
    path('', include(router.urls)),

]