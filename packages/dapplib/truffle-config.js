require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remind million hover cloth fog gift'; 
let testAccounts = [
"0x0164ac5ea0ed7bfd8bd00d216164207cf74e7f9b807946d7bcee947fc80faa46",
"0x78b6d3dd226d3bd45aa2b1804851576884d3530c06efd72aa445fde2eb50401b",
"0x5ede0fbc893140882001931be03e8467237518b0f39a0d8d99850d8d962d232b",
"0x7b8e4f3d8a026a79c1b5c190ba2910771e0e09b26693f85c7c457386c3a1eac3",
"0x7e005784cfeae524a104e977257fcfc28754851f4a46316fc6a4170724cc76f2",
"0xd1368fcd7e8e637e4e0c1f57986bfaeef5014fa9116cfbee9a31eaca072d7043",
"0x10baa2cc3b446ab202e929c07047046709059e22e878359aa81d0698394243e1",
"0xfe86024a7eff245cc2f4bac71b47e6eedfdce7e8de725f6ea4fca3fe196f8abc",
"0x30551d4f01151042c678da513994049858fe913627a3bac7ec437fbe0030b21b",
"0x17e3c84cc435b35572362926f1578f4d96d9f67944e0d1e3f8beaa58c7f913ca"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

