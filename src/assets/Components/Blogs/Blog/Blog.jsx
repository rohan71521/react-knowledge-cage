import { FaBookmark } from 'react-icons/fa';


import PropTypes from 'prop-types'; 
import { useState } from 'react';
const Blog = ({datum, handleBookmarks}) => {
  const [markColor,  setMarkColor] = useState(false);

    const {blog_cover_img,author_img, 
        author_name, posted_date, read_time, title,hashtags} = datum;

        const handleBookmark = () =>{
           handleBookmarks(datum);
           setMarkColor(true)
        }
    return (
        <div className='pt-5 space-y-5 border-b py-8'>
          <div>
             <img 
             src={blog_cover_img} 
             className='rounded-lg'
              alt="" 
              />
          </div>
          <div>
             <div className='flex justify-between'>
                <div className='flex gap-3 items-center'>
                  <img 
                  src={author_img} 
                  width="70px" 
                  className='rounded-full' 
                  alt=""
                   />
                  <div>
                    <h3 className='text-base font-bold lg:text-lg'>{author_name}</h3>
                    <p className='text-xs lg:text-md'>{posted_date}</p>
                  </div>
               </div>
                       <p 
                          className='text-xs lg:text-base flex justify-center items-center gap-2'>
                          {read_time} minutes read  
                          <button 
                            className={`${markColor && 'text-red-600'}`}
                            onClick={handleBookmark}>
                            <FaBookmark></FaBookmark>
                          </button>
                       </p>
                       
             </div>
             <h1 className='text-base font-bold lg:text-2xl py-5 '>{title}</h1>
             <div className='flex gap-3'>
              {
                hashtags.map((tag, id)=> <p 
                className='text-amber-700 text-xs lg:text-base' 
                key={id}
                ># {tag}</p>)
              }
             </div>
          </div>
        </div>
    );
};

export default Blog;

Blog.propTypes = {
    datum : PropTypes.object.isRequired,
    handleBookmarks : PropTypes.func.isRequired
}