class BankAccount {

    constructor() {
        this.balance = 0;
        this.#transaction = [];
    }

    deposit(money) {
        this.balance += money;
        this.transaction.push({date: new Date(), credit: 0, debit: money, balance: this.balance});
        
    }

    withdrawal(money) {
        this.balance -= money;
        this.transaction.push({date: new Date(), credit: money, debit: 0, balance: this.balance});
    }

    print()
}

module.exports = BankAccount;