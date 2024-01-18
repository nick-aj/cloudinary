// module.exports = ({ env }) => ({
//     // … some unrelated plugins configuration options
//     upload: {
//        config: {
//           // … provider-specific upload configuration options go here
//        }
//     // … some other unrelated plugins configuration options
//     }
//     });

module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          //uploadStream: {},
          delete: {},
        },
      },
    },
    // ...
  });