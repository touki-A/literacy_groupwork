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

// --- STEP 1: 駐車場のデータを用意 ---
const parkings = [
  {
    name: '塩釜口第一パーキング',
    lat: 35.1852,
    lng: 136.9463,
    info: '<h3>塩釜口第一パーキング</h3><p>料金: 30分 50円</p><a href="parking_info.html">詳細はこちら</a>'
  },
  {
    name: '塩釜口第二パーキング',
    lat: 35.1555,
    lng: 136.9680,
    info: '<h3>塩釜口第二パーキング</h3><p>料金: 60分 100円</p><a href="parking_info.html">詳細はこちら</a>'
  },
  {
    name: '塩釜口第三パーキング',
    lat: 35.1420,
    lng: 136.9655,
    info: '<h3>塩釜口第三パーキング</h3><p>料金: 30分 50円</p><a href="parking_info.html">詳細はこちら</a>'
  }
];

// --- STEP 2 & 3: 地図を初期化し、ピンを立て、イベントを追加 ---
// この関数はHTML側から呼び出されるため、グローバルに定義しておく必要があります。
function initMap() {
  // 地図の初期化
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 35.1358, lng: 136.9763 }, // 名城大学天白キャンパス
  });

  // InfoWindowを一つだけ作成
  const infowindow = new google.maps.InfoWindow();

  // 各駐車場データに対して処理を実行
  parkings.forEach(parking => {
    const marker = new google.maps.Marker({
      position: { lat: parking.lat, lng: parking.lng },
      map: map,
      title: parking.name
    });

    // ピンに「mouseover」イベントを追加
    marker.addListener('mouseover', () => {
      infowindow.setContent(parking.info);
      infowindow.open(map, marker);
    });

    // ピンからマウスが離れたらInfoWindowを消す
    marker.addListener('mouseout', () => {
      infowindow.close();
    });
  });
}