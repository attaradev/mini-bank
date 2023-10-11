import hre from "hardhat";

async function main() {
  const miniBank = await hre.viem.deployContract("MiniBank");

  console.log(`MiniBank deployed to ${miniBank.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
