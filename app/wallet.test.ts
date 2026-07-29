import { afterEach, describe, expect, it, vi } from 'vitest';

const authModalMock = vi.hoisted(() => vi.fn());

vi.mock('@creit.tech/stellar-wallets-kit', () => ({
  StellarWalletsKit: {
    init: vi.fn(),
    authModal: authModalMock,
  },
  Networks: {
    TESTNET: 'testnet',
  },
}));

vi.mock('@creit.tech/stellar-wallets-kit/modules/utils', () => ({
  defaultModules: vi.fn(),
}));

import { connectWallet } from './wallet';

afterEach(() => {
  vi.clearAllMocks();
});

describe('connectWallet', () => {
  it('calls authModal and returns the wallet address', async () => {
    authModalMock.mockResolvedValueOnce({ address: 'GABCD1234EFGH5678IJKL9012MNOP3456QRST7890' });

    const wallet = await connectWallet();

    expect(authModalMock).toHaveBeenCalledTimes(1);
    expect(wallet).toEqual({
      address: 'GABCD1234EFGH5678IJKL9012MNOP3456QRST7890',
      connected: true,
      providerAvailable: true,
    });
  });

  it('throws an error when authModal fails', async () => {
    authModalMock.mockRejectedValueOnce(new Error('declined'));

    await expect(connectWallet()).rejects.toThrow(/declined/i);
  });
});
