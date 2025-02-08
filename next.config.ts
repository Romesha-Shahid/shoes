// export default {
//     images: {
//       domains: ['your-image-domain.com'],
//     },
//   };
  // import type { NextConfig } from "next";

  // const nextConfig: NextConfig = {
  //   images: {
  //     remotePatterns: [
  //       {
  //         protocol: 'https',
  //         hostname: '**',
  //         port: '',
  //         pathname: '**',
  //         search: '',
  //       },
  //     ],
  //   },
  // };
  
  // export default nextConfig;

  import type { NextConfig } from "next";

     const nextConfig : NextConfig = {
       images:{
           domains:['cdn.sanity.io'],
       }
     };
     module.exports =nextConfig