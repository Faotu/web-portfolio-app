import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import ProfilePic from "../Images/faotu.jpg";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <div className="flex-grow mx-auto top-0 m-0 p-5 bg-[#efdfd2] h-screen w-screen">
        <h1 className="text-[#eea071] font-bold text-4xl text-center">
          <Typewriter
            options={{
              strings: ["Faotu", "Happy"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="text-center font-bold text-4xl"
        >
          Software Engineer | MERN
        </motion.div>
        <div className="flex items-center justify-center">
          <SocialIcon
            url="https://www.twitter.com/FaotuHappy/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/faotuhappy/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/Faotu"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.facebook.com/happy.faotu"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>

        <div className="flex items-center justify-center space-y-5">
          {/* main div */}

          <div className="">
            <h1 className="line-clamp-3">
              Build beautiful and functional web application.
            </h1>
            <h1> Writing maintainable and usable code </h1>
            {/* <Button>
              <Link href="/">Hire me!</Link>
            </Button> */}
            <button
              className="flex justify-center bg-red-500 hover:bg-blue-700 
            text-white font-semibold py-2 px-4 rounded"
            >
              Hire me! <FiArrowUpRight className="font-" />
            </button>
          </div>

          <div>{/* clutch content comes here */}</div>

          <div className="pl-10">
            <Image src={ProfilePic} alt="" className="rounded-full h-40 w-40" />
          </div>

          <div className="pl-10">
            <h1>Completed project</h1>
            <h2>78</h2>
            <h1>Client rating</h1>
            <h2>93</h2>
            <h1>Years of Experience</h1>
            <h2>4</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
