const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Giả lập số điện thoại ảo
const virtualNumbers = {
    '0123456789': '0987654321',
    '0987654321': '0123456789',
    '0912345678': '0876543210',
};

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Thư mục chứa file HTML

// API để lấy số điện thoại ảo
app.post('/get-virtual-number', (req, res) => {
    const { phone } = req.body;
    const virtualNumber = virtualNumbers[phone];

    if (virtualNumber) {
        res.send({ virtualNumber });
    } else {
        res.status(404).send({ message: 'Số điện thoại không có sẵn.' });
    }
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
