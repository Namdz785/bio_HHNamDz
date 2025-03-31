window.onload = function () {  
    const typedText = document.querySelector(".typed");

    if (!typedText) {
        console.error("LỖI: Không tìm thấy phần tử .typed! Kiểm tra lại HTML.");
        return;
    }

    const textArray = ["Tôi là một skider.", "Tôi là một người yêu IT."];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentText = textArray[textIndex];
        let displayedText = currentText.substring(0, charIndex);
        typedText.textContent = displayedText;

        // 🔥 Hiệu ứng siêu mượt với opacity
        typedText.style.opacity = isDeleting ? "0.5" : "1";

        // 🔥 Hiệu ứng phóng to nhẹ khi thay đổi chữ
        typedText.style.transform = "scale(1.05)";
        setTimeout(() => {
            typedText.style.transform = "scale(1)";
        }, 200);

        // 🌟 Gõ chữ với tốc độ cực kỳ tự nhiên
        let typingSpeed = isDeleting ? 40 : Math.random() * (120 - 40) + 40;

        if (!isDeleting) {
            charIndex++;
            if (charIndex > currentText.length) {
                isDeleting = true;
                typingSpeed = 1500; // Chờ lâu hơn trước khi xóa
            }
        } else {
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
                typingSpeed = 700; // Chờ lâu hơn trước khi gõ chữ mới
            }
        }
        setTimeout(typeEffect, typingSpeed);
    }

    setTimeout(typeEffect, 1000); // Đợi 1s trước khi bắt đầu
};

