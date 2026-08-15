// ===========================
// loading
// ===========================
document.addEventListener("DOMContentLoaded", function() {
  // Wait for 5 seconds
  setTimeout(function() {
    // Hide the loading screen
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';

    // Display the main content and remove the loading screen from the DOM after the transition
    setTimeout(function() {
      loadingScreen.style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    }, 1000); // Wait for CSS transition to finish
  }, 5000);
});
// ===========================
// main-title　ふんわり表示
// ===========================

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".main-title").classList.add("visible");
  }, 500);
});

// ===========================
// 草むらから顔を出す鹿１
// ===========================

// ページ内のスクロールイベントが発生したときに特定の実行するためのイベントリスナーを追加
document.addEventListener("scroll", function () {
  // クラス名が top-overview__bg-left1-1 の画像要素を取得
  const image = document.querySelector(".top-overview__bg-left1-1");
  // 画像の位置とサイズを取得する(画像が画面の中央にあるかどうかを判定)
  const rect = image.getBoundingClientRect();
  // ビューポート（ブラウザの表示領域）の高さを取得する
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // 画像がビューポートの中央にあるかどうかを確認する
  if (rect.top >= 0 && rect.bottom <= windowHeight) {
    // 画像が中央にある場合、画像を45px右上に移動させる
    image.style.transform = "translate(45px, -45px)";
  } else {
    // 画像が中央にない場合、元の位置に戻す
    image.style.transform = "translate(0, 0)";
  }
});

// ===========================
// 草むらから顔を出す鹿２
// ===========================

document.addEventListener("scroll", function () {
  // 画像要素を取得する
  const image = document.querySelector(".top-overview__right-grass1");

  // 画像の位置とサイズを取得する
  const rect = image.getBoundingClientRect();

  // ビューポート（ブラウザの表示領域）の高さを取得する
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // 画像がビューポートの中央にあるかどうかを確認する
  if (rect.top >= 0 && rect.bottom <= windowHeight) {
    // 画像が中央にある場合、画像を50px左上に移動させる
    image.style.transform = "translate(-45px, -45px)";
  } else {
    // 画像が中央にない場合、元の位置に戻す
    image.style.transform = "translate(0, 0)";
  }
});

// ===========================
// 飛んでいるしろい蝶々
// ===========================
// ページがロードされたときに実行
document.addEventListener("DOMContentLoaded", (event) => {
  // 画像要素を取得する
  const target = document.querySelector(".event__top-Butterfly");

  // Intersection Observerを使って要素が視界に入ったことを検出する
  const observer = new IntersectionObserver(
    (entries) => {
      // entriesは監視している要素の交差状態を配列で提供する
      entries.forEach((entry) => {
        // isIntersectingがtrueなら要素が視界に入っている
        if (entry.isIntersecting) {
          // 要素を左上に100px移動する
          target.style.transform = "translate(-100px, -100px)";

          // 移動アニメーションが終わったら次のアニメーションを開始する
          // transitionendイベントはアニメーションが完了したことを示す
          target.addEventListener(
            "transitionend",
            () => {
              // 上下にふわふわ動くクラスを追加
              target.classList.add("float");
            },
            { once: true } // イベントハンドラーを一度だけ実行する
          );
          // 一度だけ実行するために観測対象から外す
          observer.unobserve(target);
        }
      });
    },
    {
      root: null, // ビューポートを基準に交差を検出
      rootMargin: "100px", // 視界の外側100pxでも発火するよう調整
      threshold: 0, // 要素の1ピクセルでも視界に入ったら発火
    }
  );

  // Observerを開始し、target要素を監視対象にする
  observer.observe(target);
});

// ===========================
// 飛んでいる黄色い蝶々
// ===========================

// DOMが完全に読み込まれたら以下の処理を開始
document.addEventListener("DOMContentLoaded", function () {
  // 画像要素を取得
  const butterfly = document.querySelector(".event__bottom-butterfly");
  // スクロールイベントが発生したときの処理
  const onScroll = () => {
    // 画像の現在の位置とサイズを取得
    const rect = butterfly.getBoundingClientRect();
    // ウィンドウの高さを取得
    const windowHeight = window.innerHeight;
    // 画面に要素がすべて入った時
    if (rect.top < windowHeight && rect.bottom > 0) {
      // movedクラスを追加して移動させる
      butterfly.classList.add("moved");

      // アニメーションが完了したあとふわふわ動くクラスを追加
      butterfly.addEventListener(
        "transitionend",
        () => {
          // ふわふわ動くクラスを追加
          butterfly.classList.add("butterfly");
        },
        { once: true } // イベントリスナーは一度だけ実行
      );

      // 一度動作したらリスナーを解除
      window.removeEventListener("scroll", onScroll);
    }
  };

  // 画像が一度動作したら、リスナーを解除して以後のスクロールイベントで処理を実行しない
  window.addEventListener("scroll", onScroll);
});
