/**
 * 滚动触发动画（Intersection Observer）
 * 功能：当 .fade-in-up 元素进入视口时，添加 .is-visible 类触发淡入上移动画
 */
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
// ============================================================
// 微信二维码点击弹窗放大（P1）
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const qrImg = document.getElementById('wechat-qr');
    const modal = document.getElementById('qr-modal');
    const closeBtn = document.getElementById('qr-modal-close');

    if (qrImg && modal && closeBtn) {
        // 点击二维码 → 显示弹窗
        qrImg.addEventListener('click', function() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // 禁止背景滚动
        });

        // 点击关闭按钮 → 隐藏弹窗
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // 点击弹窗背景（灰色区域）→ 隐藏弹窗
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // 按 ESC 键 → 隐藏弹窗
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// ============================================================
// 自动更新版权年份（延续之前的）
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
});