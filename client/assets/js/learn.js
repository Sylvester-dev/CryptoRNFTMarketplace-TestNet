serverUrl = "https://czza3kyzsgux.usemoralis.com:2053/server";
appId = 'efuRxQZyKrNuInObObFv2g9iFJrshhEF1f4vgQsc';
Moralis.start({ serverUrl, appId });

const user = Moralis.User.current();
