import Head from "next/head";
// // get top stories ids from hacker-news api and  the fetch the story data from the ids                  
//  async function getServerSideProps(context:any) {
//     const res = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`);
//     const data = await res.json();
//     const stories = await Promise.all(data.map(async (id:number) => {
//         const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
//         const story = await res.json();
//         return story;
//     }));
//     return {
//         props: {
//             stories,
//         },
//     };
// }
// export default getServerSideProps;

// // export default function Hacker({ stories }:any) {
// //     return (
// //         <div>
// //             <h1>Hacker News</h1>
// //             <ul>
// //                 {stories.map((story:any) => (
// //                     <li key={story.id}>
// //                         <a href={story.url}>{story.title}</a>
// //                     </li>
// //                 ))}
// //             </ul>
// //         </div>
// //     );
// // }