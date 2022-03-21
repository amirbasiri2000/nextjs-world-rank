import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styles from './SearchInput.module.css';


const SearchInput = ({...rest}) => {
  return (
    <div className={styles.wrapper}>
      <SearchRoundedIcon color="inherit"/>
      <input className={styles.input} {...rest} type="text" />
    </div>
  );
};

export default SearchInput;
