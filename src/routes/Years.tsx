import React from 'react';
import { Screen } from 'components/Screen';
import { useYears } from 'store/years/hooks';
import { Link } from 'react-router-dom';

export const Years = () => {
  const years = useYears();
  return (
    <Screen>
      Years
      {years.map(year => (
        <Link to={`/year/${year}`} key={year}>
          {year}
        </Link>
      ))}
    </Screen>
  );
};
