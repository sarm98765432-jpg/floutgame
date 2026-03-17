function playCrash() {
  let multi = (Math.random() * 5).toFixed(2);

  if (multi > 2) {
    balance += 100;
    document.getElementById("result").innerText = "🚀 Выигрыш x" + multi;
  } else {
    balance -= 100;
    document.getElementById("result").innerText = "💥 Краш на x" + multi;
  }

  updateBalance();
}