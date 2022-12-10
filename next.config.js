module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/gist/MadsonAlan/**',
      },
      {
        protocol: 'https',
        hostname: 'opengraph.githubassets.com',
        pathname: '/**',
      },
    ],
  },
};
