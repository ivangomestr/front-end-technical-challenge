import TextField from '@mui/material/TextField';
import { useStores } from '../hooks/useStores';
import styles from './styles.module.scss';

export function BillingFilter() {
  const { setSearch } = useStores()


  return (
    <div className={styles.container}>
      <TextField
        fullWidth
        label="Faturamento mínimo esperado"
        variant="filled"
        size="small"
        type="number"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
