import type { NextPage } from 'next'

import { useState, useEffect } from 'react'

import axios from 'axios'
import { getMetamaskProvider } from '@/utils/metamask'

const Home: NextPage = () => {
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState('')


  const handleGetBalance = async () => {
    try {
      const { data } = await axios.get(`/api/balance?address=${address}`)
      setBalance(data.balance)
    } catch (error) {
      console.log(error)
      setBalance('Error fetching Balance')

    }
  }

  const handleMetaMaskConnection =  async () => {
    try {
      const provider = await getMetamaskProvider()
      const accounts = await provider.request({ method: 'eth_requestAccounts' })
      setAddress(accounts[0])
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(()=>{
    if(address){
      handleGetBalance()
    }
  },[address])

  return (
    <div>
      <button onClick={handleMetaMaskConnection}>Connect To Meta Mask</button>
      <input type='text' placeholder='Ethreum Address' value={address} onChange={(e) => setAddress(e.target.value)} />
      <button onClick={handleGetBalance}>Get Balance</button>
      <p>Balance: {balance}</p>
    </div>
  )
}


export default Home
