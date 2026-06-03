import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url

# 1. Configure Cloudinary
cloudinary.config(
  cloud_name = "dpidjttot",
  api_key = "321925448797959",
  api_secret = "KFeiT-xsevecbwFHGq9XOTP7rUY",
  secure = True
)

# 2. Upload an image
print("Uploading image...")
upload_result = cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/sample.jpg")
print(f"Secure URL: {upload_result['secure_url']}")
print(f"Public ID: {upload_result['public_id']}")

# 3. Get image details
print(f"Width: {upload_result['width']}")
print(f"Height: {upload_result['height']}")
print(f"Format: {upload_result['format']}")
print(f"File size: {upload_result['bytes']} bytes")

# 4. Transform the image
# f_auto: Automatically selects the best image format for the requesting browser (e.g., WebP or AVIF).
# q_auto: Automatically adjusts the image quality to balance file size and visual fidelity.
transformed_url, options = cloudinary_url(
    upload_result['public_id'],
    fetch_format="auto",
    quality="auto",
    secure=True
)

print("\nDone! Click link below to see optimized version of the image. Check the size and the format.")
print(transformed_url)
