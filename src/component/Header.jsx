import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <header className='bg-slate-300 shadow-md' >
        <div className='flex justify-between items-center max-w-6xl mw-auto p-3'>
            <Link to='/'>
            <h1  className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-purple-700'>Eventii</span>
            </h1>
            </Link>
            <form  className='bg-slate-200  p-3 rounded-lg flex items-center' >
                <input  
                type='text'
                placeholder='Search...' 
                className='bg-transparent focus:outline-none w-24 sm:w-64 '/>
                <FaSearch className='text-slate-600 '/>
            </form>
            <Link to='Signin'>
            <ul>
                <li className='text-slate-700 font-bold text-sm'>Sign In</li>
            </ul>
            </Link>
        </div>
 
    </header>
  )
}
