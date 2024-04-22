import React from "react";
import Image from "next/image";
import styles from "../src/styles/footer.module.css";
import logoImage from "../public/img/ico-022.png";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftoption}>
          <Image
            className={styles.img}
            src={logoImage}
            alt="logo"
            width={70}
            height={60}
          />
          <div>
            <div className={styles.linkList}>
              <Link href="index.html" className={styles.link}>
                Services
              </Link>
              <Link href="index.html" className={styles.link}>
                work
              </Link>
              <Link href="index.html" className={styles.link}>
                news
              </Link>
              <Link href="index.html" className={styles.link}>
                contact
              </Link>
            </div>
            <span className={styles.copyrigth}>
              © 2024 Just Get Visible Ltd, Company Registered in England &
              Wales: 09882516
            </span>
          </div>
        </div>
        <div className={styles.rightoption}>
          <div className={styles.linkList}>
            <Link href="index.html" className={styles.link}>
              follow us on
            </Link>
            <Link href="index.html" className={styles.link}>
              facebook
            </Link>
            <Link href="index.html" className={styles.link}>
              Linkedin
            </Link>
          </div>
          <div className={styles.copyLsCont}>
            <span className={styles.copyrigth}>
              5 Clarendon Road, London, N22 6XJ
            </span>
            <span className={styles.copyrigth}>0208 058 8852</span>
            <span className={styles.copyrigth}>info@justgetvisible.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
