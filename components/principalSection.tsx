import React from "react";
import styles from "../src/styles/principalSection.module.css";
import Header from "./header";
interface PrincipalInfoProps {
  img: string;
  title: string;
  text: string;
  href: string;
}

const PrincipalSection: React.FC<PrincipalInfoProps> = ({
  img,
  title,
  text,
  href,
}) => {
  return (
    <section className={styles.principaCont}>
      <div className={styles.container}>
        <Header />
        <i className="pattern-11"></i>
      </div>

      <div className={styles.fistCont}>
        <i className="bg__color"></i>
        <div className={styles.backImg}></div>
        <div className={styles.infoTitle}>
          <div className={styles.infoCont}>
            <span>
              <h3 className={styles.litleTitle}>
                the internet has become over-crowded
              </h3>
            </span>
            <h2>
              <p>STAND out</p>
              <p>from the</p>
              <p>crowd</p>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalSection;
