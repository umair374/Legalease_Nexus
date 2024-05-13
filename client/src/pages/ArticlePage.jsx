import React from "react";
import { Navbar, Articles, Footer } from "../components";

const ArticlePage = ({ articles }) => {
  return (
    <div>
      <Navbar />
      <Articles />
      <Footer />
    </div>
  );
};

export default ArticlePage;
