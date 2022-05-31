import styles from './styles.module.scss';

import { BillingFilter } from '../../BillingFilter';
import { Search } from '../../components/Search';
import { StoreTable } from '../../components/StoreTable';

export function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.storesContainer}>
        <Search />
        <StoreTable />
      </div>

      <BillingFilter />
    </div>
  );
}
