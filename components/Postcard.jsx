import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const Postcard = ({post}) => {

    console.log (post);

    return (
       /*  <div>
            {post.title}
            {post.excerpt}
        </div> */

        <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img 
                src={post.featuredImage.url} 
                alt ={post.title} 
                className="max-width: 24rem object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"/>
            </div>
            <h1 className= "transition duration-100 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
                <Link href= {`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
            <div classname=" block lg:flex text-center items-center justify-center mb-8 w-full">
                <div clssName= "flex item-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                    <img 
                    alt={post.author.name}
                    height="50px"
                    width="50px"
                    className= "align-middle rounded-full"
                    src= {post.author.photo.url}
                    />
                    <p className="inline align-middle text-gray-700 ml-2 text-lg">{post.author.name}</p>
                </div>
                <div className="font-medium text-gray-700">
                    <svg className=" "/>

                </div>

            </div>

        </div>
    )
}

export default Postcard
