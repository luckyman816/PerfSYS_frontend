import * as React from 'react';
import OrderTable from './OrdersTable';
import AddNew from './AddNew';
// material-ui
import { Grid,  } from '@mui/material';
import MainCard from 'components/MainCard';
// ==============================|| CUSTOMER PAGE ||============================== //
const DashboardDefault = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} md={12} lg={12}>
        <AddNew />
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrderTable  />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
