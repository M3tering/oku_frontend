
export const IOTEX_RPC = "https://babel-api.testnet.iotex.io"; 

 export const DIA_ABI = [
   { inputs: [], stateMutability: "nonpayable", type: "constructor" },
   {
     anonymous: false,
     inputs: [
       {
         indexed: true,
         internalType: "address",
         name: "owner",
         type: "address",
       },
       {
         indexed: true,
         internalType: "address",
         name: "spender",
         type: "address",
       },
       {
         indexed: false,
         internalType: "uint256",
         name: "value",
         type: "uint256",
       },
     ],
     name: "Approval",
     type: "event",
   },
   {
     anonymous: false,
     inputs: [
       {
         indexed: true,
         internalType: "address",
         name: "from",
         type: "address",
       },
       { indexed: true, internalType: "address", name: "to", type: "address" },
       {
         indexed: false,
         internalType: "uint256",
         name: "value",
         type: "uint256",
       },
     ],
     name: "Transfer",
     type: "event",
   },
   {
     inputs: [
       { internalType: "address", name: "owner", type: "address" },
       { internalType: "address", name: "spender", type: "address" },
     ],
     name: "allowance",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "spender", type: "address" },
       { internalType: "uint256", name: "amount", type: "uint256" },
     ],
     name: "approve",
     outputs: [{ internalType: "bool", name: "", type: "bool" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [{ internalType: "address", name: "account", type: "address" }],
     name: "balanceOf",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "decimals",
     outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "spender", type: "address" },
       { internalType: "uint256", name: "subtractedValue", type: "uint256" },
     ],
     name: "decreaseAllowance",
     outputs: [{ internalType: "bool", name: "", type: "bool" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "spender", type: "address" },
       { internalType: "uint256", name: "addedValue", type: "uint256" },
     ],
     name: "increaseAllowance",
     outputs: [{ internalType: "bool", name: "", type: "bool" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [],
     name: "name",
     outputs: [{ internalType: "string", name: "", type: "string" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "symbol",
     outputs: [{ internalType: "string", name: "", type: "string" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "totalSupply",
     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "to", type: "address" },
       { internalType: "uint256", name: "amount", type: "uint256" },
     ],
     name: "transfer",
     outputs: [{ internalType: "bool", name: "", type: "bool" }],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       { internalType: "address", name: "from", type: "address" },
       { internalType: "address", name: "to", type: "address" },
       { internalType: "uint256", name: "amount", type: "uint256" },
     ],
     name: "transferFrom",
     outputs: [{ internalType: "bool", name: "", type: "bool" }],
     stateMutability: "nonpayable",
     type: "function",
   },
 ];
 export const DIA_ADDRESS = "0x107382d7ba73A2710CfAC4651DfcF35B4CE057b6";

  export const METERING_ABI = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    { inputs: [], name: "BadStrategy", type: "error" },
    { inputs: [], name: "InputIsZero", type: "error" },
    { inputs: [], name: "TransferError", type: "error" },
    { inputs: [], name: "Unauthorized", type: "error" },
    { inputs: [], name: "ZeroAddress", type: "error" },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
      ],
      name: "Claim",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Paused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "taffif",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
      ],
      name: "Revenue",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32",
        },
      ],
      name: "RoleAdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleGranted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleRevoked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        { indexed: true, internalType: "bool", name: "state", type: "bool" },
        {
          indexed: true,
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "from",
          type: "address",
        },
      ],
      name: "Switch",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Unpaused",
      type: "event",
    },
    {
      inputs: [],
      name: "CURATOR_ROLE",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "DAI",
      outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "M3ter",
      outputs: [
        { internalType: "contract IERC721", name: "", type: "address" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PAUSER_ROLE",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "W3BSTREAM_ROLE",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "strategyAddress", type: "address" },
        { internalType: "bool", name: "state", type: "bool" },
      ],
      name: "_curateStrategy",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "otherAddress", type: "address" },
      ],
      name: "_setFeeAddress",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "uint256", name: "tariff", type: "uint256" },
      ],
      name: "_setTariff",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "bool", name: "state", type: "bool" },
      ],
      name: "_switch",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "strategyAddress", type: "address" },
        { internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "claim",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "feeAddress",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
      name: "getRoleAdmin",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "role", type: "bytes32" },
        { internalType: "address", name: "account", type: "address" },
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "role", type: "bytes32" },
        { internalType: "address", name: "account", type: "address" },
      ],
      name: "hasRole",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "pause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "paused",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "pay",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "role", type: "bytes32" },
        { internalType: "address", name: "account", type: "address" },
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "revenues",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "role", type: "bytes32" },
        { internalType: "address", name: "account", type: "address" },
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "stateOf",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "states",
      outputs: [
        { internalType: "uint248", name: "tariff", type: "uint248" },
        { internalType: "bool", name: "state", type: "bool" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "strategy",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "tariffOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "unpause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  export const METERING_ADDRESS = "0x6f7e87f461bf1BEa6Aa70b519de17bD597fcF573";