function playCoin() {
  let win = Math.random() > 0.5;

  if (win) {
    balance += 50;
    document.getElementById("result").innerText = "🪙 Победа!";
  } else {
    balance -= 50;
    document.getElementById("result").innerText = "❌ Проигрыш";
  }

  updateBalance();
}