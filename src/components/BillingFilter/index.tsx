import TextField from '@mui/material/TextField';
import styles from './styles.module.scss';

export function BillingFilter() {
  return (
    <div className={styles.container}>
      <TextField
        fullWidth
        label="Faturamento mínimo esperado"
        variant="filled"
        size="small"
      />
    </div>
  );
}
