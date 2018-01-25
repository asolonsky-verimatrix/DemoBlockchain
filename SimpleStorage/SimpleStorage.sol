pragma solidity ^0.4.0;

contract SimpleStorage {
    uint storedData;
    string public StoredString;

    function set(uint x) public {
        storedData = x;
    }

    function get() public constant returns (uint) {
        return storedData;
    }

    function StringSet(string x) public {
        StoredString = x;
    }

    function StringGet() public constant returns (string) {
        return StoredString;
    }
}

