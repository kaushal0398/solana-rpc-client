const axios = require('axios');
const {
  getBalance,
  getTransaction,
  getProgramAccounts,
  getBlockHeight,
  getClusterNodes,
  getEpochInfo,
  getSlot,
  getConfirmedSignaturesForAddress2
} = require('../src/rpcClient');

jest.mock('axios');

describe('Solana RPC Client', () => {
  const mockResponse = (data) => ({ data });

  test('getBalance should return the balance of an account', async () => {
    const mockPublicKey = 'MockPublicKey';
    axios.post.mockResolvedValue(mockResponse({ result: 1000000 }));

    const balance = await getBalance(mockPublicKey);
    expect(balance).toBe(1000000);
  });
}

