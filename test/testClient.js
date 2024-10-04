const { getBalance, getRecentBlockhash } = require('../src/rpcClient');

const testRpcClient = async () => {
  const publicKey = '8Dp2SYMeviWy5vhrkTJuKqRh8J1bAZRw68vBp7eSbu1'; // Replace with a valid Solana public key

  try {
    // Test getBalance
    const balance = await getBalance(publicKey);
    console.log(`Balance for ${publicKey}: ${balance} lamports`);

    // Test getRecentBlockhash
    const blockhash = await getRecentBlockhash();
    console.log('Recent blockhash:', blockhash);
  } catch (error) {
    console.error('Test failed:', error.message);
  }
};

// Run the test
testRpcClient();
