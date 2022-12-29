# Hardhat Token Sample

## Install depedencies
```npm install```

--------------------------------

## Install from Scratch
### install hardhat
```npm install --save-dev hardhat```

### setup project
```npx hardhat```

--------------------------------

### Setup network and account
Go to hardhat.config.js
Change ALCHEMY-KEY and PRIVATE-KEY with your own

### Install openzeppelin contracts
Because in this sample we will create token and using Openzepplin standard.
We need to install
```npm install @openzeppelin/contracts```

### Compile
```npx hardhat compile```

### Artifacts
It will produce two folders, artifacts and cache.
To get ABI and Bytecode, go to artifacts/contracts/Token.json

### Deploy to ganache
You have to setup your ganache
to deploy bytecode into blockchain you can run 
```npx hardhat run scripts/deploy.js --network ganache```

if you want to deploy into testnet or mainnet just configure the network and deploy to network name


