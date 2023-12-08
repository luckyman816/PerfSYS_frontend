import * as React from 'react';
import AdminTable from './AdminTable';
import FactoryTable from './FactoryTable';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FactoryIcon from '@mui/icons-material/Factory';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
// material-ui
import { Grid, Button, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import CustomerTable from './CustomerTable';
import OwnerTable from './OwnerTable';
import InviteModal from './InviteModal';
import { useSelector } from 'react-redux';
import ShowSnackbar from 'layout/Component/alert';
import { useTranslation } from 'react-i18next';
import { SUCESS_LOGIN_LETTER, SUCESS_TYPE } from 'actions/types';
// ==============================|| CUSTOMER PAGE ||============================== //

const DashboardDefault = () => {
  const { t } = useTranslation();
  const [open_alert, setOpenAlert] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const loading = useSelector(state => state.auth.loading)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOpenAlert(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} md={12} lg={12}>
          <MainCard sx={{ mt: 2 }} content={false}>
            <Typography variant="h4" color="textSecondary" style={{ marginLeft: '10px' }}>
              <div
                style={{
                  margin: '10px 20px 10px 20px',
                  color: 'rgb(0,170,250)',
                  fontFamily: 'initial',
                  fontSize: '30px',
                  textShadow: '1px 1px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <GroupIcon />
                {t('InvitedUsers')}
                <Button variant="contained" startIcon={<PersonAddIcon />} onClick={handleClickOpen}>
                  {t('Invite')}
                </Button>
                <InviteModal open={open} handleClose={handleClose} handleOk={handleClickOpen} />
              </div>
            </Typography>
            <AdminTable />
          </MainCard>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <MainCard sx={{ mt: 2 }} content={false}>
            <Typography variant="h4" color="textSecondary" style={{ marginLeft: '10px' }}>
              <div
                style={{
                  margin: '10px 10px 10px 10px',
                  color: 'rgb(0,170,250)',
                  fontFamily: 'initial',
                  fontSize: '25px',
                  textShadow: '1px 1px',
                  display: 'flex',
                  width: '8vw',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <FactoryIcon />
                {t('Factory')}
              </div>
            </Typography>
            <FactoryTable />
          </MainCard>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <MainCard sx={{ mt: 2 }} content={false}>
            <Typography variant="h4" color="textSecondary" style={{ marginLeft: '10px' }}>
              <div
                style={{
                  margin: '10px 10px 10px 10px',
                  color: 'rgb(0,170,250)',
                  fontFamily: 'initial',
                  fontSize: '25px',
                  textShadow: '1px 1px',
                  display: 'flex',
                  width: '8vw',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <SentimentVerySatisfiedIcon />
                {t('Customer')}
              </div>
            </Typography>
            <CustomerTable />
          </MainCard>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <MainCard sx={{ mt: 2 }} content={false}>
            <Typography variant="h4" color="textSecondary" style={{ marginLeft: '10px' }}>
              <div
                style={{
                  margin: '10px 10px 10px 10px',
                  color: 'rgb(0,170,250)',
                  fontFamily: 'initial',
                  fontSize: '25px',
                  textShadow: '1px 1px',
                  display: 'flex',
                  width: '8vw',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <DirectionsWalkIcon />
                {t('Owner')}
              </div>
            </Typography>
            <OwnerTable />
          </MainCard>
        </Grid>
      </Grid>
      {
        loading ? <ShowSnackbar open={open_alert} content={SUCESS_LOGIN_LETTER} type={SUCESS_TYPE} /> : <></>
      }
      
    </>
  );
};

export default DashboardDefault;
