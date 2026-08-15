// ---------------------------------------
// hamburger menu
// ---------------------------------------
$("#js-burger-menu,navigation__link").click(function () {
  $(".navigation").slideToggle(500);
  $(this).toggleClass("active");
});

// ---------------------------------------
// return-button
// ---------------------------------------
$(function () {
  const pageTop = $("#js-pageTop");
  pageTop.hide(); //最初はボタン非表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      //100pxスクロールしたら表示
      pageTop.fadeIn().css("display", "flex");
      //200px以上スクロールしたらボタンをフェードイン
    } else {
      pageTop.fadeOut(); //200px以下になったらボタンをフェードアウト
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, //上から0pxの位置に戻る
      },
      1000 //1000ミリ秒かけて戻る
    );
    return false;
  });
});

// ---------------------------------------
// cta
// ---------------------------------------
$(function () {
  const pageTop = $("#js-cta");
  pageTop.hide(); //最初はボタン非表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      //100pxスクロールしたら表示
      pageTop.fadeIn().css("display", "flex");
      //200px以上スクロールしたらボタンをフェードイン
    } else {
      pageTop.fadeOut(); //200px以下になったらボタンをフェードアウト
    }
  });
});


// ---------------------------------------
// footer　魚の動き
// ---------------------------------------
//ページが読み込まれたら実行する関数
window.onload = function () {
  // footer-fish クラスを持つ img 要素を取得
  const fish = document.querySelectorAll(".footer-fish img");
  // 2 秒ごとに fadeImages 関数を呼び出す
  let fadeInterval = setInterval(fadeImages, 2000);

  // 呼び出すfadeImages 関数
  function fadeImages() {
    // fish 配列のforEachループ
    fish.forEach((image, index) => {
      // 0 以上 1 未満のランダムな透明度を生成
      const randomOpacity = Math.random() * 1;
      // 0 以上 1 秒未満のランダムなディレイを生成
      const randomDelay = Math.random() * 1.5; // ランダムなディレイを 1 秒以内に設定

      // image の opacity プロパティを randomOpacity に設定
      image.style.opacity = randomOpacity;
      // フェードインの時間を 3 秒に設定
      image.style.transition = `opacity 3s ${randomDelay}s`;

      setTimeout(() => {
        image.style.opacity = 0;
      }, 3000 + randomDelay * 1000); // フェードアウト後の非表示時間を 0.5 秒に設定
    });
  }
};
