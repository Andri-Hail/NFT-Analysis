import React from 'react';
// import sections
import Intro from '../components/sections/Intro';
import Graphs from '../components/sections/Graphs';
import Conclusion from '../components/sections/Conclusion';
import Datasources from '../components/sections/Datasources';
import EDA from '../components/sections/EDA';

const Home = () => {

  return (
    <>
      {/* NFT collection info */}
      <Intro className="illustration-section-01" />
      {/* Where our data is from */}
      <Datasources topDivider />
      {/* EDA */}
      <EDA invertMobile topDivider imageFill className="illustration-section-02" />

      {/* Charts and ETC*/}
      <Graphs />
      {/* Conclusion*/}

      <Conclusion invertMobile topDivider imageFill className="illustration-section-02" />

    </>
  );
}

export default Home;