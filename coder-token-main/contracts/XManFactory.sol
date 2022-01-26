// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "./CoderToken.sol";

contract XManFactory is CoderToken {
    
    uint256 dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;
    
    uint XMAN_COST = 100;

    event NewXMan(string name, uint dna);
    event OwnerSet(address indexed oldOwner, address indexed newOwner);
    
    address private owner;

    struct XMan {
        string name;
        uint dna;
    }
    
    XMan[] public xmen;
    
    mapping (address => XMan[]) public xMenToOwner;
    mapping (address => uint) ownerXManCount;
    
    modifier isOwner(){
        require(msg.sender == owner,"Caller is not owner");
        _;
    }
    
    constructor(){
        owner = msg.sender;
        emit OwnerSet(address(0),owner);
    }

     function changeOwner(address newOwner) public isOwner{
        owner = newOwner;
        emit OwnerSet(owner, newOwner);
    }

     function getOwner() external view returns (address){
        return owner;
    }

    function _createXMan(string memory _name, uint _dna) internal {
        XMan[] storage ownerXmen = xMenToOwner[msg.sender];

        ownerXmen.push(XMan(_name,_dna));

        emit NewXMan(_name, _dna);
    }
    

   function getNumberOfXmen() external view returns(uint){
        XMan[] storage ownerXmen = xMenToOwner[msg.sender];
       return ownerXmen.length;
    }

    function returnXman(uint index) external view returns (string memory, uint){
        XMan[] storage ownerXmen = xMenToOwner[msg.sender];

        XMan memory xman = ownerXmen[index];

        return (xman.name, xman.dna);
    }

    function _generateRandomDna(string memory _str) private view returns (uint) {
        uint rand = uint(keccak256(abi.encodePacked(_str)));
       
        return rand % dnaModulus;
    }
    
    function createRandomXMan(string memory _name, uint amount) public payable{
        //require(ownerXManCount[msg.sender] == 0);
         require(amount >= XMAN_COST, "You need to have at least 100 CDT");
         transfer((owner), amount);
        uint randDna = _generateRandomDna(_name);
        _createXMan(_name, randDna);
    }

    
}