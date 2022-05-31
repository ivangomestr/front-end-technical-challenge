import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useStores } from '../hooks/useStores';
import styles from './styles.module.scss';

export function Search() {
  const { stores, setStores } = useStores();
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    const storesFiltered = stores.filter((store) => {
      if (search === '') {
        // if query is empty
        return store;
      }
      if (store.name.toLowerCase().includes(search.toLowerCase())) {
        // returns filtered array
        return store;
      }
    });
    
    console.log(storesFiltered)
    setStores(storesFiltered);
  };

  // useEffect(() => {
  //   handleSearch();
  // }, [search]);

  return (
    <div className={styles.container}>
      <TextField
        fullWidth
        label="Pesquisar"
        variant="filled"
        size="small"
        onChange={setSearch}
      />
    </div>
  );
}
