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
    // 自动更新版权年份
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
});