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

  test('getEpochInfo should return the current epoch info', async () => {
    axios.post.mockResolvedValue(mockResponse({ result: { epoch: 100, slotIndex: 50 } }));

    const epochInfo = await getEpochInfo();
    expect(epochInfo).toHaveProperty('epoch', 100);
    expect(epochInfo).toHaveProperty('slotIndex', 50);
  });

  test('getSlot should return the current slot', async () => {
    axios.post.mockResolvedValue(mockResponse({ result: 5000000 }));

    const slot = await getSlot();
    expect(slot).toBe(5000000);
  });

  test('getConfirmedSignaturesForAddress2 should return confirmed signatures', async () => {
    const mockPublicKey = 'MockPublicKey';
    axios.post.mockResolvedValue(mockResponse({ result: ['Signature1', 'Signature2'] }));

    const signatures = await getConfirmedSignaturesForAddress2(mockPublicKey);
    expect(signatures).toHaveLength(2);
    expect(signatures).toContain('Signature1');
  });
});

