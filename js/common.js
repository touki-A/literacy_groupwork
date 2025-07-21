/**
 * main.js
 * このサイトの共通スクリプト
 */

// DOMが読み込まれたら実行
document.addEventListener('DOMContentLoaded', () => {

    // --- モバイルメニューのトグル機能 ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // ボタンが存在する場合のみイベントリスナーを設定
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
    }


    // --- トップへ戻るボタンのロジック ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // ボタンが存在する場合のみ処理を実行
    if (scrollToTopBtn) {
        // ページがある程度スクロールされたらボタンを表示
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        // ボタンクリックでページのトップへスムーズにスクロール
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
