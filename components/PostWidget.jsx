import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link';

import { getRecentPosts } from '../services';

const PostWidget = ({categories, slug}) => {
    useState [realtedPosts, setRealatedPosts] = useState ([]);

    useEffect (() =>{
        if (slug) {
            getSimilarPost (categories, slug)
            .then ((result) => setRealatedPosts = (result))
        }else{
            getRecentPost () //we do not pass any parameter 
            .then ((result) => setRealatedPosts = (result))

        } // these Posts come from Services/index.js
        

    }, [input])


    return (
        <div>
            PostWidget
        </div>
    )
}

export default PostWidget
