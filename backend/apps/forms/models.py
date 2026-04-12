from django.db import models

class VisitorForm(models.Model):
    FORM_TYPES = [
        ('support', 'Support Request'),
        ('partnership', 'Partnership Proposal'),
        ('event_suggestion', 'Event Suggestion'),
    ]
    form_type = models.CharField(max_length=50, choices=FORM_TYPES)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.form_type} - {self.name}"