/* 
Створіть клас "Рахунок"
з приватною властивістю "баланс" та публічним методом "додати" для додавання
грошей на рахунок. Створіть підкласи "ДоларовийРахунок" і "ЄвровийРахунок", які
успадковують клас "Рахунок". У підкласах перевизначте метод "додати" таким
чином, щоб він приймав параметр "сума" і конвертував її відповідно до валюти
рахунку. Курс конвертації можна встановити як статичну властивість для кожного
підкласу. Перевірте роботу класів, створивши об'єкти "ДоларовийРахунок" і
"ЄвровийРахунок" і використовуючи їх методи "додати". 
*/

class Account {
  #balance = 0;
  deposit(value) {
    if (value > 0) this.#balance += value;
    else console.log('Error balance', value);
  }
}

class Dollar extends Account {
  static exchange = 37;
  depositUSD(uah) {
    const usd = Math.floor(uah / Dollar.exchange);
    this.deposit(usd);
  }
}

class Euro extends Account {
  static exchange = 41;
  depositEUR(uah) {
    const eur = Math.floor(uah / Euro.exchange);
    this.deposit(eur);
  }
}

const usdAccount = new Dollar();
usdAccount.depositUSD(1000);
usdAccount.depositUSD(1000);
console.log(usdAccount);

const eurAccount = new Euro();
eurAccount.depositEUR(1000);
eurAccount.depositEUR(1000);
console.log(eurAccount);
