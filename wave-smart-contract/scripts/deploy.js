const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
  
    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());
  
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");

    const waveContract = await waveContractFactory.deploy({
      value: hre.ethers.utils.parseEther("0.001"),
    });

  //  const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
  
    console.log("WavePortal address: ", waveContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();


// Deploying contracts with account:  0x3DD1EA77ddDC126c9dc6EA4A8C78276DB2Da81EC
// Account balance:  496605814986423260
// WavePortal address:  0xc5af883a9b4DBe0D8Dffc1901Eb52577847a0716