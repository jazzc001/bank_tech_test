class BankAccount {

    constructor() {
        this.balance = 0;
        this.transaction = [];
    }

    deposit(money) {
        this.balance += money;
        this.transaction.push({Date: new Date(), Credit: [], Debit: money, Balance: this.balance});
        
    }

    withdrawal(money) {
        this.balance -= money;
        this.transaction.push({Date: new Date(), Credit: money, Debit: [], Balance: this.balance});
    }

    printStatement() {
        console.log('Date  || Credit || Debit || Balance')
        for(let i = 0; i < this.transaction.length ; i++ ) {
            console.log(`\n${this.transaction[i].Date.getDate()}/${this.transaction[i].Date.getMonth()}/${this.transaction[i].Date.getFullYear()} || ${this.transaction[i].Credit} || ${this.transaction[i].Debit} || ${this.transaction[i].Balance.toFixed(2)}`)
        }
    }

}

module.exports = BankAccount;