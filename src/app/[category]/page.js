

// dynamic route from
// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

// generate static params page --> use Generate params from the top down example
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params

// export async function generateStaticParams() {
//     // const posts = await fetch('https://.../posts').then((res) => res.json())
//     const projects = [{ "category": "software-development" },
//      { "category": "theatre" }, { "category": "photography" },
//       { "category": "film" }]
   
//     // return posts.map((post) => ({
//     //   slug: post.slug,
//     // }))

//     return projects.map((project) => ({
//         category: project.category,
//     }))
//     // return [{ slug: ['a', '1'] }, { slug: ['b', '2'] }, { slug: ['c', '3'] }]
//   }

function Page({ params }) {
    const { category } = params;

    return (
        <section>
            <h2> { category } page </h2>
        </section>
    )
}


export default Page;