import TextField from '@mui/material/TextField';
import styles from './styles.module.scss';

export function Search() {
  return (
    <div className={styles.container}>
      <TextField fullWidth label="Pesquisar" variant="filled" size="small" />
    </div>
  );
}
