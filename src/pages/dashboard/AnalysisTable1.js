import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTranslation } from 'react-i18next';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgb(170, 170, 170)',
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

const AnalysisTable1 = (props) => {
  const { t } = useTranslation();
  const [analysisData, setAnalysisData] = useState(props.data);
  React.useEffect(() => {
    setAnalysisData(props.data);
  }, [props.data]);
  return (
    <TableContainer component={Paper} style={{ fontSize: '20px' }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">{t('Order')} PO#</StyledTableCell>
            <StyledTableCell align="center">{t('Factory')}</StyledTableCell>
            <StyledTableCell align="center">{t('Customer')}</StyledTableCell>
            <StyledTableCell align="center">{t('Owner')}</StyledTableCell>
            <StyledTableCell align="center">{t('CompletionDate')}</StyledTableCell>
            <StyledTableCell align="center">{t('ReadyDate')}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody align="right">
          {analysisData.length ? (
            analysisData?.map((it) => (
              <StyledTableRow key={it._id}>
                <StyledTableCell align="center" component="th" scope="row">
                  {it.orderPO}
                </StyledTableCell>
                <StyledTableCell align="center">{it.factory}</StyledTableCell>
                <StyledTableCell align="center">{it.customer}</StyledTableCell>
                <StyledTableCell align="center">{it.owner}</StyledTableCell>
                <StyledTableCell align="center">{it.completionDate?.split('T')[0]}</StyledTableCell>
                <StyledTableCell align="center">{it.readyDate?.split('T')[0]}</StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <h4 style={{ fontFamily: 'serif', color: 'rgb(150 150 150)' }}>{t('NoStatisticalData')}</h4>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default AnalysisTable1;
