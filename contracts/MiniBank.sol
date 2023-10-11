// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MiniBank {
    mapping(address => uint256) balances;

    event Deposit(address account, uint256 amount, uint256 when);

    event Transfer(address from, address to, uint256 amount, uint256 when);

    event Withdrawal(address account, uint256 amount, uint256 when);

    function _transfer(address payable receipient, uint256 amount) internal {
        require(getBalance() >= amount);
        balances[msg.sender] -= amount;
        receipient.transfer(amount);
    }

    function deposit() external payable {
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value, block.timestamp);
    }

    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

    function transfer(address payable receipient, uint256 amount) external {
        _transfer(receipient, amount);
        emit Transfer(msg.sender, receipient, amount, block.timestamp);
    }

    function withdraw(uint256 amount) external {
        _transfer(payable(msg.sender), amount);
        emit Withdrawal(msg.sender, amount, block.timestamp);
    }
}
