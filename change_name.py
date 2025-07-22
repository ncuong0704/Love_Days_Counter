import os

# Thư mục chứa ảnh (điền đường dẫn của bạn vào đây)
folder_path = 'images/slider-min'

# Lấy danh sách tất cả file ảnh (lọc đuôi jpg, png, jpeg...)
image_files = [f for f in os.listdir(folder_path) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]

# Sắp xếp file theo tên cũ để đảm bảo thứ tự
image_files.sort()

# Đổi tên từng file
for i, filename in enumerate(image_files, start=1):
    ext = os.path.splitext(filename)[1]  # Lấy phần mở rộng (.jpg, .png,...)
    new_name = f"{i}-min{ext}"
    old_path = os.path.join(folder_path, filename)
    new_path = os.path.join(folder_path, new_name)
    os.rename(old_path, new_path)

print("✅ Đã đổi tên ảnh từ 1 đến", len(image_files))
