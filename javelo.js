document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.querySelector('.star-container');
    const numStars = 50; // Số lượng ngôi sao
    const skyWidth = window.innerWidth;
    const skyHeight = window.innerHeight;

    // 1. TẠO SAO LẤP LÁNH
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Vị trí ngẫu nhiên
        const x = Math.random() * skyWidth;
        const y = Math.random() * skyHeight;

        // Kích thước ngẫu nhiên (1px đến 3px)
        const size = Math.random() * 2 + 1;

        // Tốc độ lấp lánh ngẫu nhiên
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 4;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;
        star.style.opacity = Math.random(); // Độ mờ ban đầu

        starContainer.appendChild(star);
    }

    // 2. HIỆU ỨNG MỞ THIỆP
    const greetingCard = document.getElementById('greetingCard');
    const openButton = document.getElementById('openButton');

    // Mặc định thiệp sẽ đóng khi mới load trang
    greetingCard.classList.add('closed');

    // Sự kiện khi click vào nút hoặc thiệp đóng
    const toggleCard = () => {
        greetingCard.classList.toggle('closed');
        greetingCard.classList.toggle('open');
    };

    openButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Ngăn chặn sự kiện click lan truyền
        toggleCard();
    });

    // Cho phép click vào thiệp khi nó đang đóng để mở
    greetingCard.addEventListener('click', () => {
        if (greetingCard.classList.contains('closed')) {
            toggleCard();
        }
    });

    // 3. (Tùy chọn) LỒNG ĐÈN BAY LÊN
    // Để lồng đèn bay lên đẹp mắt hơn, bạn có thể dùng một animation phức tạp hơn 
    // hoặc thêm hiệu ứng bay ngẫu nhiên bằng JS.

    // Ví dụ: Lồng đèn sẽ từ từ trôi lên trên và mờ dần
    const lantern = document.getElementById('lantern1');
    const flyUp = () => {
        lantern.style.animation = 'flyUp 60s linear forwards';
    };

    // Định nghĩa animation 'flyUp' trong CSS nếu muốn dùng JS để kích hoạt
    // Hiện tại, lồng đèn chỉ đung đưa với animation 'sway' đã có.

    // Nếu muốn tự động bay lên sau 5 giây:
    // setTimeout(flyUp, 5000); 
});
