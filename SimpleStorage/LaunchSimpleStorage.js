loadScript("./SimpleStorage/SimpleStorage.js")

var SimpleStorageContract = web3.eth.contract(JSON.parse(SimpleStorageOutput.contracts["SimpleStorage.sol:SimpleStorage"].abi));

var SimpleStorage = SimpleStorageContract.new({ from: ContractOwner, data: "0x" + SimpleStorageOutput.contracts["SimpleStorage.sol:SimpleStorage"].bin, gas: 4700000},
  function (e, contract) {
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
  }
);

while (true)
{
  Status = eth.pendingTransactions;
  if (Status.length == 0)
    break;
  console.log("Busy");
  admin.sleep(5);
}
