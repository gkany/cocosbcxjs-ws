var config = {
  core_asset: "COCOS",
  address_prefix: "COCOS",
  expire_in_secs: 15,
  expire_in_secs_proposal: 24 * 60 * 60,
  review_in_secs_committee: 24 * 60 * 60,
  networks: {
    mainnet: {
      core_asset: "COCOS",
      address_prefix: "COCOS",
      chain_id:
        "6057d856c398875cac2650fe33caef3d5f6b403d184c5154abbff526ec1143c4"
    },
    testnet: {
      core_asset: "COCOS",
      address_prefix: "COCOS",
      chain_id:
        "1ae3653a3105800f5722c5bda2b55530d0e9e8654314e2f3dc6d2b010da641c5"
    },
    local: {
      core_asset: "COCOS",
      address_prefix: "COCOS",
      chain_id:
        "c1ac4bb7bd7d94874a1cb98b39a8a582421d03d022dfa4be8c70567076e03ad0"
    }
  },

  /** Set a few properties for known chain IDs. */
  setChainId: chain_id => {
    let result = Object.entries(config.networks).find(
      ([network_name, network]) => {
        if (network.chain_id === chain_id) {
          config.network_name = network_name;

          if (network.address_prefix) {
            config.address_prefix = network.address_prefix;
          }
          return true;
        }
      }
    );

    if (result) return { network_name: result[0], network: result[1] };
    else console.log("Unknown chain id (this may be a testnet)", chain_id);
  },

  reset: () => {
    config.core_asset = "CORE";
    config.address_prefix = "GPH";
    config.expire_in_secs = 15;
    config.expire_in_secs_proposal = 24 * 60 * 60;

    console.log("Chain config reset");
  },

  setPrefix: (prefix = "GPH") => (config.address_prefix = prefix)
};

export default config;
