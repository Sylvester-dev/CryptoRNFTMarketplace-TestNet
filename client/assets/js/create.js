serverUrl = "https://czza3kyzsgux.usemoralis.com:2053/server";
appId = 'efuRxQZyKrNuInObObFv2g9iFJrshhEF1f4vgQsc';
Moralis.start({ serverUrl, appId });

let user = Moralis.User.current();

$('#singleButton').click(() =>{
  window.location.href='erc-721.html';
});

$('#multipleButton').click(() =>{
  // window.location.href='erc-1155.html';
});
