// import React, { useEffect, useState } from "react";
// import BlogsSection from "../Components/BlogsSection";
// import JoinSection from "../Components/JoinSection";
// import ColoursSection from "../Components/ColoursSection";
// import CategorySection from "../Components/CategorySection";
// import AboutSection from "../Components/AboutSection";
// import BannerSection from "../Components/BannerSection";


// const GRAPHQL_ENDPOINT =
//   "https://astralpaints.kwebmakerdigitalagency.com/graphql";

// const QUERY = `
// {
//   pages(where: {name: "Homepage"}) {
//     nodes {
//       homepage {
//         banners {
//           bannerImage {
//             node {
//               sourceUrl
//             }
//           }
//           bannersTitle
//           bannerDescription
//           bannerButton {
//             title
//             url
//             target
//           }
//         }
//         homeAboutTitle
//         homeAboutSubtitle
//         homeAboutButton {
//           target
//           title
//           url
//         }
//         homeAboutVideoImage {
//           node {
//             sourceUrl
//           }
//         }
//         homeAboutVideoUrl
//         homeAboutDescription
//         homeCategoryTitle
//         homeCategorySubtitle
//         homeServicesTitle
//         homeServicesSubtitle
//         homeColoursTitle
//         homeColoursSubtitle
//         homeColoursButton {
//           target
//           title
//           url
//         }
//         homeJoinBackgroundImage {
//           node {
//             sourceUrl
//           }
//         }
//         homeJoinTitle
//         homeJoinSubtitle
//         homeJoinButton {
//           target
//           title
//           url
//         }
//         homeJoinDescription
//         blogTitle
//         blogSubtitle
//         categories {
//           link
//           title
//           image {
//             node {
//               sourceUrl
//             }
//           }
//         }
//       }
//     }
//   }
//   allColourCategory(where: {slug: "popular"}) {
//     nodes {
//       name
//       colours {
//         nodes {
//           title
//           slug
//           colourInfo {
//             selectColor
//             colourRgb
//           }
//         }
//       }
//     }
//   }
//   blogs {
//     nodes {
//       featuredImage {
//         node {
//           sourceUrl
//           slug
//         }
//       }
//       slug
//       title
//       date
//     }
//   }
// }
// `;

// export default function Homepage() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(GRAPHQL_ENDPOINT, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ query: QUERY }),
//     })
//       .then((res) => res.json())
//       .then((resJson) => {
//         if (resJson.errors) {
//           console.error("GraphQL errors:", resJson.errors);
//         } else {
//           setData(resJson.data);
//         }
//       })
//       .catch((err) => console.error("Fetch error:", err));
//   }, []);

//   if (!data) return <div className="p-10 text-center">Loading...</div>;

//   const homepage = data.pages.nodes[0].homepage;
//   const categories = homepage.categories || [];
//   const colours = data.allColourCategory.nodes[0];
//   const blogs = data.blogs.nodes;

//   return (
//     <div className="space-y-16 max-w-7xl mx-auto p-4">
//       <BannerSection banners={homepage.banners} />
//       <AboutSection about={homepage} />
//       <CategorySection
//         categories={categories}
//         title={homepage.homeCategoryTitle}
//         subtitle={homepage.homeCategorySubtitle}
//       />
//       <ColoursSection coloursData={colours} />
//       <JoinSection joinData={homepage} />
//       <BlogsSection
//         blogs={blogs}
//         title={homepage.blogTitle}
//         subtitle={homepage.blogSubtitle}
//       />
//     </div>
//   );
// }
