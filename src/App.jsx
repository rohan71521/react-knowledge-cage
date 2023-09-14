import { useState } from 'react'
import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Bookmarks from './assets/Components/Bookmarks/Bookmarks'
import Header from './assets/components/header/Header'


function App() {
const [bookmarks, setBookmarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);

const handleBookmarks = mark =>{
  const newMarks = [...bookmarks, mark];
  setBookmarks(newMarks);
  handleReadingTime(mark)
}

const handleReadingTime= mark =>{
   const newTime = readingTime + mark.read_time
   setReadingTime(newTime);
}


  return (
    <>
    <Header></Header>
    <main className='md:flex max-w-7xl mx-auto px-5'>
    <Blogs 
    handleBookmarks={handleBookmarks}
    ></Blogs>
    <Bookmarks 
    bookmarks={bookmarks}
    readingTime ={readingTime}
    ></Bookmarks>
    </main>
    </>
  )
}

export default App
