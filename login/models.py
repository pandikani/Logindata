# accounts/models.py
from django.db import models

class LoginData(models.Model):
    username = models.CharField(max_length=150)
    password = models.CharField(max_length=128)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username


