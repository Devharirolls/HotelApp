import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "fcpfuxhm",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// Run this to add exception for localhost:3000 CORS policy
// sanity cors add http://localhost:3000

export default client;





// import { SanityClient } from "@sanity/client";
// import ImageUrlBuilder from "@sanity/image-url"

// const client = SanityClient({
//     projectId: "fcpfuxhm",
//     dataset: 'production',
//     useCdn: true,
//     apiVersion: "2021-10-21",
// });


// const builder = ImageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);

// //Run this to add exceptioj for localhost 3000 CORS policy
// //sanity cors add http://localhost:3000

// export default client;