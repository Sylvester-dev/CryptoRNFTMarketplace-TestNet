Moralis.initialize("tgREnAbuniiRrBV4kRdCxo1jLfisw4JmsG28ToBA"); // Application id from moralis.io
Moralis.serverURL = 'https://4q2r9curxf6a.usemoralis.com:2053/server'; //Server url from moralis.io

let user = Moralis.User.current();

$('#singleButton').click(() =>{
  window.location.href='erc-721.html';
});

$('#multipleButton').click(() =>{
  // window.location.href='erc-1155.html';
});
