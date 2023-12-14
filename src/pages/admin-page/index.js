import * as React from 'react';
import AdminTable from './AdminTable';
import FactoryTable from './FactoryTable';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FactoryIcon from '@mui/icons-material/Factory';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
// material-ui
import { Grid, Button, Typography, Box } from '@mui/material';
import MainCard from 'components/MainCard';
import CustomerTable from './CustomerTable';
import OwnerTable from './OwnerTable';
import InviteModal from './InviteModal';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { filterUsers } from 'actions/auth';
import { filterFactory } from 'actions/factory';
import { filterCustomer } from 'actions/customer';
import { filterOwner } from 'actions/owner';
import PropTypes from 'prop-types';
import ShowSnackbar from 'layout/Component/alert';
import './admin-back.css';
import { TextField } from '../../../node_modules/@mui/material/index';
// ==============================|| CUSTOMER PAGE ||============================== //

const DashboardDefault = ({ filterUsers, filterFactory, filterCustomer, filterOwner }) => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const alertInfo = useSelector((state) => state.alert);
  const [filterValue, setFilterValue] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleEnter = (event) => {
    if (event?.key !== 'Enter') {
      return;
    }
    filterUsers(filterValue);
  };
  const handleChange = (e) => {
    setFilterValue(e.target.value);
  };
  // --------------factory item table filter--------//
  const [filter_factory, setFilterFactory] = React.useState('');
  const handleChange_f = (e) => {
    setFilterFactory(e.target.value);
  };
  const handleEnter_f = (event) => {
    if (event?.key !== 'Enter') {
      return;
    }
    filterFactory(filter_factory);
  };
  // --------------customer item table filter--------//
  const [filter_customer, setFilterCustomer] = React.useState('');
  const handleChange_c = (e) => {
    setFilterCustomer(e.target.value);
  };
  const handleEnter_c = (event) => {
    if (event?.key !== 'Enter') {
      return;
    }
    filterCustomer(filter_customer);
  };

  // --------------owner item table filter--------//
  const [filter_owner, setFilterOwner] = React.useState('');
  const handleChange_o = (e) => {
    setFilterOwner(e.target.value);
  };
  const handleEnter_o = (event) => {
    if (event?.key !== 'Enter') {
      return;
    }
    filterOwner(filter_owner);
  };
  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75} sx={{}}>
        <Grid item xs={12} md={12} lg={12}>
          <MainCard sx={{ mt: 2 }} content={false}>
            <Typography variant="h4" color="textSecondary" style={{ marginLeft: '10px' }}>
              <div
                style={{
                  margin: '2% 40% 2% 2%',
                  color: 'rgb(170,170,170)',
                  fontFamily: 'serif',
                  fontSize: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Grid item xs={12} md={12} lg={9}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <GroupIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="standard-search"
                    label={t('SearchUser')}
                    type="search"
                    onChange={handleChange}
                    onKeyPress={handleEnter}
                    variant="standard"
                  ></TextField>
                </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={3}>
                {t('InvitedUsers')}
                </Grid>
                
               
                {/* <Button
                  variant="contained"
                  sx={{ backgroundColor: 'rgb(200,200,200)' }}
                  startIcon={<PersonAddIcon />}
                  onClick={handleClickOpen}
                >
                  {t('Invite')}
                </Button> */}
                <InviteModal open={open} handleClose={handleClose} handleOk={handleClickOpen} />
              </div>
            </Typography>
            <AdminTable />
          </MainCard>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <MainCard sx={{ mt: 2 }} content={false}>
            <Typography variant="h4" color="textSecondary" style={{}}>
              <div
                style={{
                  margin: '10px 10px 10px 10px',
                  color: 'rgb(150 150 150)',
                  fontFamily: 'serif',
                  fontSize: '30px',
                  display: 'flex',
                  width: '15vw',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <FactoryIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="standard-search"
                    label={t('SearchFactory')}
                    type="search"
                    onChange={handleChange_f}
                    onKeyPress={handleEnter_f}
                    variant="standard"
                  ></TextField>
                </Box>
                {t('Factory')}
              </div>
            </Typography>
            <FactoryTable />
          </MainCard>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <MainCard sx={{ mt: 2 }} content={false}>
            <Typography variant="h4" color="textSecondary" style={{}}>
              <div
                style={{
                  margin: '10px 10px 10px 10px',
                  color: 'rgb(150 150 150)',
                  fontFamily: 'serif',
                  fontSize: '30px',
                  display: 'flex',
                  width: '15vw',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <SentimentVerySatisfiedIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="standard-search"
                    label={t('SearchCustomer')}
                    type="search"
                    onChange={handleChange_c}
                    onKeyPress={handleEnter_c}
                    variant="standard"
                  ></TextField>
                </Box>
                {t('Customer')}
              </div>
            </Typography>
            <CustomerTable />
          </MainCard>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <MainCard sx={{ mt: 2 }} content={false}>
            <Typography variant="h4" color="textSecondary" style={{}}>
              <div
                style={{
                  margin: '10px 10px 10px 10px',
                  color: 'rgb(150 150 150)',
                  fontFamily: 'serif',
                  fontSize: '30px',
                  display: 'flex',
                  width: '15vw',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <DirectionsWalkIcon sx={{ mr: 1, my: 0.5 }} />
                  <TextField
                    id="standard-search"
                    label={t('SearchOwner')}
                    type="search"
                    onChange={handleChange_o}
                    onKeyPress={handleEnter_o}
                    variant="standard"
                  ></TextField>
                </Box>
                {t('Owner')}
              </div>
            </Typography>
            <OwnerTable />
          </MainCard>
        </Grid>
      </Grid>
      <ShowSnackbar open={alertInfo[0]?.open} content={alertInfo[0]?.msg} type={alertInfo[0]?.alertType} />
    </>
  );
};
DashboardDefault.propTypes = {
  filterUsers: PropTypes.func.isRequired,
  filterFactory: PropTypes.func.isRequired,
  filterCustomer: PropTypes.func.isRequired,
  filterOwner: PropTypes.func.isRequired
};
export default connect(null, { filterUsers, filterFactory, filterCustomer, filterOwner })(DashboardDefault);
