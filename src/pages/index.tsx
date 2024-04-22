import Head from "next/head";
import styles from "../styles/index.module.css";
import tabletImg from "../../public/img/bg_video.jpg";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer";
import OurWorkComponent from "../../components/ourWorkComponent";
import PrincipalSection from "../../components/principalSection";
import WhatWeComponent from "../../components/whatWeComponent";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Just Get Visible: Award Winning Web Design Agency in London
        </title>
        {/* Meta Description */}
        <meta
          name="description"
          content="Just Get Visible is an award-winning London-based web design agency, serving clients from start-ups to recognised brands for over 10 years."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PrincipalSection
          img="duronic.jpg"
          title="Studio Rel"
          text=""
          href="#"
        />
        <div className={styles.wedo}>
          <div className={styles.wedoContainer}>
            <h2 className={styles.h2}>what we do</h2>
            <div className={styles.wedoContainerCont}>
              <div>
                <WhatWeComponent
                  img="duronic.jpg"
                  title="Studio Rel"
                  text=""
                  href="#"
                />
                <WhatWeComponent
                  img="duronic.jpg"
                  title="Studio Rel"
                  text=""
                  href="#"
                />
                <WhatWeComponent
                  img="duronic.jpg"
                  title="Studio Rel"
                  text=""
                  href="#"
                />
                <WhatWeComponent
                  img="duronic.jpg"
                  title="Studio Rel"
                  text=""
                  href="#"
                />
                <WhatWeComponent
                  img="duronic.jpg"
                  title="Studio Rel"
                  text=""
                  href="#"
                />
                <WhatWeComponent
                  img="duronic.jpg"
                  title="Studio Rel"
                  text=""
                  href="#"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ourWork}>
          <div className={styles.ourWorkContainer}>
            <h2 className={styles.h2}>OUR WORK</h2>
            <div>
              <OurWorkComponent
                img="duronic.jpg"
                title="Studio Rel"
                text=""
                href="#"
              />
              <OurWorkComponent
                img="duronic.jpg"
                title="Duronic"
                text=""
                href="#"
              />
              <OurWorkComponent
                img="duronic.jpg"
                title="RCI SCOUT App"
                text=""
                href="#"
              />
              <OurWorkComponent
                img="duronic.jpg"
                title="Ingubo APP"
                text=""
                href="#"
              />
              <OurWorkComponent
                img="duronic.jpg"
                title="Franzos"
                text=""
                href="#"
              />
              <OurWorkComponent
                img="duronic.jpg"
                title="sk food"
                text=""
                href="#"
              />
            </div>
            <div className={styles.portafolio}>
              <Link href="/portafolio">more project</Link>
            </div>
          </div>
        </div>
        <div className={styles.clients}>
          <div className={styles.clientCont}>
            <h2 className={styles.h2}>OUR CLIENTS</h2>
            <div className={styles.imgCont}>
              <div>
                <Image
                  className={styles.img}
                  src={require("../../public/img/network-rail-logo.svg")}
                  alt="logo"
                />
              </div>
              <div>
                <Image
                  className={styles.img}
                  src={require("../../public/img/Duronic_Logo.svg")}
                  alt="logo"
                />
              </div>
              <div>
                <Image
                  className={styles.img}
                  src={require("../../public/img/total-tech-logo.svg")}
                  alt="logo"
                />
              </div>
              <div>
                <Image
                  className={styles.img}
                  src={require("../../public/img/goobie-logo.svg")}
                  alt="logo"
                />
              </div>
              <div>
                <Image
                  className={styles.img}
                  src={require("../../public/img/rcilogo.png")}
                  alt="logo"
                />
              </div>
              <div>
                <Image
                  className={styles.img}
                  src={require("../../public/img/IC-logo.svg")}
                  alt="logo"
                />
              </div>
              <div>
                <Image
                  className={styles.img}
                  src={require("../../public/img/franzos-logo-2.svg")}
                  alt="logo"
                />
              </div>
              <div>
                <Image
                  className={styles.img}
                  src={require("../../public/img/oin-logo.svg")}
                  alt="logo"
                />
              </div>
              <div>
                <Image
                  className={styles.img}
                  src={require("../../public/img/Ams-Logo-1.svg")}
                  alt="logo"
                />
              </div>
              <div>
                <Image
                  className={styles.img}
                  src={require("../../public/img/clarke-chapman-logo2.svg")}
                  alt="logo"
                />
              </div>
              <div>
                <Image
                  className={styles.img}
                  src={require("../../public/img/SK-Foods-logo-1.svg")}
                  alt="logo"
                />
              </div>
              <div>
                <Image
                  className={styles.img}
                  src={require("../../public/img/ethixbase-logo.svg")}
                  alt="logo"
                />
              </div>
              {/* Add more client logos as needed */}
            </div>
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.aboutCont}>
            <h2 className={styles.h2}>ABOUT US</h2>
            <div className={styles.infocont}>
              <div className={styles.fistCont}>
                <div>
                  <p className={styles.text}>
                    We blend strategic and creative insights, collaborating
                    throughout the design and development process to create
                    captivating user experiences that stand the test of time.
                  </p>
                  <p className={styles.text}>
                    In today’s competitive markets, we prioritize delivering
                    value through high-performance websites, strategic insights,
                    and a practical approach, empowering your business to gain a
                    competitive edge.
                  </p>
                  <div className={styles.contact}>
                    <div>CONTACT US TODAY</div>
                  </div>
                </div>
              </div>
              <div className={styles.secondCont}>
                <div>
                  <p className={styles.text}>
                    We deliver websites to businesses seeking tangible results.
                    In a knowledge-driven economy, our team is our most valuable
                    resource. We prioritise and nurture their expertise,
                    boasting decades of senior-level experience.
                  </p>
                  <p className={styles.text}>
                    We partner with ambitious businesses discerning between good
                    and excellent, prioritizing value delivery through critical
                    thinking, creativity, and innovation.
                  </p>
                  <p className={styles.text}>
                    Our personal service allows us to take your ideas and
                    identify the right solutions to maximise your online
                    presence and get you noticed.
                  </p>
                </div>
              </div>
              <div className={styles.imgCont}>
                <div>
                  <Image className={styles.img} src={tabletImg} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
