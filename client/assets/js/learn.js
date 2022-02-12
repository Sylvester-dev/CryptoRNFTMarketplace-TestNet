const appId = "tgREnAbuniiRrBV4kRdCxo1jLfisw4JmsG28ToBA"; // Application id from moralis.io
const serverUrl = 'https://4q2r9curxf6a.usemoralis.com:2053/server'; //Server url from moralis.io
Moralis.start({ serverUrl, appId });


const user = Moralis.User.current();
