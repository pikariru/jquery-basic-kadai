$(document).ready(function() {
    // ページロード時の処理
    console.log("「loadイベントが発生しました」");
  
    // スクロールイベントの処理
    $(window).scroll(function() {
      console.log("「scrollイベントが発生しました」");
    });
  });