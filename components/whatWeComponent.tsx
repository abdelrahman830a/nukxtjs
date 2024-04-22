import React from "react";
import styles from "../src/styles/whatWeComponent.module.css";

interface OurWorkInfoProps {
  img: string;
  title: string;
  text: string;
  href: string;
}

const WhatWeComponent: React.FC<OurWorkInfoProps> = ({
  img,
  title,
  text,
  href,
}) => {
  // Construye la URL completa de la imagen usando require() de manera dinámica
  return (
    <div className={styles.WhatWeComponent}>
      <div className={styles.WhatWeComponentContainer}>
        <span className={styles.wraphover}>
          <span></span>
        </span>
        <div className={styles.infoCont}>
          <p>
            <span className={styles.h1}>Branding</span>
            <span className={styles.text}>
              We create engaging brand identities and strategies that help them
              connect with their target customers.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeComponent;
