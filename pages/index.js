import { FeaturedPosts } from '../sections/index';
import { Postcard, Categories, PostWidget } from '../components/index'
import { getPosts } from '../services'
import { useRouter } from 'next/router';


export default function Home( { posts } )
{
    const router = useRouter();
    if (router.isFallback) {
      return <Loader />;
    }  

  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <Postcard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

// Fetch data at build time
export async function getStaticProps() 
{
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}


/*
// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
*/