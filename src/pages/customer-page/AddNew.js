import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addOrder } from 'actions/order';
import { getFactories } from 'actions/factory';
import { getCustomers } from 'actions/customer';
import { getOwners } from 'actions/owner';
import { filterOrder } from 'actions/order';
import { getSamples } from 'actions/sample';
import { Grid, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShowAddDialog from './ShowAddDialog';
import SampleModal from './SampleDialog';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      maxwidth: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
};
const AddNew = ({ addOrder, getFactories, getCustomers, getOwners, filterOrder, getSamples }) => {
  const { t } = useTranslation();
  const customers_state = useSelector((state) => state.customer.customers); 
  const factories_state = useSelector((state) => state.factory.factories); 
  const owners_state = useSelector((state) => state.owner.owners);   
  const samples_state = useSelector((state) => state.sample.samples);
  const [customers, setCustomers] = React.useState(['']); 
  const [factories, setFactories] = React.useState(['']); 
  const [owners, setOwners] = React.useState(['']); 
  const [samples, setSamples] = React.useState(['']);

  //----------------Add new modal display-----------------//
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //------------------Add sample modal display-------------------//
  const [modal, setModal] = React.useState(false);
  const handleSampleOpen = () => {
    setModal(true);
  }
  const handleSampleClose = () => {
    setModal(false);
  }
 //--------------------Add Order------------------------//
  const [formData, setFormData] = useState({
    orderPO: '',
    factory: '',
    customer: '',
    owner: '',
    completionDate: '',
    readyDate: '',
    qScore: '',
    cScore: '',
    pScore: ''
  });
  const { orderPO, factory, customer, owner, completionDate, readyDate } = formData;
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleChange_C = (newValue) => setFormData({ ...formData, completionDate: newValue });
  const handleChange_R = (newValue) => setFormData({ ...formData, readyDate: newValue });
  const handleOk = (e) => {
    e.preventDefault();
    addOrder(formData);
    handleClose();
  };
  //---------------------------factories customers owners items----------------------------//
  React.useEffect(() => {
    getCustomers();
  }, [getCustomers]);
  React.useEffect(() => {
    setCustomers(customers_state);
  }, [customers_state]);
  React.useEffect(() => {
    getFactories();
  }, [getFactories]);
  React.useEffect(() => {
    setFactories(factories_state);
  }, [factories_state]);
  React.useEffect(() => {
    getOwners();
  }, [getOwners]);
  React.useEffect(() => {
    setOwners(owners_state);
  }, [owners_state]);
  React.useEffect(() => {
    getSamples();
  }, [getSamples]);
  React.useEffect(() => {
    setSamples(samples_state);
  }, [samples_state]);
  //------------------filter order----------------------//
  const userID = useSelector((state) => state.auth.user);
  const [filter_order, setFilterOrder] = useState();
  const handleChangeSearch = (e) => {
    setFilterOrder(e.target.value);
  };
  const handleEnter = (event) => {
    if (event?.key !== 'Enter') {
      return;
    }
    console.log('userID', userID);
    filterOrder(filter_order, userID._id);
  };

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75} marginTop="5px">
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between" rowSpacing={4.5}>
          <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="center" rowSpacing={4.5}>
              <Grid item xs={12} md={12} lg={1.7}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ background: 'rgb(170,170,170)' }}
                  startIcon={<ShoppingBasketIcon />}
                  onClick={handleClickOpen}
                >
                  {t('AddNew')}
                </Button>
              </Grid>
              <Grid item xs={12} md={12} lg={1.7}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ background: 'rgb(170,170,170)' }}
                  startIcon={<ListAltIcon />}
                  onClick={handleSampleOpen}
                >
                  {t('ChooseSample')}
                </Button>
              </Grid>
              <Grid item xs={12} md={12} lg={8}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <TextField
                    id="standard-search"
                    label={t('SearchOrder')}
                    type="search"
                    onChange={handleChangeSearch}
                    onKeyPress={handleEnter}
                    variant="standard"
                  ></TextField>
                  <SearchIcon sx={{ mr: 1, my: 0.5 }} />
                </Box>
              </Grid>
            </Grid>
            <ShowAddDialog
              open={open}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
              content={t('AddLetter')}
              handleOk={handleOk}
            />
            <SampleModal
              open={modal}
              handleClose={handleSampleClose}
              addOrder = {addOrder}
              data = {samples}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={1}>
            <TextField
              id="outlined-search"
              label={`${t('EnterOrder')}`}
              type="search"
              name="orderPO"
              value={orderPO}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ fontSize: '15px' }}>
                {t('SelectFactory')}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="factory"
                value={factory}
                MenuProps={MenuProps}
                label="Select Factory"
                onChange={handleChange}
              >
                {factories.map((factory_it) => {
                  return (
                    <MenuItem id={factory_it._id} value={factory_it.factory}>
                      {factory_it.factory}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12} lg={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ fontSize: '15px' }}>
                {t('SelectCustomer')}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="customer"
                value={customer}
                MenuProps={MenuProps}
                label="Select Customer"
                onChange={handleChange}
              >
                {customers.map((customer_it) => {
                  return (
                    <MenuItem id={customer_it._id} value={customer_it.customer}>
                      {customer_it.customer}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12} lg={1}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ fontSize: '15px' }}>
                {t('SelectOwner')}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="owner"
                value={owner}
                MenuProps={MenuProps}
                label="Select Customer"
                onChange={handleChange}
              >
                {owners.map((owner_it) => {
                  return (
                    <MenuItem id={owner_it._id} value={owner_it.owner}>
                      {owner_it.owner}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid container item xs={12} md={3} lg={3} alignItems="center" justifyContent="Left">
            <Grid item xs={12} md={12} lg={5}>
              <div>{t('OrderCompletionDate')}</div>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={handleChange_C} value={completionDate} />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid container item xs={12} md={2} lg={2} alignItems="center" justifyContent="Left">
            <Grid item xs={12} md={12} lg={3}>
              <div>{t('ReadyDate')}</div>
            </Grid>
            <Grid item xs={12} md={12} lg={8}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={handleChange_R} value={readyDate} />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
AddNew.propTypes = {
  addOrder: PropTypes.func.isRequired,
  getFactories: PropTypes.func.isRequired,
  getCustomers: PropTypes.func.isRequired,
  getOwners: PropTypes.func.isRequired,
  filterOrder: PropTypes.func.isRequired,
  getSamples: PropTypes.func.isRequired
};
export default connect(null, { addOrder, getFactories, getCustomers, getOwners, filterOrder, getSamples })(AddNew);
