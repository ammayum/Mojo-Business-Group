import Head from "next/head";
import Hero from "../components/Hero";
import Services from "../components/Services";
// import Teams from "../components/Teams";
import Products from "../components/Products";
import Contact from "../components/Contact";
import { LogoIcon } from "../assets";
import Logo from "../assets/icons/Logo.png"

import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Mojo Business Group S.C 
        </title>
        <meta
          name="description"
          content="Mojo Business Group S.C is share company organized by 61 share holders with the lead of Mr Abuye........"
        />
        <meta
          name="keywords"
          content="Mojo Business Group S.C"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/*<!-- Google / Search Engine Tags -->*/}
        <meta
          name="name"
          content="Mojo Business Group S.C."
        />
        <meta
          name="description"
          content="Mojo Business Group S.C."
        />
        <meta
          name="image"
          content="https://lh3.googleusercontent.com/pw/AL9nZEWIr8u1k-M4cRypDty47o_kE3THboG5pM9r3cRt_Wtxi0qt0CcfRnCMnKHc4SDQUz-mK5ScOM2DhenE1e6d3mElc1V22ZKuntrIEoHM1Wdtzbgo75nFsy_gK5IFXCSMHW2WclKDkTjAbMvPvVmgTYo=w1219-h650-no?authuser=0"
        />
        {/*<!-- Google / Search Engine Tags -->*/}

        {/*<!-- Facebook Meta Tags -->*/}
        <meta
          property="og:title"
          content="Mojo Business Group S.C."
        />
        <meta property="og:site_name" content="Wadaf Mining" />
        <meta
          property="og:description"
          content="Mojo Business Group S.C."
        />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/pw/AL9nZEWIr8u1k-M4cRypDty47o_kE3THboG5pM9r3cRt_Wtxi0qt0CcfRnCMnKHc4SDQUz-mK5ScOM2DhenE1e6d3mElc1V22ZKuntrIEoHM1Wdtzbgo75nFsy_gK5IFXCSMHW2WclKDkTjAbMvPvVmgTYo=w1219-h650-no?authuser=0"
        />
        {/* Ammayu To be changed latter */}
        <meta property="og:url" content="https://wadafmining5.vercel.app/" />
        <meta property="og:type" content="website" />
        {/*<!-- Facebook Meta Tags -->*/}

        {/*<!-- Twitter Meta Tags -->*/}
        <meta
          name="twitter:title"
          content="Mojo Business Group S.C."
        />
        <meta
          name="twitter:description"
          content=" Mojo Business Group S.C."
        />
        {/* Ammayu To be changed */}
        <meta name="twitter:site" content="@Alex_Houseof308" />
        <meta
          name="twitter:image"
          content="https://lh3.googleusercontent.com/pw/AL9nZEWIr8u1k-M4cRypDty47o_kE3THboG5pM9r3cRt_Wtxi0qt0CcfRnCMnKHc4SDQUz-mK5ScOM2DhenE1e6d3mElc1V22ZKuntrIEoHM1Wdtzbgo75nFsy_gK5IFXCSMHW2WclKDkTjAbMvPvVmgTYo=w1219-h650-no?authuser=0"
        />
        <meta name="twitter:card" content="Mojo Business Group S.C" />
        {/*<!-- Twitter Meta Tags -->*/}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <link rel="icon" href="/Logo.png" /> */}
        {/* <link rel="icon" href="../assets/icons/Logo.png" /> */}
        
      </Head>

      <div>
        <Hero />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <Services />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <Products />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <Contact />
        </motion.div>
      </div>
    </>
  );
}
