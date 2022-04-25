const BankAccount = require('./bankAccount')

describe('bankAccount', ()=> {

    describe('BankAccount model', ()=>{
        let account;
        beforeEach(()=> {
            account = new BankAccount();
        })

        describe('.deposit', () => {
            it('make deposit of 100', () => {
                expect(account.deposit(100)).toEqual(100)
            })
        })
    })

    
})