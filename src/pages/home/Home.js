import React from 'react';

import styles from '../../styles/tailwind';

const home = () => {
  return (
    <div>
      <h1 className={`${styles.heroHeading} bg-red-500`}>Home </h1>
    </div>
  );
};

export default home;
