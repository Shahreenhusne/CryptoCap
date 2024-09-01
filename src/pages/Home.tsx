import { Link} from "react-router-dom"


const Home = () => {
  return (
    < >
      

      <div className="flex flex-col justify-center items-center p-4 mobile:hidden">
      <div>
        <h1 className="text-white text-7xl m-0 font-bold hover-heading">Track Crypto</h1>
        <h1 className="text-7xl text-secondary font-bold m-0">By</h1>
        <h1 className=" text-6xl m-0 text-secondary font-bold link-style">
        <a href="https://www.coingecko.com/" target="_blank">CoingeckoApi</a>
        </h1>
        <div className="mt-14">
            <Link
             to="/crypto"
            className="px-10 py-6 rounded-xl text-white text-lg bg-[#181819] border-b-4 border-r-4 border-border-dimmed">
            Crypto
            </Link>
            <Link
             to="/"
            className=" ml-10 px-10 py-6 rounded-xl text-white text-lg bg-[#181819] border-b-4 border-r-4 border-border-dimmed">
            Share
            </Link>
        </div>
        </div>
        <div>
          Phone
        </div>
      </div>
      <div className="hidden mobile:flex justify-between items-start px-4 py-12">
        <div>
        <h1 className="text-white text-8xl m-0 font-bold hover-heading">Track Crypto</h1>
        <h1 className="text-8xl text-secondary font-bold m-0">By</h1>
        <h1 className=" text-8xl m-0 text-secondary font-bold">
        <a href="https://www.coingecko.com/" target="_blank">CoingeckoApi</a>
        </h1>
        <div className=" mt-14">
            <Link
             to="/crypto"
            className="px-10 py-6 rounded-xl text-white text-lg bg-[#181819] border-b-4 border-r-4 border-border-dimmed">
            Crypto
            </Link>
            <Link
             to="/"
            className=" ml-10 px-10 py-6 rounded-xl text-white text-lg bg-[#181819] border-b-4 border-r-4 border-border-dimmed">
            Share
            </Link>
        </div>
        </div>
        <div>
          Phone
        </div>
      </div>
    </>
  )
}

export default Home