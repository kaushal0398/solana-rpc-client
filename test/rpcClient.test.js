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

  test('getConfirmedSignaturesForAddress2 should return confirmed signatures', async () => {
    const mockPublicKey = 'MockPublicKey';
    axios.post.mockResolvedValue(mockResponse({ result: ['Signature1', 'Signature2'] }));

    const signatures = await getConfirmedSignaturesForAddress2(mockPublicKey);
    expect(signatures).toHaveLength(2);
    expect(signatures).toContain('Signature1');
  });
});

