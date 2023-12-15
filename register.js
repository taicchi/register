function calculate() {
    // ユーザーが入力した数値を取得
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    var num4 = parseFloat(document.getElementById('num4').value);
    var num5 = parseFloat(document.getElementById('num5').value);
    var num6 = parseFloat(document.getElementById('num6').value);
    var num7 = parseFloat(document.getElementById('num7').value);
    var num8 = parseFloat(document.getElementById('num8').value);

    // 入力が数字であるかを確認
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5) || isNaN(num6) || isNaN(num7) || isNaN(num8)) {
        alert("すべての数値を入力してください");
        return;
    }

    // 数値の合計を計算
    var result1 = num1 - num2 - num8 - num5;
    var result2 = num3 - num4;
    var result3 = Math.floor(num2 - 0.1 * num8 - num7);
    var result4 = Math.floor(1.1 * num8 + num6);

    // 結果を表示する前に前回の結果をクリア
    document.getElementById('result1').innerText = "純売上10%物販: ";
    document.getElementById('result2').innerText = "純売上8%: ";
    document.getElementById('result3').innerText = "消費税10%物販: ";
    document.getElementById('result4').innerText = "その他控除: ";

    // 結果を表示
    document.getElementById('result1').innerText += result1+'円';
    document.getElementById('result2').innerText += result2+'円';
    document.getElementById('result3').innerText += result3+'円';
    document.getElementById('result4').innerText += result4+'円';
}
