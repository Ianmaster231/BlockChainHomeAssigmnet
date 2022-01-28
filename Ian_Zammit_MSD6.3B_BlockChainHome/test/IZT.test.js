var IZToken = artifacts.require("./IZToken.sol");

contract('IZToken',(accounts)=>{
    let contractInstance;
    const INITIAL_SUPPLY = 1000000;

    beforeEach(async ()=>{
        contractInstance = await IZToken.deployed();
    });
    it('Should put Tokens in the first sccount', async() =>{
        let balance = await contractInstance.balanceOf.call(accounts[0])
        assert.equal(balance.valueOf(), INITIAL_SUPPLY, 'The initial supply seams not correct ');
    });
    it('Should send 10 IZT correctnly', async ()=>{
        var account_one = accounts[0];
        var account_two = accounts[1];

        var account_one_Starting_balance = await contractInstance.balanceOf.call(account_one);
        var account_two_Starting_balance = await contractInstance.balanceOf.call(account_two);

        var amount =10;
        await contractInstance.transfer(account_two,amount, {from: account_one})
        
        var account_one_ending_balance = await contractInstance.balanceOf.call(account_one);
        var account_two_ending_balance = await contractInstance.balanceOf.call(account_two);


        var balance_one = account_one_ending_balance.toNumber();
        var balance_two = account_two_ending_balance.toNumber();
        var check_one = account_one_Starting_balance - amount;
        var check_two = account_two_Starting_balance + amount;
        assert.equal(balance_one,check_one,"Amount was't successfully taken from the sender.");
        assert.equal(balance_two,check_two,"Amount was't successfully sent to the receiver");


        
       
    })
    it('Should collect the IZT of a specific account', async()=>{
        var account = accounts[0];
        const GAS_LIMIT = 500000;
        let queryNumberOfIZT = await contractInstance.getNumberOfIZT({from: account,gas: GAS_LIMIT});
        assert.equal(queryNumberOfIZT,0,"Not valid IZT creatred")
    })
})