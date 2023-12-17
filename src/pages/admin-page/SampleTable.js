import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSamples } from 'actions/sample';
import { deleteSample } from 'actions/sample';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ShowAddDialog from './ShowAddDialog';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgb(200 200 200)',
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

const SampleTable = ({ getSamples, deleteSample }) => {
  const { t } = useTranslation();
  const samples_state = useSelector((state) => state.sample.samples);
  const [samples, setSamples] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState();
  const handleClickOpen = (id) => {
    setOpen(true);
    setId(id);
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    getSamples();
  }, [getSamples]);
  React.useEffect(() => {
    setSamples(samples_state);
  }, [samples_state]);
  const handleOk = (id) => {
    deleteSample(id);
    handleClose();
  }
  return (
    <TableContainer component={Paper} sx={{marginTop: "20px"}}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">{t('Factory')}</StyledTableCell>
            <StyledTableCell align="center">{t('Customer')}</StyledTableCell>
            <StyledTableCell align="center">{t('Owner')}</StyledTableCell>
            <StyledTableCell align="center">{t('Operation')}</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody align="center">
          {samples.length > 0 ? (
            samples.map((sample) => (
              <StyledTableRow key={sample._id}>
                <StyledTableCell component="th" align="center" scope="row">
                  {sample.factory}
                </StyledTableCell>
                <StyledTableCell align="center">{sample.customer}</StyledTableCell>
                <StyledTableCell align="center">{sample.owner}</StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton edge="end" aria-label="comments" onClick={(e) => handleClickOpen(sample._id)}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <h3 style={{ color: 'rgb(150 150 150)' }}>{t('SearchResult')}</h3>
          )}
        </TableBody>
      </Table>
      <ShowAddDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} content={t('AddLetter')} handleOk={(e) => handleOk(id)} />
    </TableContainer>
  );
};
SampleTable.propTypes = {
  getSamples: PropTypes.func.isRequired,
  deleteSample: PropTypes.func.isRequired
};
export default connect(null, { getSamples, deleteSample })(SampleTable);
