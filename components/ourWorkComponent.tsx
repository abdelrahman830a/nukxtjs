import React from "react";
import styles from "../src/styles/OurWorkInfoProps.module.css";
import Link from "next/link";

interface OurWorkInfoProps {
  img: string;
  title: string;
  text: string;
  href: string;
}

const OurWorkComponent: React.FC<OurWorkInfoProps> = ({
  img,
  title,
  text,
  href,
}) => {
  // Construye la URL completa de la imagen usando require() de manera dinámica
  return (
    <div className={styles.OurWorkComponent}>
      <div className={styles.imgCont}>
        <i></i>
        <div className={styles.infoCont}>
          <span className={styles.spanInfoCont}>
            <span className={styles.portfolio__box_txt}>
              <h2
                data-fontsize="30"
                data-lineheight="44px"
                className={styles.h2}>
                {title}
              </h2>
              <h3
                data-fontsize="16"
                data-lineheight="24px"
                className={styles.h3}>
                Mobile app for a real estate property investment company
                <br />
                <br />
                <u>UI &amp; UX Design</u>&nbsp;&nbsp;&nbsp;<u>Mobile App</u>
              </h3>
            </span>
          </span>
        </div>
      </div>
      <div className={styles.btnBox}>
        <p>{title}</p>
      </div>
      <div className={styles.linkBox}>
        <Link href={`/portfolio-items/${href}`}>View</Link>
      </div>
    </div>
  );
};

export default OurWorkComponent;
