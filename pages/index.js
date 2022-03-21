import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout/Layout';
import SearchInput from '../components/searchInput/SearchInput';
import styles from '../styles/Home.module.css';
import CountriesTable from '../components/countriesTable/CountriesTable';
import { useState } from 'react';

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState('');

  const filteredDirections = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(keyword) ||
      country.region?.toLowerCase().includes(keyword) ||
      country.subregion?.toLowerCase().includes(keyword)
  );
  const onInputChangea = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <Layout>
      <div className={styles.counts}> Found {countries.length} countries </div>
      <SearchInput
        placeholder="Filter by Name, Region or subRegion"
        onChange={onInputChangea}
      />
      <CountriesTable countries={filteredDirections} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
