// /* eslint-disable react/jsx-one-expression-per-line */
// import React, { useState } from 'react';

// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import { useStores } from '../hooks/useStores';
// import usePagination from '../hooks/usePagination';

// export function Paginations({_data, }) {
//   const { stores } = useStores()
//   const [page, setPage] = useState(1);
  
//   const PER_PAGE = 5

//   let totalPages = Math.ceil(stores.length / PER_PAGE);

//   const _DATA = usePagination(stores);

//   const handleChange = (e, p) => {
//     setPage(p);
//     _DATA.jump(p);
//   };



//   return (
//     <Stack spacing={2}>
//       <Pagination count={totalPages} page={page} onChange={handleChange} />
//     </Stack>
//   );
// }

export function Pagination() {}