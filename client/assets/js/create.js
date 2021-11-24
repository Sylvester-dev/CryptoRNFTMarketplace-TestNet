Moralis.initialize("WSWMOttR6gi8ZmTUWbPJhxFeTfd00wA1ymzG6NNm"); // Application id from moralis.io
Moralis.serverURL = 'https://uquwvup1lcya.usemoralis.com:2053/server'; //Server url from moralis.io

let user = Moralis.User.current();

$('#singleButton').click(() =>{
  window.location.href='erc-721.html';
});

$('#multipleButton').click(() =>{
  // window.location.href='erc-1155.html';
});
