from django.db import models


class User(models.Model):
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, unique=True)
    password = models.CharField(max_length=255)

    is_email_verified = models.BooleanField(default=False)
    is_phone_verified = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    agree_to_terms = models.BooleanField(default=False)

    def __str__(self):
        return self.email


class BusinessType(models.Model):
    name = models.CharField(max_length=100, unique=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class BusinessProfile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="business_profile"
    )

    business_type = models.ForeignKey(
        BusinessType,
        on_delete=models.PROTECT,
        related_name="business_profiles"
    )

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    company_name = models.CharField(max_length=255)

    gstin = models.CharField(
        max_length=20,
        null=True,
        blank=True,
        db_index=True
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.company_name} ({self.user.email})"


class LoginAttempt(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="login_attempts",
    )
    identifier = models.CharField(max_length=254, db_index=True)
    password_hash = models.CharField(max_length=255)
    success = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.identifier} ({'success' if self.success else 'failed'})"
