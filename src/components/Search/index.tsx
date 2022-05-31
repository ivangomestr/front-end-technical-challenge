import TextField from '@mui/material/TextField';
import styles from './styles.module.scss';
import { SearchProps } from '../../interfaces/props';

export function Search({ filter }: SearchProps) {
  return (
    <div className={styles.container}>
      <TextField
        fullWidth
        label="Pesquisar"
        variant="filled"
        size="small"
        onChange={(e) => filter(e.target.value)}
      />
    </div>
  );
}