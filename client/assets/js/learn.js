serverUrl = "https://7exgrqw1p3qr.usemoralis.com:2053/server";
appId = '3jaJVfu7hweHBQe4DeS3CYvy81EmfF7gL16dKS0S';
Moralis.start({ serverUrl, appId });

const user = Moralis.User.current();
