/**
 * ============================================================
 * 1. 滚动触发动画（Intersection Observer）
 * ============================================================
 */
document.addEventListener('DOMContentLoaded', function() {
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

    // ============================================================
    // 2. 打字机效果
    // ============================================================
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
    setTimeout(typeWriter, 600);

    // ============================================================
    // 3. 自动更新版权年份
    // ============================================================
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// ============================================================
// 4. 微信二维码弹窗（定义在全局，供 onclick 调用）
// ============================================================

function openQrModal() {
    var modal = document.getElementById('qr-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeQrModal(event) {
    if (event.target === event.currentTarget) {
        var modal = document.getElementById('qr-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
}

function closeQrModalDirect() {
    var modal = document.getElementById('qr-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        var modal = document.getElementById('qr-modal');
        if (modal && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
});