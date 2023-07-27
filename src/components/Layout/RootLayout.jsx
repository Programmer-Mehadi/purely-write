import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
export const metadata = {
  title: "Purely Write",
  description: "A simple blog app with Next.js and TailwindCSS",
};
const RootLayout = ({ children }) => {
  return (
    <section>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </section>
  );
};

export default RootLayout;
