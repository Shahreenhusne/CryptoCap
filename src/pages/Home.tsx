import { Link} from "react-router-dom"
import {motion} from "framer-motion"
import gradient from "../assets/gradientpng.png"
import iphoneImg from "../assets/iphone.png"


const Home = () => {
  return (
    < >
      <div className="flex flex-col justify-center items-center p-4 mobile:hidden">
          <div>
                <motion.h1 initial={{opacity:0, x: 50}} animate={{opacity:1, x: 0}} transition={{ duration:1}} className="text-white text-7xl m-0 font-bold hover-heading">Track Crypto</motion.h1>
                <motion.h1 initial={{opacity:0, x: -50}} animate={{opacity:1, x: 0}} transition={{ duration:1 , delay: 1.25}} className="text-7xl text-secondary font-bold m-0">By</motion.h1>
                <motion.h1 initial={{opacity:0, x: 50}} animate={{opacity:1, x: 0}} transition={{ duration:1 , delay: 1.25}}className=" text-6xl m-0 text-secondary font-bold">
                <a href="https://www.coingecko.com/" target="_blank">CoingeckoApi</a>
                </motion.h1>
                <motion.div initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.25, duration: 0.75 }} className=" mt-14">
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
                </motion.div>
          </div>
          <div className=" relative w-[50%]">
            <img src={gradient} className=" absolute top-32 left-0 w-56"></img>
            <img src={iphoneImg} className=" absolute top-10 left-[-15px] w-60"></img>
          </div>
      </div>
      <div className="hidden mobile:flex justify-between items-start px-4 py-12">
        <div>
            <motion.h1 initial={{opacity:0, x: 50}} animate={{opacity:1, x: 0}} transition={{ duration:1}} className="text-white text-8xl m-0 font-bold hover-heading">Track Crypto</motion.h1>
            <motion.h1 initial={{opacity:0, x: -50}} animate={{opacity:1, x: 0}} transition={{ duration:1 , delay: 1.25}} className="text-8xl text-secondary font-bold m-0">By</motion.h1>
            <motion.h1 initial={{opacity:0, x: 50}} animate={{opacity:1, x: 0}} transition={{ duration:1 , delay: 1.25}}className=" text-8xl m-0 text-secondary font-bold">
            <a href="https://www.coingecko.com/" target="_blank">CoingeckoApi</a>
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.25, duration: 0.75 }} className=" mt-14">
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
            </motion.div>
        </div>
        <div className=" relative w-[50%] ml-auto">
          <img src={gradient} className=" absolute top-20 right-0 w-56"></img>
          <img src={iphoneImg} className=" absolute right-3 w-60"></img>
        </div>
      </div>
    </>
  )
}

export default Home


//Framer-motion , a motion library for ReactJS