import detectEthereumProvider from '@metamask/detect-provider'
type MetaMaskEthereumProvider = {
    request: (args: { method: string; params?: any[] }) => Promise<any>;
};


export const getMetamaskProvider = async () => {
    const provider = await detectEthereumProvider() as MetaMaskEthereumProvider
    if (!provider) {
        throw new Error("Meta Mask is Not Installed")
    }
    return provider
}
