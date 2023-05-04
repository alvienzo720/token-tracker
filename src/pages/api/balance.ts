import type { NextApiRequest, NextApiResponse } from 'next';
import { getWeb3 } from '@/utils/web3';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const web3 = getWeb3()
    const { address }:any = req.query

    try {
        const balanceWei = await web3.eth.getBalance(address)
        const balanceEth = web3.utils.fromWei(balanceWei, 'ether')
        res.status(200).json({ balance: balanceEth })
    } catch (error) {
        res.status(400).json({ error: 'Invalid Ethereum, Address' })

    }
}
