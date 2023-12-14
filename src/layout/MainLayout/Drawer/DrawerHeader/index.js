import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/Logo';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Logo/>
        <h1 style={{fontFamily : 'serif', fontSize: "35px", color : 'rgb(100 100 100)', textShadow : "2px 2px rgb(200 200 200)"}}>Perf SYS</h1>
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
