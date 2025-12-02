import React from 'react';
import TopBar from '../Components/TopBar';
import Header from '../Sections/Header'; // Your existing resizable navbar

const MainHeader = () => {
  return (
    <>
      {/* This TopBar will scroll with the page content */}
      <TopBar />

      {/* This Header will now be sticky and appear below the TopBar */}
      <Header />
    </>
  );
};

export default MainHeader;