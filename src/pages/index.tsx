import type { NextPage } from 'next'

import { useState } from 'react'

import axios from 'axios'

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

  return (
    <div>
      <input type='text' placeholder='Ethreum Address' value={address} onChange={(e) => setAddress(e.target.value)} />
      <button onClick={handleGetBalance}>Get Balance</button>
      <p>Balance: {balance}</p>
    </div>
  )
}


export default Home
