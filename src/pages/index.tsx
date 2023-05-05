import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { getMetamaskProvider } from '@/utils/metamask'
import Navbar from '@/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@/components/Card'


const Home: NextPage = () => {
  const [address, setAddress] = useState('')
  const [transactions, setTransactions] = useState([])

  const handleGetTransactions = async () => {
    try {
      const { data } = await axios.get(`/api/transactions?address=${address}`)
      setTransactions(data)

    } catch (error) {
      console.log(error)
      setTransactions([])
    }
  }

  return (
    <>
      <Navbar />
      <Card />
    </>

    // <div>

    //   <button onClick={handleMetaMaskConnection}>Connect To Meta Mask</button>
    //   <input type='text' placeholder='Ethreum Address' value={address} onChange={(e) => setAddress(e.target.value)} />
    //   <button onClick={handleGetBalance}>Get Balance</button>
    //   <p>Balance: {balance}</p>
    //   <h3>Transactions</h3>
    //   <button onClick={handleGetTransactions}>Get Transactions</button>
    //   <ul>
    //     {transactions.map((tx: any, index: number) => (
    //       <li key={index}>
    //         {tx.from} → {tx.to}: {tx.value} Ether
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  )
}


export default Home
