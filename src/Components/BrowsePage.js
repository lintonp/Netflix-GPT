import React from "react";
import Header from "./Header";
import Body from "./Body";

const BrowsePage = () => {
  return (
    <div className="flex flex-col bg-gray-700 h-screen">
      <Header />
      <Body />
    </div>
  );
};

export default BrowsePage;
