require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remember social heavy enter off soon'; 
let testAccounts = [
"0x03b58f836f804d166fa58b49441f7534237a18efd02e3b8462edb2ee090cf97b",
"0x3d36ac79d7f33d89b8ecf24204258c4eaebe2a0b4c6c9d711a1fbb7918a62194",
"0x03efe8b379998789f3c79bb6af2fd449547b5dce9222d72b7bd083ed1ba2710f",
"0xd21d22ccec84301262c82fd566ce14a6333775f529e4d1231606a9fe1308a458",
"0xecae921436ce1778f64822b5069322065ecda877079e9ece9311af36a5d7ea33",
"0x475e987a5d0812ad3e4b78c966caf3816ca1b1748d14cdad54ff94fce8ffdf17",
"0xcaa6e88e066713efba0e2530a7521cddb8b32b0cb15948ad7122253ade5ab4f6",
"0x35d59a45653d8c15504f56a7d889df1a002475ebb53f897539b8c846d77b212d",
"0xc501a7b284f2d442539664253bc1ebd5dca5cf1e9a2b295592f22c92e0ba49b7",
"0x30d2f448e53ec1cc60eb35e028e2f48f8a3dfae875d7be982e0fc33bf7571f3f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

