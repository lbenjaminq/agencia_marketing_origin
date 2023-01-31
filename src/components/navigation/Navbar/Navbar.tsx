import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className='w-full py-8 top-0 fixed'>
      <div className="px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link to="/" className="ml-4 mt-2">
            <h3 className="ml-4 text-lg font-medium leading-6 text-gray-900">Logo</h3>
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink to="/cases" className="text-lg inline-flex  font-medium leading-6 text-gray-900 hover:border-b-2 border-orange-500  mx-4" >Cases</NavLink>
            <NavLink to="/services" className="text-lg inline-flex  font-medium leading-6 text-gray-900 hover:border-b-2 border-orange-500  mx-4" >Services</NavLink>
            <NavLink to="/about" className="text-lg inline-flex  font-medium leading-6 text-gray-900 hover:border-b-2 border-orange-500  mx-4" >About</NavLink>
            <NavLink to="/careers" className="text-lg inline-flex  font-medium leading-6 text-gray-900 hover:border-b-2 border-orange-500  mx-4" >Careers</NavLink>
            <NavLink to="/blog" className="text-lg inline-flex  font-medium leading-6 text-gray-900 hover:border-b-2 border-orange-500  mx-4" >Blog</NavLink>
            <NavLink to="/contact" className="text-lg inline-flex  font-medium leading-6 text-gray-900 hover:border-b-2 border-orange-500  mx-4" >Contact</NavLink>
            <Link
              to="/contact"
              type="button"
              className="ml-6 relative inline-flex items-center rounded-md border border-transparent bg-orange-button px-4 py-2 text-sm font-medium text-white shadow-sm transition duration-400 ease-in-out hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Hire Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;