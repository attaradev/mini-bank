import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { getAddress, parseGwei } from "viem";

describe("MiniBank", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployMiniBankFixture() {
    const miniBank = await hre.viem.deployContract("MiniBank");

    const publicClient = await hre.viem.getPublicClient();

    return {
      miniBank,
      publicClient,
    };
  }

  describe("Deployment", function () {
    it("Should deploy MiniBank", async function () {
      const { miniBank } = await loadFixture(deployMiniBankFixture);

      expect(await miniBank.read.getBalance()).to.equal(0n);
    });
  });

  describe("Withdrawals", function () {
    describe("Validations", function () {});

    describe("Events", function () {});
  });
});
