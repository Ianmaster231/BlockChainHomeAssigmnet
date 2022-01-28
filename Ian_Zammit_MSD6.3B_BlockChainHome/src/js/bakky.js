var web3Provider = null;
var contracts = {};
var xManContract;
const GANACHE_URL ='http://127.0.0.1:8545';
const CONTRACT_FILE_NAME = 'XManGame.json';
const GAS_LIMIT = 500000;

const NUMBER_OF_XMEN = 16;

const initWeb3 = async() =>{
    await window.ethereum.enable();

    if(typeof web3 !=='undefined'){
        web3Provider = await web3.currentProvider;
        web3 = new Web3(web3.currentProvider);
    }else{
        web3Provider = new Web3.providers.HttpProvider(GANACHE_URL);
        web3 = new Web3(web3Provider);
    }
    return[web3, web3Provider];
}
const initContract = async() =>{
    var json_contract = await $.getJSON(CONTRACT_FILE_NAME);
    contracts.XManGame = TruffleContract(json_contract);
    await contracts.XManGame.setProvider(web3Provider);

}

const getAccount = () =>{
    return new Promise(async (accept,reject)=>{
        try{
            web3.eth.getAccounts( (error,accounts)=>{
                accept(accounts[0]);
                if(accounts.length ==0){
                    reject('It was not possiblle to get get accounts');
                }
            });
        } catch(err){
            console.log('it was not possibvle to get accounts $(err');
        }
    });
}

const getBalance = async (account)=>{
    let balance = 0;
    var contractInstance = await contracts.XManGame.deployed();
    const raw = await contractInstance.balanceOf.call(account);
    balance = raw.c[0];
    $('#IZTbalance').text(balance);
}

const handleTransfer = async (event) =>{
    event.preventDefault;
    var account = await getAccount();

    var amount = parseInt($('#IZTAmount').val());
    var toAddress = $('#IZTAddress').val();

    console.log('Trasnfer ' +amount+ 'IZT to' + toAddress);

    var contractInstance = await contracts.XManGame.deployed();

    const result = await contractInstance.transfer(toAddress, amount,{from: account,gas: GAS_LIMIT});

    if(result.receopt.status ==="0x1"){
        alert('Transfer successful');
        getBalance(account);
    }
}

const handleCreateXMan = async (event) =>{
    event.preventDefault();

    var xManName = $('#IZTName').val();
    var amount = $('#IZTAmount').val();

    if(xManName ==""){
        alert('Name must be provided')
        return;
    }
    if(isNaN(amount)){
        alert("Amount must be more then 100IZT");
        return;
    }
}
const refresh = async() =>{
    document.getElementById('IZTName').value='';
    document.getElementById('IZTAmount').value='';
}

const collectXMen = async () =>{
    var contractInstance = await  contracts.XManGame.deployed();
    var account = await getAccount();
    var xMen = []

    const NUMBER_OF_XMEN = queryNumberOfXmen.c[0];

    for(1=0; i<NUMBER_OF_XMEN; i++){
        const xman = await contractIsntance.xMenToOwner(account, i);
        const name = xman[0];
        const dna = xman[1].c[1];

        var xMan = {
            name: name,
            dna:dna
        }
        xMen.push(xMan);
    }
    return xMen;
}


return new Promise( async (accept,reject)=>{
    try{
        var contractIsntance = await contracts.XManGame.deploy();
        console.log(contractinstance);
        var account = await getAccounts();
        const result = await contractInstance.createRandomXMan(xManName,amount,{from: account, gas: GAS_LIMIT});
        console.log(result)
        if(result.receipt.status = "0x1"){
            alert('XMan successfully crated');
            getBalance(account);
        }
        refresh();
        accept();
    }catch(err){
        alert('You need to have at least 100 IZT to create a character');
    }
});

