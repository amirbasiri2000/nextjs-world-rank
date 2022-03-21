import styles from './CountriesTable.module.css';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { useState } from 'react';
import NextLink from 'next/link';

const orderBy = (countries, value, direction) => {
  if (direction === 'asc') {
    return [...countries].sort((a, b) =>
      a[value] > b[value] ? 1 : -1
    );
  }
  if (direction === 'desc') {
    return [...countries].sort((a, b) =>
      a[value] > b[value] ? -1 : 1
    );
  }
  return countries;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }
  if (direction === 'desc') {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRoundedIcon color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRoundedIcon color="inherit" />
      </div>
    );
  }
};

const CountriesTable = ({ countries }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();
  const orderedCountries = orderBy(countries, value, direction );

  const switchDirection = () => {
    if (!direction) {
      setDirection('desc');
    } else if (direction === 'desc') {
      setDirection('asc');
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  return (
    <div>
      <div className={styles.heading}>
        <button
          onClick={() => setValueAndDirection('name')}
          className={styles.heading_name}
        >
          <div>Name</div>
          <SortArrow />
        </button>

        <button
          onClick={() => setValueAndDirection('population')}
          className={styles.heading_population}
        >
          <div>Population</div>
          <SortArrow direction={direction} />
        </button>
      </div>

      {orderedCountries.map((country) => (
        <NextLink href={`/country/${country.name.common}`} passHref key={country.name.common}>
          <div className={styles.row}>
            <div className={styles.name}>{country.name.common}</div>

            <div className={styles.population}>{country.population}</div>
          </div>

        </NextLink>
      ))}
    </div>
  );
};

export default CountriesTable;
