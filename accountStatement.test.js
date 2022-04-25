const AccountStatement = require('./accountStatement')
const BankAccount = require('./bankAccount')

describe('accountStatement', () => {
    let statement;
    beforeEach(()=> {
        statement = new AccountStatement();
    })

    let account;
    beforeEach(() => {
        account = new BankAccount();
    })

    test('account statement with correct balance', () => {
        account.deposit(350)
        expect(statement.print).toEqual({Date: '25/04/2022', Credit: 350, Balance: 350})
    })
})