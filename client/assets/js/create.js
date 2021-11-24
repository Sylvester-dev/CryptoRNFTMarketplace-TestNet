Moralis.initialize("VyhqLkUf8i3KLUqQ0sJ5X2hmYxibW3A9hVuBeazh"); // Application id from moralis.io
Moralis.serverURL = 'https://hek0avlbrgiq.usemoralis.com:2053/server'; //Server url from moralis.io

let user = Moralis.User.current();

$('#singleButton').click(() =>{
  window.location.href='erc-721.html';
});

$('#multipleButton').click(() =>{
  // window.location.href='erc-1155.html';
});
