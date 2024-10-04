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

  test('getProgramAccounts should return program accounts', async () => {
    const mockProgramId = 'MockProgramId';
    axios.post.mockResolvedValue(mockResponse({ result: [{ pubkey: 'Account1' }, { pubkey: 'Account2' }] }));

    const programAccounts = await getProgramAccounts(mockProgramId);
    expect(programAccounts).toHaveLength(2);
    expect(programAccounts[0]).toHaveProperty('pubkey', 'Account1');
  });

  test('getBlockHeight should return the current block height', async () => {
    axios.post.mockResolvedValue(mockResponse({ result: 1500000 }));

    const blockHeight = await getBlockHeight();
    expect(blockHeight).toBe(1500000);
  });

  test('getClusterNodes should return the cluster nodes', async () => {
    axios.post.mockResolvedValue(mockResponse({ result: [{ pubkey: 'Node1' }] }));

    const nodes = await getClusterNodes();
    expect(nodes[0]).toHaveProperty('pubkey', 'Node1');
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

