class BankAccount {

    constructor() {
        this.balance = 0;
    }

    deposit(money) {
        return this.balance += money;
    }


}

module.exports = BankAccount;