import { getUser, updateBalance } from "./db.js";

const tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe.user;

let balance = 0;

// LOAD USER
async function init() {
  document.getElementById("username").innerText =
    user.username || user.first_name;

  const data = await getUser(user.id);
  balance = data.balance;

  updateUI();
}

function updateUI() {
  document.getElementById("balance").innerText = balance;
}

// COIN
window.betCoin = async () => {
  if (Math.random() > 0.5) balance += 100;
  else balance -= 100;

  await updateBalance(user.id, balance);
  updateUI();
};

// TOP
window.openTop = async () => {
  alert("Топ скоро будет (след шаг)");
};

init();