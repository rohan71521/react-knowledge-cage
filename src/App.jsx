import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Bookmarks from './assets/Components/Bookmarks/Bookmarks'
import Header from './assets/components/header/Header'


function App() {


  return (
    <>
    <Header></Header>
    <main className='md:flex max-w-7xl mx-auto px-5'>
    <Blogs></Blogs>
    <Bookmarks></Bookmarks>
    </main>
    </>
  )
}

export default App
