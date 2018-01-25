loadScript("./SimpleStorage/SimpleStorage.js")
var SimpleStorageContract = web3.eth.contract(JSON.parse(SimpleStorageOutput.contracts["SimpleStorage.sol:SimpleStorage"].abi));
var SimpleStorage = eth.contract(SimpleStorageContract.abi).at(SimpleStorageAddress);

