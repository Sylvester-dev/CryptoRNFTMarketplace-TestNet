serverUrl = "https://4q2r9curxf6a.usemoralis.com:2053/server";
appId = 'tgREnAbuniiRrBV4kRdCxo1jLfisw4JmsG28ToBA';
Moralis.start({ serverUrl, appId });

const user = Moralis.User.current();
