import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";


const Blogs = () => {
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
                key={datum.id}
                datum={datum} 
                ></Blog>)
           }
        </div>
    );
};

export default Blogs;