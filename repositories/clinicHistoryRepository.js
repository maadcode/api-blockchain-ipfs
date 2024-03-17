import('kubo-rpc-client').then(({ create }) => {
  exports.createHistoryClinic = (history) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(history);
        const ipfs = create('/ip4/127.0.0.1/tcp/5001')
        const { cid } = await ipfs.add(JSON.stringify(history))
        const ipfsUrl = `http://127.0.0.1:8080/ipfs/${cid.toString()}`;
        resolve(ipfsUrl);
      } catch (error) {
        error.message = `Error IPFS. ${error.message}`;
        reject(error);
      }
    });
  };
}).catch(error => {
  console.error('Error importing kubo-rpc-client:', error);
});