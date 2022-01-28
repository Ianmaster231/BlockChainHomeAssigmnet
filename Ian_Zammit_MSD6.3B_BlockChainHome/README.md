(0) 0xE169D51F8E57a47917119063A4580F9fAD3D6C7b (100 ETH)
(1) 0x4b882497092291c2711bcaE5aDF6fD7cE18c6B12 (100 ETH)
(2) 0xEb51eE3Af1F19107Ada76624147c44C43c82181E (100 ETH)
(3) 0x3D0Dd838621878D16A51621B3cBE85e6374Bd717 (100 ETH)
(4) 0xe90b1131FEa8A7cB280bB3Aa9d5cd90FA94d4904 (100 ETH)
(5) 0x471BFa049B98332bD6F70Da26159A82a6552615D (100 ETH)
(6) 0x500D4142D3FEbbb5ceb4bB12b4aCdC2623fAFAb7 (100 ETH)
(7) 0x1475CB1556D02AbafCD892e356E7ab9b296dE984 (100 ETH)
(8) 0x48aC9ba290787116321E78eF1D3c9f0aCFd295a9 (100 ETH)
(9) 0xbb8ADc463F681aAe788E1012Da4C6D557bAdD63F (100 ETH)

Private Keys
------------------------------------------------------
(0) 0x629eb5beda90a6f1a2222ab9244971672181444129f63d69fa929ba0dde3b20a
(1) 0x47758c76a45ac3a639ab6f7b5c5421ebdfec8a3d868a9bf28d6a02e6865098af
(2) 0x8be41d4119dd18205e3566aafbced32c4ad83b5d5ddbc6f8ae37092224cbbd00
(3) 0x6d16574d3819aabf2614d3e28886a19dbb83a094b74e971d7ffd273e93d22aeb
(4) 0x540b88a735c8a494d91efceea72c3b6c86c75863c7eb5ded3e394a82a78bd008
(5) 0x4153074a32c100627ef6c7d9431284ea9dbd9821ba7b3c2c24ec2548c5a11a6e
(6) 0xe751afe4aa97e116dea4725e70cacf10e5feb0c0326caf52d2c41bec3877638d
(7) 0x892a8d21d051b940d93e4661dff57bd7218455d61aebdf9cff2c8d41dcad74f0
(8) 0xa8d1d3bfa54dda26632bd5050aa467ea1327740b4e2cc10b201248e3cfa064a0
(9) 0x3376e6da686699fc36069a78a129087daeb8529c9592791060eb4d7b114e8b43


Steps For running local host
------------------------------------------------------
npm install
truffle compile
cmd terminal to run ganache-cli for local host
truffle deploy
npm run dev
------------------------------------------------------

remove all build/contract so you can see progress of rinkeby testing
------------------------------------------------------
truffle compile
truffle deploy --network rinkeby
Then the data loads and your main account with eth testing will be reduced for gas fees

------------------------------------------------------

a) Define the difference between storing variables on memory or on storage [2 marks];

The major difference is that storing on the memory when the user turns off the pc the data is lost while on a storage the data will be kept 
and reused unless the storage device gets corrupted,hacked or the data is outdated. So in theory if the information is not important 
store on the memory other wise store the information on a digitial storage device.