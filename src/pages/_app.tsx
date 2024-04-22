import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/global.css"; // Assuming this is your global CSS file

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://justgetvisible.com/" />
        {/* Replace "https://yourwebsite.com" with your actual canonical URL */}
        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="Just Get Visible: Award Winning Web Design Agency in London"
        />
        <meta
          property="og:description"
          content="Just Get Visible is an award-winning London-based web design agency, serving clients from start-ups to recognised brands for over 10 years."
        />
        <meta
          property="og:image"
          content="https://justgetvisible.com/wp-content/uploads/2024/04/Social-Banner.png"
        />{" "}
        {/* Replace with your OG image URL */}
        <meta property="og:url" content="https://justgetvisible.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:site_name" content="Just Get Visible Ltd" />
        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@site" />
        <meta name="twitter:creator" content="@handle" />
        {/* Optionally, you can add more Twitter Card metadata here */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
