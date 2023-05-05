import { getWeb3 } from "@/utils/web3";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const web3 = getWeb3();

    const { address }: any = req.query;

    try {
        const blockNumber = await web3.eth.getBlockNumber();
        const blockPromises = [];

        for (let i = blockNumber; i >= blockNumber - 5000 && blockPromises.length < 10; i++) {
            blockPromises.push(web3.eth.getBlock(i, true));
        }
        const blocks = await Promise.all(blockPromises);

        const transactions = blocks.flatMap((block) => block.transactions);

        const relevantTransactions: any = transactions.filter((tx: any) => {
            const from = tx.from ? tx.from.toLowerCase() : '';
            const to = tx.to ? tx.to.toLowerCase() : '';
            return from === address.toLowerCase() || to === address.toLowerCase();
        });

        res.status(200).json(relevantTransactions.slice(0, 10));
    } catch (error) {
        res.status(400).json({ error: 'Invalid Ethereum address' });
    }
}
