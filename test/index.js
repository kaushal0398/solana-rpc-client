const { getBalance, getRecentBlockhash } = require('./rpcClient');

const run = async () => {
  const publicKey = 'YourPublicKeyHere';  // Replace with a real public key

  try {
    // Test getBalance method
    const balance = await getBalance(publicKey);
    console.log(`Balance for ${publicKey}: ${balance} lamports`);

    // Test getRecentBlockhash method
    const blockhash = await getRecentBlockhash();
    console.log('Recent blockhash:', blockhash);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

run();
