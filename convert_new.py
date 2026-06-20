import os
from PIL import Image
import sys

def convert_to_webp(folder_path):
    print(f"Starting conversion in {folder_path}...")
    success_count = 0
    fail_count = 0
    
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_lower = file.lower()
            if file_lower.endswith('.png') or file_lower.endswith('.jpg') or file_lower.endswith('.jpeg'):
                file_path = os.path.join(root, file)
                
                # Skip the transparent logo
                if 'logo' in file_lower:
                    continue
                
                # Skip if a webp version already exists
                webp_path = os.path.splitext(file_path)[0] + '.webp'
                if os.path.exists(webp_path):
                    continue
                
                try:
                    img = Image.open(file_path)
                    if img.mode in ("RGBA", "P"):
                        img = img.convert("RGB")
                    
                    img.save(webp_path, "WEBP", quality=80)
                    success_count += 1
                except Exception as e:
                    print(f"Error converting {file_path}: {e}")
                    fail_count += 1

    print(f"Conversion complete. {success_count} files converted successfully. {fail_count} failed.")

if __name__ == "__main__":
    folder = sys.argv[1] if len(sys.argv) > 1 else "."
    convert_to_webp(folder)
