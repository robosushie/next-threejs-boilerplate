import React from 'react';

import SEO from 'src/components/seo';

export default function IndexPage() {
  return (
    <React.Fragment>
      <SEO />
      <div className="text-5xl w-screen h-screen font-bold flex flex-col justify-center items-center">
        <div>Hi !!</div>
        <div>Welcome to Next-ThreeJS Template</div>
      </div>
    </React.Fragment>
  );
}
