import {Navlink,UserAccessBtn} from '../Components'
const Navbar = () => {
  return (
    <nav className='flex sticky top-0 z-[1000] items-center justify-between bg-transparent backdrop-blur-md px-[10%] py-[1.5rem]'>
        <h1 className='text-[2rem] text-c-900'>E-commercial</h1>
        <Navlink/>
        <UserAccessBtn/>
    </nav>
  )
}

export default Navbar
