// src/rpcClient.js

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

const getBalance = async (publicKey) => {
  return await sendRpcRequest('getBalance', [publicKey]);
};

const getTransaction = async (transactionSignature) => {
  return await sendRpcRequest('getTransaction', [transactionSignature]);
};

const getProgramAccounts = async (programId) => {
  return await sendRpcRequest('getProgramAccounts', [programId]);
};

const getBlockHeight = async () => {
  return await sendRpcRequest('getBlockHeight');
};

const getClusterNodes = async () => {
  return await sendRpcRequest('getClusterNodes');
};

const getEpochInfo = async () => {
  return await sendRpcRequest('getEpochInfo');
};

const getSlot = async () => {
  return await sendRpcRequest('getSlot');
};

const getConfirmedSignaturesForAddress2 = async (publicKey, options = {}) => {
  return await sendRpcRequest('getConfirmedSignaturesForAddress2', [publicKey, options]);
};

