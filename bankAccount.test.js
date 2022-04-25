const BankAccount = require('./bankAccount')

describe('bankAccount', ()=> {
    let account;
    beforeEach(()=> {
        account = new BankAccount();
    })

    test('initial balance is zero', ()=>{
       expect(account.balance).toEqual(0)
        
    })

    describe('.deposit', () => {
        test('make deposit of 100, balance equals to 100', () => {
            expect(account.deposit(100)).toEqual(100)
        })
    })

    
})