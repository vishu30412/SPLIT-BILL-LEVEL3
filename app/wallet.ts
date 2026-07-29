import { StellarWalletsKit, Networks } from '@creit.tech/stellar-wallets-kit';
import { defaultModules } from '@creit.tech/stellar-wallets-kit/modules/utils';

export type WalletState = {
  address: string | null;
  connected: boolean;
  providerAvailable: boolean;
};

let isInitialized = false;

function initKit() {
  if (!isInitialized && typeof window !== 'undefined') {
    StellarWalletsKit.init({
      network: Networks.TESTNET,
      modules: defaultModules(),
    });
    isInitialized = true;
  }
}

export async function connectWallet(): Promise<WalletState> {
  if (typeof window === 'undefined') {
    throw new Error('Wallet connection is only available in the browser.');
  }

  initKit();

  try {
    const { address } = await StellarWalletsKit.authModal();
    return {
      address,
      connected: true,
      providerAvailable: true,
    };
  } catch (error) {
    console.error('Wallet access failed:', error);
    throw error;
  }
}
