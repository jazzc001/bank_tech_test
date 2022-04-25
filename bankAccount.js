class BankAccount {

    constructor() {
        this.balance = 0;
        this.transaction = [];
    }

    deposit(money) {
        this.balance += money;
        this.transaction.push({Date: new Date(), Credit: 0, Debit: money, Balance: this.balance});
        
    }

    withdrawal(money) {
        this.balance -= money;
        this.transaction.push({Date: new Date(), Credit: money, Debit: 0, Balance: this.balance});
    }

    print() {
        console.log('Date  || Credit || Debit || Balance')
        for(let i = 0; i<this.transaction.length ; i++ ) {
            console.log(`\n${this.transaction[i].Date} || ${this.transaction[i].Credit} || ${this.transaction[i].Debit} || ${this.transaction[i].Balance}`)
        }
    }
}

module.exports = BankAccount;