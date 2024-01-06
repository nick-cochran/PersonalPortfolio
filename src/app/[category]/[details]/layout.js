

export async function generateStaticParams() {
    // const posts = await fetch('https://.../posts').then((res) => res.json())
    const projects = [{ "category": "software-development", "projects": { "title": "website" } },
     { "category": "theatre", "projects": { "title": "show" } },
      { "category": "photography", "projects": { "title": "shoot" } },
      { "category": "film", "projects": { "title": "movie" } }]
   
    // return posts.map((post) => ({
    //   slug: post.slug,
    // }))

    return projects.map((categories) => {
        if (categories.category === "software-development") {
            return { details: categories.projects.title };
        }
    });
    // return [{ slug: ['a', '1'] }, { slug: ['b', '2'] }, { slug: ['c', '3'] }]
}


export default function detailLayout({ children }) {

    return (
        <section>
            {children}
        </section>
    )
}