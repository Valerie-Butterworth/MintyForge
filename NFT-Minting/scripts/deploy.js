async function main() {
    // Obtains the first account provided by the Ethereum node you are connected to.
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with : ", deployer.address);

    // Obtaining the balance of the deployer's account helps ensure enough funds.
    const balance = await deployer.getBalance();
    console.log("Balance: ", balance.toString);

    const MintyPrinter = await ethers.getContractFactory("MintyPrinter");
    const mintyPrinter = await MintyPrinter.deploy(deployer.address);
    await mintyPrinter.deployed();
    
    console.log("MintyPrinter deployed to: ", mintyPrinter.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });