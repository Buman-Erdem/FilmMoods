/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'filmmoods';

export default {
  output: 'export',
  images: { unoptimized: true },
  ...(isProd && {
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
  }),
};
