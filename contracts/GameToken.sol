// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Gametoken is ERC20 {

    constructor(string memory _name, string memory _symbol, uint8 _decimals) 
        ERC20(_name, _symbol)
        public 
    {
        _setupDecimals(_decimals);
    }

    function mint(address account, uint256 amount) public returns (bool) {
        _mint(account, amount);
        return true;
    }
}
