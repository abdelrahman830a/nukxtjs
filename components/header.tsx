import React, { useEffect, useState } from "react";
import styles from "../src/styles/header.module.css";
import Image from "next/image";
import gifLogo from "../public/img/logo_pencil_05.gif";
import Link from "next/link";

const Header: React.FC = () => {
  const [openList, setOpenList] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 860);
      // Set openList based on screen width, but only if it's on mobile
      if (window.innerWidth < 860) {
        setOpenList(false);
      }
    };

    handleResize(); // Call handleResize initially

    // Verifica si window está definido (solo en el navegador)
    if (typeof window !== "undefined") {
      // Agrega el listener de resize solo si window está definido
      window.addEventListener("resize", handleResize);

      // Limpia el evento cuando el componente se desmonta
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logo}>
          <div id="animation_container">
            <Image
              className={styles.img}
              src={gifLogo}
              alt="logo"
              width={136}
              height={174}
            />
            <div id="dom_overlay_container"></div>
          </div>
        </div>
        <div className={styles.newLogo}>new project?</div>
      </div>
      <nav
        className={`${styles.navMenu} ${open ? "" : styles.closeItem} ${
          openList ? styles.openList : ""
        }`}>
        <ul>
          <li className={styles.item}>
            <Link
              href="https://new.justgetvisible.com"
              className={styles.itemLink}></Link>
          </li>
          <li className={styles.item}>
            <Link
              href="https://justgetvisible.com"
              className={styles.itemLink}></Link>
          </li>
          <li className={styles.item}>
            <Link
              href="#"
              className={styles.itemLink}
              onClick={() => setOpenList(!openList)}>
              services
            </Link>
            <ul
              className={`${openList ? styles.openList : ""} ${
                styles.submenu
              }`}>
              <li>
                <Link href="https://justgetvisible.com/branding/">
                  {" "}
                  Branding
                </Link>
              </li>
              <li>
                <Link href="https://justgetvisible.com/website-design-development/">
                  {" "}
                  Web Design &amp; Development
                </Link>
              </li>
              <li>
                <Link href="https://justgetvisible.com/mobile-apps/">
                  {" "}
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="https://justgetvisible.com/seo/">
                  {" "}
                  SEO &amp; SMO
                </Link>
              </li>
              <li>
                <Link href="https://justgetvisible.com/website-hosting/">
                  {" "}
                  Website Hosting
                </Link>
              </li>
              <li>
                <Link href="https://justgetvisible.com/maintenance/">
                  {" "}
                  Website Maintenance
                </Link>
              </li>
              <li>
                <Link href="https://justgetvisible.com/animated-video/">
                  {" "}
                  Animation Videos
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <Link href="/" className={styles.itemLink}>
              work
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/" className={styles.itemLink}>
              news
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/" className={styles.itemLink}>
              contact
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/" className={styles.itemLink}>
              careers
            </Link>
          </li>
          <li
            className={`${styles.menuClose} ${open ? "" : styles.close}`}
            onClick={() => setOpen(!open)}>
            <div>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
