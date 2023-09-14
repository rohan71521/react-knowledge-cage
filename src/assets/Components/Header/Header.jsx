import profile from '../../images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center mx-5 py-4 border-b-2'>
            <h1 className="text-2xl md:text-3xl lg:text-5xl">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;