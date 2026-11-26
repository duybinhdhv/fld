# B1 Passport – Luyện 4 kỹ năng tiếng Anh B1

B1 Passport là website học trực tuyến (LMS) để luyện **Nghe – Nói – Đọc – Viết** tiếng Anh trình độ B1 (CEFR, tương đương Bậc 3 Khung 6 bậc dùng cho Việt Nam). Website viết bằng HTML/CSS/JavaScript thuần, không cần máy chủ hay cơ sở dữ liệu, nên chạy được ngay trên **GitHub Pages**.

## Chức năng

| Phân hệ | Chức năng chính |
|---|---|
| **Nghe** (4 bài) | Máy đọc hội thoại nhiều giọng (Text-to-Speech), chỉnh tốc độ, tạm dừng, đếm số lần nghe, từ vựng trước khi nghe, lời thoại tô sáng theo câu đang đọc, câu hỏi trắc nghiệm và điền từ có giải thích |
| **Nói** (4 bài) | Luyện phát âm (shadowing) có chấm điểm bằng nhận diện giọng nói, tô màu từ đúng/sai; thẻ chủ đề có đồng hồ chuẩn bị và đồng hồ nói; ghi âm và nghe lại; chép lời tự động kèm số từ/phút và các từ nối đã dùng; bài nói mẫu; tự đánh giá theo 4 tiêu chí B1 |
| **Đọc** (4 bài) | Blog, bài báo, thông báo ngắn; bấm vào từ để xem nghĩa và nghe phát âm; nghe đọc toàn bài; câu hỏi trắc nghiệm và True/False/Not Given có giải thích |
| **Viết** (4 bài) | Email thân mật, bài báo, truyện ngắn, thư phàn nàn; dàn ý, ngôn ngữ mẫu bấm để chèn vào bài, đếm từ, bấm giờ, tự lưu nháp, nhận xét tự động (độ dài, đoạn văn, từ nối, yêu cầu riêng của từng dạng bài, lỗi hình thức), bài mẫu, sao chép, tải về .txt |
| **Từ vựng** | Thẻ lật (flashcard) cho tất cả từ trong các bài, nghe phát âm, đánh dấu đã thuộc, lọc theo bài, trộn thẻ, tra cứu |
| **Kiểm tra** | 20 câu ngẫu nhiên (ngữ pháp và từ vựng), 15 phút, có xếp mức B1 và giải thích từng câu |
| **Tiến độ** | Hộ chiếu học tập có con dấu, điểm XP, chuỗi ngày học, 10 huy hiệu, điểm từng bài, sao lưu và khôi phục tiến độ |

## Đưa website lên GitHub Pages

1. Đăng nhập [github.com](https://github.com), chọn **New repository**, đặt tên (ví dụ `b1-english`), chọn **Public**, bấm **Create repository**.
2. Trong repository mới, chọn **Add file → Upload files**. Kéo **toàn bộ nội dung** của thư mục đã giải nén vào (gồm `index.html`, thư mục `assets`, `README.md`, `.nojekyll`). Bấm **Commit changes**.
3. Vào **Settings → Pages**. Ở mục *Build and deployment*, chọn *Source: Deploy from a branch*, *Branch: `main`* và thư mục `/ (root)`, rồi bấm **Save**.
4. Sau 1–2 phút, website có địa chỉ: `https://<tên-tài-khoản>.github.io/b1-english/`

> Lưu ý: tệp `.nojekyll` là tệp ẩn. Nếu máy tính không hiển thị tệp này thì có thể bỏ qua, vì website vẫn chạy bình thường.

## Lưu ý kỹ thuật

- **Nhận diện giọng nói** và **ghi âm** cần trình duyệt Google Chrome hoặc Microsoft Edge, trang phải chạy qua `https://` (GitHub Pages đáp ứng sẵn), và người học phải cho phép dùng micro.
- **Giọng đọc** dùng giọng tiếng Anh cài sẵn trong trình duyệt hoặc hệ điều hành. Chrome trên máy tính có giọng Google chất lượng tốt.
- **Tiến độ** được lưu trong `localStorage` của từng trình duyệt. Người học dùng mục *Tiến độ → Sao lưu* để chuyển dữ liệu sang máy khác hoặc gửi cho giáo viên.

## Thêm hoặc sửa bài học

Toàn bộ học liệu nằm trong `assets/data.js`:

- Bài nghe: mảng `listening` gồm `lines` (lời thoại theo người nói) và `questions`.
- Bài nói: mảng `speaking` gồm `shadow`, `task`, `phrases`, `model`.
- Bài đọc: mảng `reading`. Từ cần chú giải viết theo dạng `{word|nghĩa}`.
- Bài viết: mảng `writing` gồm đề, dàn ý, ngôn ngữ mẫu, `checks` (biểu thức kiểm tra) và bài mẫu.
- Ngân hàng ngữ pháp: mảng `grammar`.

Dạng câu hỏi: `mc` (trắc nghiệm, `a` là chỉ số đáp án đúng), `tf` (`a` là `"T"`, `"F"` hoặc `"NG"`), `gap` (`a` là danh sách đáp án được chấp nhận).

Khi thêm bài mới, nhớ thêm mã bài vào `plan` (lộ trình) nếu muốn bài đó xuất hiện trong lộ trình 4 tuần.

## Cấu trúc thư mục

```
index.html          Khung trang
assets/style.css    Giao diện (hỗ trợ sáng/tối, điện thoại)
assets/data.js      Học liệu
assets/app.js       Chức năng
.nojekyll           Cho GitHub Pages phục vụ nguyên trạng
```

Toàn bộ học liệu là nội dung biên soạn mẫu cho mục đích giảng dạy. Các nhân vật, công ty và số liệu khảo sát trong bài đọc, bài nghe đều là giả định.
