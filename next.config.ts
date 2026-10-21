/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  experimental: {
    // One page at a time. City routes are dynamic (see src/app/(city)/layout.tsx);
    // the remaining static pages still share one worker.
    cpus: Number(process.env.NEXT_BUILD_CPUS) || 1,
    staticGenerationMaxConcurrency: 1,
    staticGenerationMinPagesPerWorker: 25,
    webpackMemoryOptimizations: true,
  },
  images: {
    
    loader: 'custom',
    loaderFile: './src/lib/cloudinaryLoader.ts',
    minimumCacheTTL: 60 * 60 * 24 * 365,
    domains: [
    'res.cloudinary.com',
    'cdn-icons-png.flaticon.com',
    'images.unsplash.com',
    'plus.unsplash.com',
    'i.pinimg.com',
    'www.psdecor.in',
    'space build.com',
  ],
  },

  eslint: {
    ignoreDuringBuilds: true
  },

  async redirects() {
    return [
      { source: '/services/furniture-sourcing', destination: '/services', permanent: true },
      { source: '/services/interior-styling-and-material-consultation', destination: '/services', permanent: true },
      { source: '/services/paid-mahavastu-consultation', destination: '/services/mahavastu-consultation', permanent: true },
      { source: '/services/astro-vastu', destination: '/services', permanent: true },
      { source: '/services/smart-homes', destination: '/services', permanent: true },
      { source: '/services/spatial-planning', destination: '/services', permanent: true },
      { source: '/services/vastu-consultation', destination: '/services', permanent: true },
      { source: '/services/wedding-designing', destination: '/services', permanent: true },
      /* digit-prefixed route redirects */
      { source: '/kashipur/2d-house-plan-designer-in-kashipur', destination: '/kashipur/d-2-house-plan-designer-in-kashipur', permanent: true },
      { source: '/moradabad/2bhk-interior-design-moradabad', destination: '/moradabad/bhk-2-interior-design-moradabad', permanent: true },
      { source: '/moradabad/3bhk-interior-design-moradabad', destination: '/moradabad/bhk-3-interior-design-moradabad', permanent: true },
      { source: '/kashipur/3d-house-design-in-kashipur', destination: '/kashipur/d-3-house-design-in-kashipur', permanent: true },
      { source: '/rampur/2bhk-interior-design-rampur', destination: '/rampur/bhk-2-interior-design-rampur', permanent: true },
      { source: '/rampur/3bhk-interior-design-rampur', destination: '/rampur/bhk-3-interior-design-rampur', permanent: true },
      { source: '/certificates/3d-interior-designer-amroha', destination: '/certificates/d-3-interior-designer-amroha', permanent: true },
    ];
  },
};

module.exports = nextConfig;
