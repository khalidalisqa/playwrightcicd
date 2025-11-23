module.exports = {
  auth: {
    username: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
  },
  browser: [
    {
      browserName: "Chrome",
      browserVersion: "latest",
      platform: "Windows 11",
      resolution: "1920x1080",
      build: "Playwright LT Build",
      name: "Playwright LT Test",
      console: true,
      network: true,
      video: true,
      visual: true
    }
  ],
};
