// import Eos from 'eosjs'

// const host = process.env.EOS_NETWORK_HOST
// const port = process.env.EOS_NETWORK_PORT
// const chainId = process.env.EOS_NETWORK_CHAINID

// const network = {
//     blockchain: `eos`,
//     protocol: `https`,
//     host,
//     port,
//     chainId,
// }

// const eos = Eos({ httpEndpoint: `${network.protocol}://${network.host}:${network.port}` })

// const ROWS_LIMIT = 99999

const { JsonRpc } = require('eosjs');
const fetch = require('node-fetch');           // node only; not needed in browsers
const rpc = new JsonRpc('https://api.eosnewyork.io', { fetch });

const resp = await rpc.get_table_rows({
  json: true,              // Get the response as json
  code: 'eosio.token',     // Contract that we target
  scope: 'testacc',         // Account that owns the data
  table: 'accounts',        // Table name
  limit: 10,               // Maximum number of rows that we want to get
  reverse = false,         // Optional: Get reversed data
  show_payer = false,      // Optional: Show ram payer
});

console.log(resp.rows);