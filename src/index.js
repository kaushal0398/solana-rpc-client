const { getBalance, getRecentBlockhash } = require('./rpcClient');

const run = async () => {
  const publicKey = 'YourPublicKeyHere';  

try {
  const balance = await getBalance(publicKey);
    console.log(`Balance for ${publicKey}: ${balance} lamports`);

    const blockhash = await getRecentBlockhash();
    console.log('Recent blockhash:', blockhash);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

run();
