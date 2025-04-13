import { toNano } from '@ton/core';
import { NftContract } from '../wrappers/NftContract';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const nftContract = provider.open(
        NftContract.createFromConfig(
            {
                id: Math.floor(Math.random() * 10000),
                counter: 0,
            },
            await compile('NftContract')
        )
    );

    await nftContract.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(nftContract.address);

    console.log('ID', await nftContract.getID());
}
