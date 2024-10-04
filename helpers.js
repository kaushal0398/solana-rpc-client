const { Keypair } = require('@solana/web3.js');
const bs58 = require('bs58');
require('dotenv').config();

function getKeypairFromEnvironment(key) {
    const secretKey = process.env[key];
    if (!secretKey) {
        throw new Error(`Missing key for ${key}`);
    }
    const secretKeyBytes = bs58.decode(secretKey);
    return Keypair.fromSecretKey(secretKeyBytes);
}


