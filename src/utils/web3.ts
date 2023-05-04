import Web3 from 'web3'
export const getWeb3 = () => {
    const provider = new Web3.providers.HttpProvider('')
    const web3 = new Web3(provider)
    return web3
}
