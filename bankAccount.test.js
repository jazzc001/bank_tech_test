const BankAccount = require('./bankAccount')

describe('bankAccount', () => {
    let account;
    beforeEach(()=> {
        account = new BankAccount();
    })

    test('initial balance is zero', () => {
       expect(account.balance).toEqual(0)
        
    })

    describe('.deposit', () => {
        test('make deposit of 100, balance equals to 100', () => {
            account.deposit(100)
            expect(account.balance).toEqual(100)
        })
    })

    describe('.withdrawal', () => {
        test('after making a deposit of 300, make withdrawal of 200', () => {
            account.deposit(350)
            account.withdrawal(200)
            expect(account.balance).toEqual(150)
        })
    })

    describe('.printStatement', () => {
        test('bank statement is printed with correct date, deposit and balance', () => {
            account.deposit(200)
            account.withdrawal(20)
            account.deposit(30)
            expect(account.printStatement()).toEqual(`Date  || Credit || Debit || Balance /n 25/04/2022  || 0 || 200 || 200 /n Apr 25 2022  || 20 || 0 || 180 /n Apr 25 2022  || 0 || 30 || 210`)
        })
    })

    
})