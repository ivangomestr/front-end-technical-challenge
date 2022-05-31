import styles from './styles.module.scss';

import { BillingFilter } from '../../BillingFilter';
// import { Search } from '../../components/Search';
import { StoreTable } from '../../components/StoreTable';
import { Paginations } from '../../components/Pagination';
import { Mapsp } from '../../Maps';

export function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.storesContainer}>
        {/* <Search /> */}
        <StoreTable />
        <Paginations />
      </div>

      <div className={styles.billingContainer}>
        <BillingFilter />
        <Mapsp />
      </div>
    </div>
  );
}
