export const config = {
  api: {
    port: process.env.API_PORT || 3000,
    baseUrl: process.env.API_BASE_URL || "http://localhost:3000",
  },
  stellar: {
    network: process.env.STELLAR_NETWORK || "testnet",
    horizonUrl: process.env.STELLAR_HORIZON_URL || "https://horizon-testnet.stellar.org",
  },
};
