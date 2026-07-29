# Split Bill Calculator - Stellar dApp

A decentralized application (dApp) built on the Stellar Testnet for tracking shared bills, splitting expenses among participants, collecting payments, and settling the final bill using a custom Soroban smart contract.

## 🔗 Live Links

- **Live Demo:** [split-bill-level-3.vercel.app](https://split-bill-level-3.vercel.app/)
- **Contract ID:** `CA2HPE7YPW5WCE7DFHDHCNGVVRKMITQD7AYBXNWM2GFEYF3ZURT6PZA6`
- **View on Stellar Expert:** [Stellar Expert Explorer](https://stellar.expert/explorer/testnet/contract/CA2HPE7YPW5WCE7DFHDHCNGVVRKMITQD7AYBXNWM2GFEYF3ZURT6PZA6)

## ✨ Features

- **Decentralized Bill Management:** Create bills, add participants, and track payments entirely on-chain.
- **Soroban Smart Contract:** Written in Rust, featuring state management, custom errors, authorization checks, and rigorous testing.
- **Wallet Integration:** Supports multiple Stellar wallets (Freighter, xBull, Albedo, etc.) using the `@creit.tech/stellar-wallets-kit` library.
- **Modern UI:** Built with Next.js and Tailwind CSS for a responsive, sleek, and dynamic user experience.
- **CI/CD Pipeline:** Automated testing and build checks using GitHub Actions.

## 📂 Folder Structure

```text
SPLIT-BILL-LEVEL3/
├── .github/
│   └── workflows/         # GitHub Actions CI/CD workflows for testing and building
├── app/
│   ├── contract.ts        # Soroban RPC transaction lifecycle (build, sign, submit)
│   ├── contract-config.ts # Network and contract ID configuration constants
│   ├── globals.css        # Global Tailwind styles
│   ├── layout.tsx         # Next.js root layout
│   ├── page.tsx           # Main application UI and React state management
│   ├── page.test.tsx      # Frontend Vitest UI testing
│   ├── wallet.ts          # Stellar Wallets Kit integration logic
│   └── wallet.test.ts     # Wallet mock tests
├── scripts/
│   └── deploy-soroban.ps1 # PowerShell script for Soroban contract compilation and deployment
├── soroban/               # Soroban Smart Contract workspace
│   ├── src/
│   │   └── lib.rs         # Core smart contract logic and Rust unit tests
│   ├── Cargo.toml         # Rust dependencies and project metadata
│   └── Cargo.lock         # Locked dependencies
├── public/                # Static assets
├── .env.example           # Example environment variables
├── package.json           # Node.js dependencies and npm scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vitest.config.mjs      # Vitest configuration for frontend tests
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- Rust toolchain (`rustup`)
- Web3 Wallet (e.g., Freighter browser extension) configured for Stellar Testnet

### 1. Install Dependencies

Install JavaScript dependencies:
```bash
npm install
```

Install the required Rust target for Soroban:
```bash
rustup target add wasm32v1-none
```

### 2. Configure Environment

Copy the example environment file and ensure the contract ID is set:
```bash
cp .env.example .env.local
```
Inside `.env.local`, you should have:
```dotenv
NEXT_PUBLIC_SPLIT_BILL_CONTRACT_ID=CA2HPE7YPW5WCE7DFHDHCNGVVRKMITQD7AYBXNWM2GFEYF3ZURT6PZA6
NEXT_PUBLIC_SOROBAN_RPC_URL=https://soroban-testnet.stellar.org:443
```

### 3. Run Tests

To verify the smart contract logic works correctly:
```bash
npm run contract:test
```

To run the frontend Vitest suite:
```bash
npm run test:frontend
```

### 4. Start the Application

Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Deploying Your Own Contract

If you want to deploy a fresh instance of the smart contract to the Stellar Testnet:

1. Install the Stellar CLI.
2. Create or select a funded Testnet identity.
3. Run the deployment script:
```powershell
npm run contract:deploy -- -SourceAccount your-testnet-identity -Network testnet
```
4. The command will build the WASM file, deploy it, and print the new contract ID. 
5. Update your `NEXT_PUBLIC_SPLIT_BILL_CONTRACT_ID` in `.env.local` or `app/contract-config.ts` with this new ID.

## 📜 Smart Contract Source Code

The complete project-specific Soroban smart contract source is available at [`soroban/src/lib.rs`](soroban/src/lib.rs). It implements the following core functions:
- `create_bill`: Initializes a new bill with an owner and total amount.
- `add_participant`: Adds a user to the bill with a required share amount.
- `pay_share`: Records partial or full payments from participants.
- `settle_bill`: Finalizes the bill once all shares are paid.
- `get_bill` & `get_participant`: View functions for retrieving on-chain state.

## 📸 Media & Examples

- **Desktop UI screenshot:**
  <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/bc4067d6-229a-4b6b-aa7b-15c681973968" />

- **Mobile responsive UI screenshot:**
  
  <img width="262" height="582" alt="image" src="https://github.com/user-attachments/assets/8e3c5616-dd46-4c9f-a67b-614033b84707" />
- **CI/CD pipeline screenshot:**
  <img width="1885" height="896" alt="Screenshot" src="https://github.com/user-attachments/assets/0689ee41-0f2e-4e64-9a36-2d723f123693" />
- **Test Output Screenshot:**
  <img width="1187" height="501" alt="Screenshot" src="https://github.com/user-attachments/assets/0cc60917-0d6d-4f70-83d2-56d831e36813" />
- **Demo video:** [Google Drive Link](https://drive.google.com/file/d/1_Da1xqnTmk6kzbiyagL5sUN6yidjOeFM/view?usp=sharing)
