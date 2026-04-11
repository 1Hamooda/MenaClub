from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class EventRegistration(models.Model):
    ROLE_CHOICES = [
        ('attendee', 'Attendee'),
        ('volunteer', 'Volunteer'),
        ('organizer', 'Organizer'),
    ]

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]

    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='registrations')
    user_id = models.IntegerField()
    role = models.CharField(max_length=50, choices=ROLE_CHOICES, default='attendee')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    registered_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user_id} - {self.event.title} - {self.role}"