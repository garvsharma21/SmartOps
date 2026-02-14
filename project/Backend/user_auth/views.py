import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.db import IntegrityError, transaction
from .models import LoginAttempt, User, BusinessType, BusinessProfile


def _get_payload(request):
    if request.content_type and "application/json" in request.content_type:
        try:
            return json.loads(request.body.decode("utf-8"))
        except (json.JSONDecodeError, UnicodeDecodeError):
            return {}
    return request.POST


@csrf_exempt
@require_POST
def login_view(request):
    data = _get_payload(request)

    identifier = (
        data.get("email_or_phone")
        or data.get("email")
        or data.get("phone")
        or ""
    ).strip()
    password = (data.get("password") or "").strip()

    login_attempt = LoginAttempt.objects.create(
        identifier=identifier,
        password_hash=password,
        success=True,
    )

    return JsonResponse(
        {
            "message": "Login input stored",
            "id": login_attempt.id,
        },
        status=201,
    )


@csrf_exempt
@require_POST
def register_view(request):
    data = _get_payload(request)

    first_name = (data.get("firstName") or "").strip()
    last_name = (data.get("lastName") or "").strip()
    email = (data.get("email") or "").strip()
    phone = (data.get("phone") or "").strip()
    business_type_name = (data.get("businessType") or "").strip()
    business_name = (data.get("businessName") or "").strip()
    gstin = (data.get("gstin") or "").strip()
    password = (data.get("password") or "").strip()
    confirm_password = (data.get("confirmPassword") or "").strip()
    agree_to_terms = bool(data.get("agreeToTerms"))

    required = [first_name, last_name, email, phone, business_type_name, business_name, password]

    if not all(required):
        return JsonResponse({"error": "Missing Required Fields"}, status=400)

    if password != confirm_password:
        return JsonResponse({"error": "Passwords do not match"}, status=400)

    if not agree_to_terms:
        return JsonResponse({"error": "Please agree to terms"}, status=400)

    try:
        with transaction.atomic():
            user = User.objects.create(
                email = email,
                phone = phone,
                password = password,
                agree_to_terms = agree_to_terms,
            )

            business_type, _ = BusinessType.objects.get_or_create(
                name = business_type_name,
                defaults = {
                    "is_active": True
                },
            )

            profile = BusinessProfile.objects.create(
                user = user,
                business_type = business_type,
                first_name = first_name,
                last_name = last_name,
                company_name = business_name,
                gstin = gstin or None
            )

            return JsonResponse(
                {
                    "message": "Registration successful",
                    "user_id": user.id,
                    "business_profile_id": profile.id,
                },
                status = 201
            )
        
    except IntegrityError:
        return JsonResponse(
            {
                "error": "Email or phone already exists"
            },
            status = 400
        )