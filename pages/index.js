import Head from 'next/head'
import {PostCard, Categories, PostWidget} from '../components';
import { getPosts} from '../services';

/* const posts =[
  {
    title: 'React Testing', excerpt: 'Learn react Testing'
  },
  {
    title: 'React with Tailwind', excerpt: 'Learn react  with Tailwind'
  },

] */

export default function Home({posts}) {
  return (
    <div className="contaier mx-auto px-10 mb-8 ">
      <Head>
        <title>auccommunitysite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className= 'grid grid-cols-1 lg:grid-cols-12 gap-12 '>
          <div className ="lg:col-span-8 col-span-1">
          { posts.map((post) => <PostCard post ={post} key={post.title} /> )}
          </div>
              
        <div className= "lg:col-span-4 clo-span-1">  {/* lg for large screen  */}
        <div className= "lg:col-sticky relative top-8">
            <PostWidget/>
            <Categories/>
        </div>

        </div>
      </div>
    </div>

  )
}

export async function getStaticProps (){
  const posts = (await getPosts()) || [];

  return {
    props: {posts}
  }
}