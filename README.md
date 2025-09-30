# FHEVM Treasure Hunt - Interactive Tutorial

Learn FHEVM by Building a Confidential Treasure Hunt Game

> An interactive educational website teaching Fully Homomorphic Encryption (FHE) smart contract development through a hands-on treasure hunt game. Created for the Zama S10 Bounty program.

## 🎯 Project Overview

This project consists of:
- **Tutorial Website**: Step-by-step interactive guide for learning FHEVM
- **Demo DApp** (submodule): Complete working implementation of the treasure hunt game

## 📁 Project Structure

```
fhevm-treasure-hunt/           # Main project: Tutorial website
├── src/                        # Website source code
│   ├── components/            # React components
│   │   ├── HeroSection.tsx
│   │   ├── LearningPathSection.tsx
│   │   ├── InteractiveDemoSection.tsx
│   │   └── ...
│   ├── pages/                 # Tutorial pages
│   │   ├── EnvironmentSetup.tsx
│   │   ├── ContractDevelopment.tsx
│   │   └── FrontendIntegration.tsx
│   └── ...
├── treasure-hunt-demo/        # Git Submodule: Complete FHEVM DApp
│   ├── packages/
│   │   ├── contracts/        # Solidity smart contracts (TreasureHunt.sol)
│   │   └── sites/            # DApp frontend (React)
│   └── README.md             # Demo project documentation
└── README.md                  # This file
```

## ✨ Features

- 📚 **Three-Part Tutorial**: Environment Setup → Contract Development → Frontend Integration
- 🎮 **Interactive Demos**: Animated code examples and visual walkthroughs
- 💻 **Real Working Code**: Complete DApp implementation via git submodule
- 🎨 **Zama-Inspired Design**: Professional design system matching Zama documentation
- 📱 **Responsive**: Works seamlessly on desktop, tablet, and mobile
- 🔐 **Learn by Doing**: Practical FHE concepts through a real-world game

## 🛠 Tech Stack

### Tutorial Website
- **Frontend**: React 18, TypeScript, Vite
- **UI Framework**: shadcn/ui, TailwindCSS
- **Routing**: React Router v6
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

### Demo DApp (Submodule)
- **Smart Contracts**: Solidity ^0.8.24, FHEVM SDK
- **Development**: Hardhat
- **Frontend**: React, fhevm-react hooks
- **Network**: Sepolia Testnet / Local Hardhat

## 🚀 Quick Start

### 1. Clone the Repository (with submodule)

```bash
git clone --recurse-submodules https://github.com/huaigu/fhevm-treasure-hunt
cd fhevm-treasure-hunt
```

**If you already cloned without submodules:**
```bash
git submodule update --init --recursive
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The tutorial website will be available at **http://localhost:5173**

### 4. Build for Production

```bash
npm run build
npm run preview  # Preview the production build
```

## 📦 Working with the Demo Submodule

The complete treasure hunt DApp referenced in the tutorials is located in the `treasure-hunt-demo/` directory.

### Navigate to the demo project:
```bash
cd treasure-hunt-demo
npm install
```

### Follow demo-specific instructions:
See `treasure-hunt-demo/README.md` for:
- Running local Hardhat network
- Deploying contracts
- Starting the DApp frontend
- Testing the game

### Update submodule to latest version:
```bash
git submodule update --remote treasure-hunt-demo
```

## 📖 Tutorial Content

### Part 1: Environment Setup
- Clone official FHEVM template
- Install dependencies and understand project structure
- Start local blockchain with Hardhat
- Configure MetaMask wallet

### Part 2: Contract Development
- **Core Concepts**: Encrypted data types (`euint8`, `externalEuint8`)
- **FHE Operations**: `FHE.rem()`, `FHE.select()`, `FHE.fromExternal()`
- **Game Logic**: Random treasure generation, distance calculation
- **Deploy**: Deploy to Sepolia testnet

### Part 3: Frontend Integration
- Connect wallet and contract
- Initialize FHEVM instance
- Encrypt user inputs
- Submit encrypted guesses
- Decrypt results using Relayer

## 🔗 Project Links

- **Tutorial Website**: [Add deployed URL here]
- **GitHub Repository**: https://github.com/huaigu/fhevm-treasure-hunt
- **Demo Repository**: https://github.com/huaigu/treasure-hunt-demo
- **Zama FHEVM Docs**: https://docs.zama.ai/fhevm
- **Zama Website**: https://www.zama.ai

## 🎓 Learning Objectives

By completing this tutorial, you will learn:
- ✅ Set up an FHEVM development environment
- ✅ Write smart contracts with encrypted data types
- ✅ Perform homomorphic operations (add, sub, select)
- ✅ Handle encrypted inputs from frontend with attestations
- ✅ Implement access control with `FHE.allow()`
- ✅ Build React frontend with fhevm-react hooks
- ✅ Encrypt data on client-side and decrypt results
- ✅ Deploy confidential DApps to testnet

## 🤝 Contributing

This project was created for the **Zama S10 Bounty** program. Contributions, issues, and feature requests are welcome!

## 📄 License

MIT License

## 🙏 Acknowledgments

- Built with guidance from [Zama's FHEVM documentation](https://docs.zama.ai/fhevm)
- Uses [fhevm-react-template](https://github.com/zama-ai/fhevm-react-template) as foundation
- Design inspired by Zama's official website and documentation

---

**Start your FHEVM journey today!** Visit the tutorial website or dive into the code in `treasure-hunt-demo/`.