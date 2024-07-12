import { Link} from "react-router-dom"

export const Header = () => {
  return (
    <div className="bg-[#272425] sticky top-0 text-white flex items-center justify-between p-4">
        <div className=" pl-10">
        <Link
            to="/"
            className="text-[#94aea5] font-extrabold"
          >
            CRYPTOCAP
          </Link>
        </div>
        <div className="flex space-x-4  rounded-2xl">
          <Link
            to="/"
            className="px-3 py-2 rounded-2xl text-white text-sm hover:bg-[#94aea5]"
          >
            Home
          </Link>
          <Link
            to="/crypto"
            className="px-3 py-2 rounded-2xl text-white text-sm hover:bg-[#94aea5]"
          >
            Crypto
          </Link>
          <Link
            to="/trending"
            className="px-3 py-2 rounded-2xl text-white text-sm hover:bg-[#94aea5]"
          >
            Trending
          </Link>
          <Link
            to="/save"
            className="px-3 py-2 rounded-2xl text-white text-sm hover:bg-[#94aea5]"
          >
            Save
          </Link>
        </div>
        <div className="pr-10">
          <Link
            to="/"
            className=" rounded-2xl text-sm bg-[#70ac97] p-4 hover:bg-[#272425]"
          >
            Signup
          </Link>
          <Link
            to="/"
            className=" m-3 rounded-2xl text-sm border  border-[#70ac97] p-4 hover:bg-[#70ac97]"
          >
            Login
          </Link>
        </div>
      </div>
    
  )
}
