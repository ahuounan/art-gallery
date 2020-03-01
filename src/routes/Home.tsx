import React from 'react';
import { Link } from 'react-router-dom';

import { Screen } from 'components/Screen';

export const Home = () => {
  return (
    <Screen>home
      <Link to="search">Search</Link>
    </Screen>
  )
}
