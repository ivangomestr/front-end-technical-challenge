import styles from './styles.module.scss';

import { BillingFilter } from '../../components/BillingFilter';
// import { Search } from '../../components/Search';
import { StoreTable } from '../../components/StoreTable';
import { Mapsp } from '../../components/Maps';

export function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.storesContainer}>
        {/* <Search /> */}
        <StoreTable />
      </div>

      <div className={styles.billingContainer}>
        <BillingFilter />
        <Mapsp />
      </div>
    </div>
  );
}
