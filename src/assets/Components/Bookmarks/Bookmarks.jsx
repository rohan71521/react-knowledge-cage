
import PropTypes from 'prop-types'; 
const Bookmarks = ({bookmarks, readingTime}) => {
    return ( 
        <div className="md:w-1/3 p-3 mt-2">
            <div className='text-xl p-2 my-2 border-2 border-red-400 rounded'>
                Spent Time On Read : {readingTime} mins
            </div>
      <div className='bg-gray-200 p-2 rounded'>
            <div className='text-xl p-2 my-2'>
               Bookmarked Blogs : {bookmarks.length}
            </div>
         {
            bookmarks.map(mark=>{
             return   <div 
             className='text-xl bg-white rounded p-2 my-2'
             key={mark.id}
             >{mark.title}
              </div>
              
            })
         }
           </div>
     </div>
    );
};

export default Bookmarks;

Bookmarks.propTypes = {
    bookmarks : PropTypes.array.isRequired,
    readingTime : PropTypes.number.isRequired
}