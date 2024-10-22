

import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "../styles/main.css";
import "../styles/font-face.css";
import "../styles/overwrite.css";
/* import "../styles/servicesPage.css"; */
import "../styles/style-pageservices.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Widget from "@/components/Widget";
import Script from "next/script";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
          <head>

        </head>
      <body >
    
       <Navbar/>
        {children}
        <Widget/>
        <Footer/>
       
        <Script src="https://code.jquery.com/jquery-1.12.4.min.js"  integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossOrigin="anonymous"/>
       
        <Script src="/lib/all.js" strategy="lazyOnload"/> 
     
        <Script src="/lib/main.js"  strategy="lazyOnload"/>
      </body>
    </html>
  );
}
