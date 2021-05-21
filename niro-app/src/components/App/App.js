import React from 'react';
import Nav from '../Nav';
import TopSection from '../TopSection';
import FeatureSection from '../FeatureSection';

function App() {
  return (
    <>
      <div className="app app-margin-bottom">
        <Nav />
        <TopSection />
      </div>
        <FeatureSection />
    </>
  );
}

export default App;
