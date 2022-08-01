const INFURA_API = `https://kovan.infura.io/v3/${process.env.INFURA_API}`


module.exports = {

  networks: {
    kovan: {
      
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    }
  },
  compilers: {
    solc: {
      version: "0.8.15",    
    }
  },
  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "sqlite",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};
