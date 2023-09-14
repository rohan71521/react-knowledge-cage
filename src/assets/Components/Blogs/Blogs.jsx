import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";
import PropTypes from 'prop-types'; 

const Blogs = ({handleBookmarks}) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> setData(data))
    },[]);

    return (
        <div className="md:w-2/3">
           {
             data.map(datum=> <Blog
                handleBookmarks={handleBookmarks}
                key={datum.id}
                datum={datum} 
                ></Blog>)
           }
        </div>
    );
};

export default Blogs;

Blogs.propTypes = {
    handleBookmarks : PropTypes.func.isRequired
}