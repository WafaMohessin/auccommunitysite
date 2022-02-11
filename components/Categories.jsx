import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => { 
    // fetch categories for Postcard

    const [categories, setCategories] = useState ([]);
    useEffect (() => {
        getCategories()
        .then((newCategories) => setCategories (newCategories))

    },[]); //empty so call this at start to fill the category
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}
        </h3>
        </div>
    )
}

export default Categories
