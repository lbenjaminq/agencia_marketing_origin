import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

function HeaderHome() {
  return (
    <main>
      <div className="h-[calc(100vh-7rem)] relative px-6 lg:px-8">
        <div className="mx-12 mt-20 max-w-full pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <h1 className="text-4xl font-bold pb-10 tracking-tight sm:text-7xl">
                Hecha por <Typewriter
                  words={['Benjamin', 'Leandro', 'Code']}
                  loop={5}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600 ">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                amet fugiat veniam occaecat fugiat aliqua.
              </p> */}
              <p className="mt-16 text-2xl max-w-4xl leading-8 text-black ">
                <span className='text-xl xs:text-sm md:text-xl font-medium leading-8 text-gray-700 sm:text-center   transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button pr-2'>
                  <Link to='/'>Web Development</Link>
                </span>
                <span className='lg:mx-1 text-xl xs:text-sm md:text-xl font-medium leading-8 text-gray-700 sm:text-center transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button pr-2'>
                  <Link to='/'> App Development</Link>
                </span>
                <span className='lg:mx-1 text-xl xs:text-sm md:text-xl font-medium leading-8 text-gray-700 sm:text-center transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button pr-2'>
                  <Link to='/'> Game Development</Link>
                </span>
                <span className='lg:mx-1 text-xl xs:text-sm md:text-xl font-medium leading-8 text-gray-700 sm:text-center transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button pr-2'>
                  <Link to='/'> Digital Marketing</Link>
                </span>
              </p>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-65rem)] sm:top-[calc(100%-30rem)]">
              <img src="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default HeaderHome;