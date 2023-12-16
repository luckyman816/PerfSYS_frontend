import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/Logo';
import { Margin } from '../../../../../node_modules/@mui/icons-material/index';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Logo/>
        <Stack direction="column" spacing={0} alignItems="center">
          <h1 style={{fontFamily : 'serif', fontSize: "35px", color : 'rgb(100 100 100)', textShadow : "2px 2px rgb(200 200 200)", marginBottom: 0}}>Perf SYS </h1>
          <h5 style={{fontFamily : 'serif', fontSize: "18px", color : 'rgb(100 100 100)', textShadow : "2px 2px rgb(200 200 200)", margin: 0}}>Performance</h5>
        </Stack>
        
        
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
