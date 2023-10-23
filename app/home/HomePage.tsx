import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

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
        <motion.p
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
        </motion.p>
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
      </div>
    </>
  );
};

export default HomePage;
