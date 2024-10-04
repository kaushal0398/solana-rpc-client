require('dotenv').config();
const axios = require('axios');

const RPC_URL = process.env.RPC_URL || 'https://api.mainnet-beta.solana.com';

const sendRpcRequest = async (method, params = []) => {
  const payload = {
    jsonrpc: "2.0",
    id: 1,
    method,
    params
  };

  try {
    const response = await axios.post(RPC_URL, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.data.error) {
      throw new Error(response.data.error.message);
    }

    return response.data.result;
  } catch (error) {
    console.error(`RPC request failed: ${error.message}`);
    throw error;
  }
};

// Get account balance in lamports for a given public key
const getBalance = async (publicKey) => {
  return await sendRpcRequest('getBalance', [publicKey]);
};

// Get the recent blockhash to use in transactions
const getRecentBlockhash = async () => {
  return await sendRpcRequest('getRecentBlockhash');
};

// Send a signed transaction to the Solana network
const sendRawTransaction = async (transaction) => {
  return await sendRpcRequest('sendTransaction', [transaction]);
};

module.exports = {
  getBalance,
  getRecentBlockhash,
  sendRawTransaction
};
