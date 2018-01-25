#!/bin/bash

echo "var SimpleStorageOutput=`solc --optimize --combined-json abi,bin,interface SimpleStorage.sol`" > SimpleStorage.js
