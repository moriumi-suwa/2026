// modal

document.addEventListener("DOMContentLoaded", function () {
  // モーダルを開くボタンをすべて取得
  const modalButtons = document.querySelectorAll(".openModal");

  // モーダルのクローズボタンを取得
  const closeButton = document.querySelector(".modal .close");
  const modal = document.getElementById("modal");
  const pdfViewer = document.getElementById("pdfViewer");

  // 各ボタンにクリックイベントを追加
  modalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // ボタンのdata-pdf属性からPDFのURLを取得し、iframeに設定
      const pdfUrl = button.getAttribute("data-pdf");
      pdfViewer.setAttribute("src", pdfUrl);

      // モーダルを表示
      modal.style.display = "block";

      // スクロールを無効化（ロック）
      document.body.style.overflow = "hidden";
    });
  });

  // クローズボタンにクリックイベントを追加
  closeButton.addEventListener("click", () => {
    // モーダルを非表示
    modal.style.display = "none";

    // スクロールを有効化（解除）
    document.body.style.overflow = "";
  });

  // モーダル外をクリックしたときにモーダルを閉じる処理
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";

      // スクロールを有効化（解除）
      document.body.style.overflow = "";
    }
  });
});

// fade-in

// ページが完全に読み込まれたときに、指定した関数を実行
document.addEventListener("DOMContentLoaded", function () {
  // '.course__contents' クラスを持つ全ての要素を取得
  const elements = document.querySelectorAll(".course__contents");

  function checkPosition() {
    elements.forEach((el) => {
      // 各要素のビューポートに対する位置を取得
      const rect = el.getBoundingClientRect();
      // 要素が画面の下半分に入っていて、画面外ではない場合
      if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
        // 'visible' クラスを追加してフェードインを実行
        el.classList.add("visible");
        // 要素が画面外に出たら 'visible' クラスを削除
        // 再び画面に入った際にフェードインを再度実行可能にする
      } else {
        el.classList.remove("visible");
      }
    });
  }

  // スクロールイベントが発生した時にcheckPosition関数を呼び出す
  window.addEventListener("scroll", checkPosition);
  checkPosition(); // ページ読み込み時にもチェック
});
