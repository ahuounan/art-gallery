import React from 'react';
import { Screen } from 'components/Screen';
import { useYears } from 'store/years/hooks';

export const Years = () => {
  const years = useYears();
  return (
    <Screen>
      Years
      {years.map(year => (
        <div key={year}>{year}</div>
      ))}
    </Screen>
  );
};
