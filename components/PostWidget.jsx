import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '../services';


// adding Props to PostWidget components
const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);
  
    useEffect(() => {
      if (slug) {
        getSimilarPosts(categories, slug).then((result) => {
          setRelatedPosts(result);
        });
      } else {
        getRecentPosts() //we do not pass any parameter 
        .then((result) => {
            setRelatedPosts(result);
        });
    }
  }, [slug]);
        // these Posts come from Services/index.js
        // will affects only when the slug changes

    console.log(realtedPosts)

    // creating jsx for PostWidget to call component from home and inside the specific article then we will pass the Props
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}
        </h3>
          {relatedPosts.map((post) => (
            <div key={post.title} className="flex items-center w-full mb-4">
              <div className="w-16 flex-none">
                <Image
                  //loader={grpahCMSImageLoader}
                  alt={post.title}
                  height="60px"
                  width="60px"
                  //unoptimized
                  className="align-middle rounded-full"
                  src={post.featuredImage.url}
                />
              </div>
              <div className="flex-grow ml-4">
                <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}
                </p>
                <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      );
    };

export default PostWidget
