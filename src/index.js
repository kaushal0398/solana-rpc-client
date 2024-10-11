const {
  getBalance,
  getTransaction,
  getProgramAccounts,
  getBlockHeight,
  getClusterNodes,
  getEpochInfo,
  getSlot,
  getConfirmedSignaturesForAddress2
} = require('./rpcClient');

const run = async () => {
  const publicKey = process.env.PUBLIC_KEY;  
  const transactionSignature = 'YourTransactionSignatureHere';  
  const programId = 'YourProgramIdHere';  

  try {
    const balance = await getBalance(publicKey);
    console.log(`Balance for ${publicKey}: ${balance} lamports`);

    const transaction = await getTransaction(transactionSignature);
    console.log('Transaction details:', transaction);

    const programAccounts = await getProgramAccounts(programId);
    console.log('Program accounts:', programAccounts);

    const slot = await getSlot();
    console.log('Current slot:', slot);

    const signatures = await getConfirmedSignaturesForAddress2(publicKey);
    console.log('Confirmed signatures for address:', signatures);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

run();
