"use client";
import Image from "next/image";
import NavigationBar from "@/app/components/NavigationBar";
import Hero from "@/app/components/Hero";
import Service from "@/app/components/Service";
import Unique from "@/app/components/Unique";
import Mission from "@/app/components/Mission";
import Team from "@/app/components/Team";
import {Footer} from "@/app/components/Footer";
import {motion} from "framer-motion";

export default function Home() {
  return (
      <>
          {/*<Hero/>*/}
          {/*<Mission/>*/}
          {/*<Service/>*/}
          {/*<Unique/>*/}
          {/*<Team/>*/}
          <motion.div
              initial={{opacity: 0, x: -50}} // Start from the left (-X direction)
              animate={{opacity: 1, x: 0}} // Move to original position
              transition={{duration: 3}} // Duration of animation
          >
              <NavigationBar/>
              <div>
                  <Hero/>
                  <Mission/>
                  <Service/>
                  <Unique/>
                  <Team/>              </div>
              {/*</div>*/}
              <Footer/>
          </motion.div>
      </>
  );
}
