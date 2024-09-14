import { Link} from "react-router-dom"
import AnchorTemporaryDrawer from "./drawer"

export const Header = () => {
  return (
    <>
    <div className=" hidden mobile:block mt-0" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="bg-[#272425]  text-white flex items-center justify-between p-4 w-full">
        <div className=" pl-10">
        <Link
            to="/"
            className="text-[#94aea5] font-extrabold"
          >
            CRYPTOCAP
          </Link>
        </div>
        <div className="flex space-x-4  rounded-2xl pr-10">
          <Link
            to="/"
            className="px-3 py-2 rounded-2xl text-secondary text-sm hover-custom-border-shadow"
          >
            Home
          </Link>
          <Link
            to="/crypto"
            className="px-3 py-2 rounded-2xl text-secondary text-sm hover-custom-border-shadow"
          >
            Crypto
          </Link>
          <Link
            to="/trending"
            className="px-3 py-2 rounded-2xl text-secondary text-sm hover-custom-border-shadow"
          >
            Trending
          </Link>
          <Link
            to="/save"
            className="px-3 py-2 rounded-2xl text-secondary text-sm hover-custom-border-shadow"
          >
            Save
          </Link>
        </div>
       
      </div>
    </div>
    <div className="mobile:hidden mt-0" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="bg-[#272425] sticky top-0 text-white flex items-center justify-between p-4 w-full">
      <div>
        <Link
            to="/"
            className="text-[#94aea5] font-extrabold"
          >
            CRYPTOCAP
          </Link>
        </div>
        <div className=" text-secondary flex-col ">
           <AnchorTemporaryDrawer/>
        </div>
      </div>
     
    </div>
    </>
    
  )
}
