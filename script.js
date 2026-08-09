document.addEventListener('DOMContentLoaded', function() {
    // ---- 1. 滚动动画 ----
    const fadeElements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -20px 0px'
    });
    fadeElements.forEach(el => observer.observe(el));

    // ---- 2. 打字机效果 ----
    const text = '帮你把想法变成网站';
    const typedElement = document.getElementById('typed-text');
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typedElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 120);
        }
    }

    // 延迟 600ms 开始打字，等页面淡入动画完成
    setTimeout(typeWriter, 600);

document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
function openQrModal() {
    var modal = document.getElementById('qr-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // 禁止背景滚动
    }
}

// 关闭弹窗（点击背景触发）
function closeQrModal(event) {
    // 只有点击的是背景本身（而不是内部内容）才关闭
    if (event.target === event.currentTarget) {
        var modal = document.getElementById('qr-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
}

// 关闭弹窗（点击 × 触发）
function closeQrModalDirect() {
    var modal = document.getElementById('qr-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// 按 ESC 键也能关闭弹窗
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        var modal = document.getElementById('qr-modal');
        if (modal && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
});
});