const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Giả lập cơ sở dữ liệu
let messages = [];
let users = [
    { phone: '0123456789', password: 'password123', name: 'Nguyễn Văn A' },
    { phone: '0987654321', password: 'password456', name: 'Trần Thị B' },
    { phone: '0912345678', password: 'password789', name: 'Lê Văn C' }
];

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Thư mục chứa file HTML

// Đăng ký người dùng
app.post('/register', (req, res) => {
    const { phone, password, name } = req.body;
    users.push({ phone, password, name });
    res.send({ message: 'Đăng ký thành công!' });
});

// Gửi tin nhắn
app.post('/send-message', (req, res) => {
    const { message, userId } = req.body; // Cần truyền userId để lưu tin nhắn
    messages.push({ message, userId });
    res.send({ message: `Bạn: ${message}` });
});

// Lấy danh sách bạn bè
app.get('/friends', (req, res) => {
    res.send(users);
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
