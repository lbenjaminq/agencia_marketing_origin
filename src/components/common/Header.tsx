interface Props {
  title: string
  description: string
}

function HeaderCases({ title, description }: Props) {
  return (
    <main>
      <div className="relative px-6 lg:px-8 h-[calc(100vh-7rem)]">
        <div className="mx-12 mt-20 max-w-full pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <h1 className="text-4xl font-bold pb-10 tracking-tight sm:text-7xl">
                {title}
              </h1>
              <p className="mt-16 text-2xl max-w-4xl leading-8 text-black">
                {description}
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
export default HeaderCases;