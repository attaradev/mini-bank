import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import dotenv from "dotenv";

dotenv.config();

const { PRIVATE_KEY = "", API_KEY = "" } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: [PRIVATE_KEY],
    },
    baseGoerli: {
      url: "https://base-goerli.blockpi.network/v1/rpc/public",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: API_KEY,
  },
};

export default config;
