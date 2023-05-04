import Web3 from 'web3'
export const getWeb3 = () => {
    const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/ec84c9b967de4010b5ace262fa78bb6e')
    const web3 = new Web3(provider)
    return web3
}
