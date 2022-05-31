/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export function Paginations() {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
