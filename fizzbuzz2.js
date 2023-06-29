// JavaScript課題２
// DOMはHTMLなどのドキュメントにJavaScriptからアクセスするための仕組み
// DOMによりオブジェクト化することでJavaScript側からはHTMLを操作できる

// 結果をHTMLの要素に追加
function appendResult(text) {
  // HTML要素(ノード）をJavaScript側で取得するにはgetElementByIdを使う
  const resultContainer = document.getElementById("result");
  // HTML要素をJavaScriptから生成するにはcreateElementを使いdiv要素を生成してresultItemに代入
  const resultItem = document.createElement("div");
  resultItem.textContent = text;
  // JavaScript側で生成したHTML要素をDOMに追加して画面に出力できるにはappendChildを使う
  // レンダリング Webの画面にHTML要素を出力（表示）
  resultContainer.appendChild(resultItem);
}

// HTMLフォームからの入力を取得してFizzBuzzを実行
function handleSubmit(event) {
  event.preventDefault();

  const fizzNum = parseInt(document.getElementById("fizz").value);
  const buzzNum = parseInt(document.getElementById("buzz").value);

  fizzBuzz(fizzNum, buzzNum);
}

// FizzBuzzの計算と結果表示を行う関数
function fizzBuzz(fizzNum, buzzNum) {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = ""; // 結果コンテナの中身をクリア

  for (let number = 1; number <= 99; number++) {
    if (number % fizzNum === 0 && number % buzzNum !== 0) {
      appendResult("Fizz " + number);
    } else if (number % buzzNum === 0 && number % fizzNum !== 0) {
      appendResult("Buzz " + number);
    } else if (number % fizzNum === 0 && number % buzzNum === 0) {
      appendResult("FizzBuzz " + number);
    }
  }
}

// フォームのサブミットイベントをハンドリング
// querySelectorの仕様は、HTML要素の中から最初に一致したものを取得するというもの
// HTMLの構造が変わった時に意図した要素が取得できない恐れがあり、HTMLの構造に依存
// 要素の取得はidを指定してgetElementByIdで取得する
// const form = document.querySelector("form");
const form = document.getElementById("form");
// イベント処理のためにaddEventListenerを使う
form.addEventListener("submit", handleSubmit);
