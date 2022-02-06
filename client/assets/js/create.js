serverUrl = "https://4q2r9curxf6a.usemoralis.com:2053/server";
appId = "tgREnAbuniiRrBV4kRdCxo1jLfisw4JmsG28ToBA";
Moralis.start({ serverUrl, appId });

let user = Moralis.User.current();

$('#singleButton').click(() =>{
  window.location.href='erc-721.html';
});

$('#multipleButton').click(() =>{
  // window.location.href='erc-1155.html';
});
