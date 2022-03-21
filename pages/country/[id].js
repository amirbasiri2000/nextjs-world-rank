import Layout from '../../components/layout/Layout';
import styles from './country.module.css';
import Image from 'next/image';

const Country = ({ country }) => {
    const test = country.languages;
    const test2 = Object.values(test);
    const languages = test2.map(item =>item).join(",");
    console.log(languages)
  return (
    <Layout title={country.name.common}>
      <div>
        <div className={styles.overview_panel}>
          <Image
            src={country.flags.svg}
            width={600}
            height={500}
            alt={country.name.common}
            
          />
          <h1 className={styles.overview_name}>{country.name.common}</h1>
          <div className={styles.overview_region}>{country.region}</div>
        </div>
        <div className={styles.overview_numbers}>
            <div className={styles.overview_population}>
                <div className={styles.overview_value}>{country.population}</div>
                <div className={styles.overview_label}>Population</div>
            </div>
            <div className={styles.overview_area}>
                <div className={styles.overview_value}>{country.area}</div>
                <div>Area</div>
            </div>
        </div>

        <div className={styles.details_panel}>
            <h4 className={styles.details_panel_haeading}>Details</h4>

            <div className={styles.details_panel_row}>
                <div className={styles.details_panel_label}>Capital</div>
                <div className={styles.details_panel_value}>{country.capital}</div>
            </div>

            <div className={styles.details_panel_row}>
                <div className={styles.details_panel_label}>SubRegion</div>
                <div className={styles.details_panel_value}>{country.subregion}</div>
            </div>

            <div className={styles.details_panel_row}>
                <div className={styles.details_panel_label}>Languages</div>
                <div className={styles.details_panel_value}>{languages}</div>
            </div>

            <div className={styles.details_panel_row}>
                <div className={styles.details_panel_label}>Gini</div>
                <div className={styles.details_panel_value}>{Object.values(country.gini)}%</div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.id}`);
  const country = await res.json();

  return {
    props: {
      country: country[0],
    },
  };
};
