import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFactories } from 'actions/factory';
import { getCustomers } from 'actions/customer';
import { getOwners } from 'actions/owner';
import { addSample } from 'actions/sample';
import { Grid, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SearchIcon from '@mui/icons-material/Search';
import ShowAddDialog from './ShowAddDialog';
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

const AddSample = ({ getFactories, getCustomers, getOwners, addSample }) => {
  const { t } = useTranslation();
  const customers_state = useSelector((state) => state.customer.customers); // eslint-disable-line
  const factories_state = useSelector((state) => state.factory.factories); // eslint-disable-line
  const owners_state = useSelector((state) => state.owner.owners); // es
  const [customers, setCustomers] = React.useState(['']); // eslint-disable-line
  const [factories, setFactories] = React.useState(['']); // eslint-disable-line
  const [owners, setOwners] = React.useState(['']); // esl
  //Add new modal display//
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [sampleData, setSampleData] = useState({
    factory: '',
    customer: '',
    owner: ''
  });
  const { factory, customer, owner } = sampleData;
  const handleChange = (e) => setSampleData({ ...sampleData, [e.target.name]: e.target.value });
  const handleOk = (e) => {
    e.preventDefault();
    addSample(sampleData);
    handleClose();
  };
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
  const handleChangeSearch = () => {

  }
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75} marginTop="5px">
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-around" rowSpacing={4.5}>
          <Grid item xs={12} md={12} lg={2}>
            <Button
              variant="contained"
              color="success"
              sx={{ background: 'rgb(170,170,170)' }}
              startIcon={<ListAltIcon />}
              onClick={handleClickOpen}
            >
              {t('AddSample')}
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={2}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField
                id="standard-search"
                label={t('SearchOrder')}
                type="search"
                onChange={handleChangeSearch}
                variant="standard"
              ></TextField>
              <SearchIcon sx={{ mr: 1, my: 0.5 }} />
            </Box>
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
                label="Select Customer"
                MenuProps={MenuProps}
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
          <Grid item xs={12} md={12} lg={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ fontSize: '15px' }}>
                {t('SelectOwner')}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="owner"
                value={owner}
                label="Select Customer"
                MenuProps={MenuProps}
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
        </Grid>
      </Grid>
      <ShowAddDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} content={t('AddLetter')} handleOk={handleOk} />
    </Grid>
  );
};
AddSample.propTypes = {
  getFactories: PropTypes.func.isRequired,
  getCustomers: PropTypes.func.isRequired,
  getOwners: PropTypes.func.isRequired,
  addSample: PropTypes.func.isRequired
};
export default connect(null, { getFactories, getCustomers, getOwners, addSample })(AddSample);
