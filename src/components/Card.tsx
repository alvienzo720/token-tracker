import { getMetamaskProvider } from "@/utils/metamask"
import axios from "axios"
import { useEffect, useState } from "react"

const Card = () => {
    const [address, setAddress] = useState('')
    const [balance, setBalance] = useState('')
    const handleMetaMaskConnection = async () => {
        try {
            const provider = await getMetamaskProvider()
            const accounts = await provider.request({ method: 'eth_requestAccounts' })
            setAddress(accounts[0])
        } catch (error) {
            console.log(error)

        }
    }
    const handleGetBalance = async () => {
        try {
            const { data } = await axios.get(`/api/balance?address=${address}`)
            setBalance(data.balance)
        } catch (error) {
            console.log(error)
            setBalance('Error fetching Balance')

        }
    }
    useEffect(() => {
        if (address) {
            handleGetBalance()
        }
    }, [address])
    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" onClick={handleMetaMaskConnection}>Connect Wallet</a>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <h5 className="card-title">Your MetaMask Balance is {balance} ETH</h5>
                <p className="card-text">Remember this balance is from the network your connected to</p>
                <a href="#" className="btn btn-primary">View Recent Transactions</a>
            </div>
        </div>

    )
}

export default Card
