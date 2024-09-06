import { Link} from "react-router-dom"
import {motion} from "framer-motion"
import { RWebShare } from "react-web-share"
import gradient from "../assets/gradientpng.png"
import iphoneImg from "../assets/iphone.png"
import { useEffect, useState } from "react"


const Home = () => {

  const words: string[] = ["Track", "Trade", "Secure"];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);
  
    return () => clearInterval(interval);
  }, [words.length]);
  

  return (
    < >
      <div className="flex flex-col justify-center items-center p-4 mobile:hidden">
          <div>
                <motion.h1 initial={{opacity:0, x: 50}} animate={{opacity:1, x: 0}} transition={{ duration:1}} className="text-secondary text-7xl m-0 font-bold hover-heading text-center" >Stay Ahead</motion.h1>
                <motion.h1 initial={{opacity:0, x: -50}} animate={{opacity:1, x: 0}} transition={{ duration:1 , delay: 1.25}} className="text-7xl text-secondary font-bold mt-6 text-center">in Crypto</motion.h1>
                <motion.h1 initial={{opacity:0, x: 50}} animate={{opacity:1, x: 0}} transition={{ duration:1 , delay: 1.25}}className=" text-3xl mt-10 text-white font-bold text-center hover-heading">
                <a href="https://www.coingecko.com/" target="_blank">{words[currentIndex]} Your Investments in Real-Time!</a>
                </motion.h1>
                <motion.div initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.25, duration: 0.75 }} className="mt-14 flex gap-4 w-full justify-center">
                    <Link
                    to="/crypto"
                    className="px-10 py-6 rounded-xl text-white text-lg bg-[#181819] border-b-4 border-r-4 border-border-dimmed">
                    Crypto
                    </Link>
                    <RWebShare  
                        data={{
                            text: "CryptoDashboard made by Shahreen Husne Rabbani using React JS.",
                            url: "https://cryptocapbd.netlify.app/",
                            title: "CryptoCap",
                        }}>

                    <Link
                    to="/"
                    className=" ml-10 px-10 py-6 rounded-xl text-white text-lg bg-[#181819] border-b-4 border-r-4 border-border-dimmed">
                    Share
                    </Link>
                    </RWebShare>
                </motion.div>
          </div>
          <div className=" relative w-[30%]">
            <img src={gradient} className=" absolute top-32 left-0 w-60"></img>
            <img src={iphoneImg} className=" absolute top-20 left-[-15px] w-64"></img>
          </div>
      </div>
      <div className="hidden mobile:flex justify-between items-start px-4 py-12">
        <div>
            <motion.h1 initial={{opacity:0, x: 50}} animate={{opacity:1, x: 0}} transition={{ duration:1}} className="text-secondary text-9xl m-0 font-bold">Stay Ahead</motion.h1>
            <motion.h1 initial={{opacity:0, x: -50}} animate={{opacity:1, x: 0}} transition={{ duration:1 , delay: 1.25}} className="text-9xl text-secondary font-bold mt-6">in Crypto</motion.h1>
            <motion.h1 initial={{opacity:0, x: 50}} animate={{opacity:1, x: 0}} transition={{ duration:1 , delay: 1.25}}className=" text-4xl mt-10 text-white font-bold hover-heading">
            <a href="https://www.coingecko.com/" target="_blank">{words[currentIndex]} Your Investments in Real-Time!</a>
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.25, duration: 0.75 }} className=" mt-14 flex gap-1">
                <Link
                to="/crypto"
                className="px-10 py-6 rounded-xl text-white text-lg bg-[#181819] border-b-4 border-r-4 border-border-dimmed">
                Crypto
                </Link>
                <RWebShare  
                data={{
                    text: "CryptoDashboard made by Shahreen Husne Rabbani using React JS.",
                    url: "https://cryptocapbd.netlify.app/",
                    title: "CryptoCap",
                }}>

                <Link
                to="/"
                className=" ml-10 px-10 py-6 rounded-xl text-white text-lg bg-[#181819] border-b-4 border-r-4 border-border-dimmed">
                Share
                </Link>
                </RWebShare>
            </motion.div>
        </div>
        <div className="relative h-[100%] right-5 mt-8 w-[40%]">
          <img src={gradient} className=" absolute top-20 right-0 w-60"></img>
          <motion.img src={iphoneImg} className=" absolute top-0 right-3 w-64"
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          ></motion.img>
        </div>
      </div>
    </>
  )
}

export default Home


//Framer-motion , a motion library for ReactJS
// repeatType: "mirror" in Framer Motion tells the animation to reverse direction on each repetition. Instead of the animation starting from the initial position again after completing, it "mirrors" itself by animating in the opposite direction. For example, if the element animates from y: -20 to y: 20, with repeatType: "mirror", it will go back from y: 20 to y: -20 in the next cycle.
// Framer Motion directly manipulates inline styles in the DOM to apply animations. It doesn’t affect your stylesheet-defined CSS but adds or updates inline styles to create the animations.
// Framer Motion primarily works by applying inline styles for animations, which means it won't interfere with the class-based styling provided by Tailwind or Bootstrap. Your framework-defined classes (such as Tailwind's utility classes or Bootstrap's grid system) will still work as expected, and Framer Motion will simply layer its animations on top of those styles by updating inline properties like transform, opacity, etc.