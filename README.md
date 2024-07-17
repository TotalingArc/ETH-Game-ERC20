# Ethereum Knights

**Ethereum Knights** is a web-based game built with Phaser and Web3.js where players collect Bitcoins (in-game tokens) to earn real Ethereum-based tokens on the blockchain.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Development](#development)
- [License](#license)

## Overview

In Ethereum Knights, players control a knight character, navigating through obstacles and collecting as many Bitcoins as possible within a limited time. The player's score is then used to mint ERC20 tokens on the Ethereum blockchain.

## Features

- **Interactive Gameplay**: Collect Bitcoins and avoid obstacles.**
- **Blockchain Integration**: Earn real ERC20 tokens based on your in-game performance.
- **Phaser Game Engine**: High-performance and customizable game engine.
- **Web3.js Integration**: Interact with Ethereum blockchain seamlessly.

## Setup

### Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **MetaMask**: Install MetaMask for Ethereum interaction.

### Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/ethereum-knights.git
    cd ethereum-knights
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Game**:
    Open `index.html` in a web browser.

## Usage

1. **Open the Game**:
   Open `index.html` in your preferred web browser.

2. **Connect to MetaMask**:
   Ensure MetaMask is installed and connected to the appropriate Ethereum network.

3. **Play the Game**:
   Use arrow keys to move the knight and collect Bitcoins within 60 seconds.

4. **Mint Tokens**:
   After the game ends, MetaMask will prompt you to confirm the transaction to mint tokens based on your score.

## Development

### Project Structure

- **index.html**: Main HTML file that loads the game.
- **assets/**: Directory containing game assets like images.
- **scripts/**: Directory containing game logic and Web3.js integration.
- **styles/**: Directory containing CSS files.

### Adding New Features

1. **Modify Game Logic**:
   Update the Phaser game logic in the `scripts/game.js` file.

2. **Smart Contract Integration**:
   Update the smart contract ABI or address in `scripts/web3.js`.

3. **Test Changes**:
   Open `index.html` in a browser to test your changes.

### Smart Contract

Ensure your smart contract is deployed on the Ethereum network and replace the contract address in the `scripts/web3.js` file.

```javascript
const contractAddress = "0xYourContractAddressHere";
