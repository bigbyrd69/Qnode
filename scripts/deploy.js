const { ethers } = require("hardhat");

async function main() {
 
  const Nft = await ethers.getContractFactory("Nft");

   
  const deployedNFTContract = await Nft.deploy("NftName", "only1");

  
  await deployedNFTContract.deployed();

 
  console.log("NFT Contract Address:", deployedNFTContract.address);
}

 
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });