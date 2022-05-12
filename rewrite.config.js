module.exports = {
    common: [],
    development: [
      {
        source: '/proxy-api/rest/:path*',
        destination: `${process.env.ATG_API_BASE_URI}/:path*`,
      },
    ],
    production: [],
  };