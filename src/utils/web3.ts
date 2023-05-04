import Web3 from 'web3'
export const getWeb3 = () => {
    const provider = new Web3.providers.HttpProvider('https://l1-conduit-opstack-demo-nhl9xsg0wg.t.conduit.xyz')
    const web3 = new Web3(provider)
    return web3
}
