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
      { source: '/haldwani/3bhk-interior-design-contractors-in-india', destination: '/haldwani/bhk-3-interior-design-contractors-in-india', permanent: true },
      { source: '/haldwani/2bhk-interior-design-before-and-after', destination: '/haldwani/bhk-2-interior-design-before-and-after', permanent: true },
      { source: '/haldwani/2bhk-interior-design-services-near-me', destination: '/haldwani/bhk-2-interior-design-services-near-me', permanent: true },
      { source: '/haldwani/2bhk-interior-design-for-small-space', destination: '/haldwani/bhk-2-interior-design-for-small-space', permanent: true },
      { source: '/haldwani/3bhk-interior-design-cost-per-sq-ft', destination: '/haldwani/bhk-3-interior-design-cost-per-sq-ft', permanent: true },
      { source: '/kashipur/2d-house-plan-designer-in-kashipur', destination: '/kashipur/d-2-house-plan-designer-in-kashipur', permanent: true },
      { source: '/haldwani/3bhk-interior-design-before-after', destination: '/haldwani/bhk-3-interior-design-before-after', permanent: true },
      { source: '/haldwani/2bhk-interior-design-inspiration', destination: '/haldwani/bhk-2-interior-design-inspiration', permanent: true },
      { source: '/haldwani/2bhk-interior-design-trends-2024', destination: '/haldwani/bhk-2-interior-design-trends-2024', permanent: true },
      { source: '/haldwani/3bhk-interior-design-trends-2026', destination: '/haldwani/bhk-3-interior-design-trends-2026', permanent: true },
      { source: '/moradabad/2bhk-interior-design-moradabad', destination: '/moradabad/bhk-2-interior-design-moradabad', permanent: true },
      { source: '/moradabad/3bhk-interior-design-moradabad', destination: '/moradabad/bhk-3-interior-design-moradabad', permanent: true },
      { source: '/haldwani/2bhk-interior-design-furniture', destination: '/haldwani/bhk-2-interior-design-furniture', permanent: true },
      { source: '/haldwani/2bhk-interior-design-layout', destination: '/haldwani/bhk-2-interior-design-layout', permanent: true },
      { source: '/haldwani/3bhk-interior-design-layout', destination: '/haldwani/bhk-3-interior-design-layout', permanent: true },
      { source: '/kashipur/3d-house-design-in-kashipur', destination: '/kashipur/d-3-house-design-in-kashipur', permanent: true },
      { source: '/haldwani/2bhk-interior-design-ideas', destination: '/haldwani/bhk-2-interior-design-ideas', permanent: true },
      { source: '/haldwani/3bhk-interior-design-ideas', destination: '/haldwani/bhk-3-interior-design-ideas', permanent: true },
      { source: '/haldwani/2bhk-interior-design-cost', destination: '/haldwani/bhk-2-interior-design-cost', permanent: true },
      { source: '/haldwani/3bhk-interior-design-cost', destination: '/haldwani/bhk-3-interior-design-cost', permanent: true },
      { source: '/rampur/2bhk-interior-design-rampur', destination: '/rampur/bhk-2-interior-design-rampur', permanent: true },
      { source: '/rampur/3bhk-interior-design-rampur', destination: '/rampur/bhk-3-interior-design-rampur', permanent: true },
      { source: '/haldwani/3bhk-interior-design-app', destination: '/haldwani/bhk-3-interior-design-app', permanent: true },
      { source: '/certificates/3d-interior-designer-amroha', destination: '/certificates/d-3-interior-designer-amroha', permanent: true },
      { source: '/haldwani/2bhk-interior-design', destination: '/haldwani/bhk-2-interior-design', permanent: true },
      { source: '/haldwani/3bhk-interior-design', destination: '/haldwani/bhk-3-interior-design', permanent: true },
    ];
  },
};

module.exports = nextConfig;
