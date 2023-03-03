import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Divider,
  Grid,
  Typography,
  IconButton,
  Tooltip,
  Badge,
  makeStyles,
} from '@mui/styles';

import AccountCircleIcon from '@mui/icons/AccountCircle';
import ExitToAppIcon from '@mui/icons/ExitToApp';
import Table from '@mui/core/Table';
import TableBody from '@mui/core/TableBody';
import TableCell from '@mui/core/TableCell';
import TableContainer from '@mui/core/TableContainer';
import TableHead from '@mui/core/TableHead';
import TableRow from '@mui/core/TableRow';
import NotificationsActiveIcon from '@mui/icons/NotificationsActive';
import Logo from '../components/Logo';

const useStyles = makeStyles({
  root: { backgroundColor: '#DFDCE3' },
  toolbar: {
    height: 60,
    backgroundColor: '#163e63',
  },
  notify: {
    fontSize: 23,
    fontWeight: 600,
    color: '#400015',
    marginTop: 10,
    marginLeft: -80,
  },
  welcome: { fontSize: 13, fontWeight: 600, color: '#FFFFFF' },
  menu: { fontSize: 15, fontWeight: 600, color: '#180047' },
  logout: { fontSize: 14, fontWeight: 600, color: '#180047' },
});

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar elevation={0} {...rest} position="fixed">
      <Toolbar className={classes.toolbar} variant="dense">
        <Table size="small" aria-label="a dense table" style={{ padding: 0 }}>
          <TableRow>
            <TableCell style={{ padding: 0, borderBottom: 'none' }} padding={0}>
              <Logo />
            </TableCell>
            <TableCell
              align="left"
              style={{ padding: 0, borderBottom: 'none', width: '60%' }}
            >
              {/* <RouterLink to="/" style={{ textDecoration: 'none' }}> */}
              <Typography
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: 22,
                  paddingTop: 5,
                }}
              >
                IRP
              </Typography>
              {/* </RouterLink> */}
            </TableCell>
            {/* <TableCell align="left" style={{padding:0,borderBottom: "none"}}>
              <Tooltip title="Notifications" arrow>
                <>
                  <IconButton color="inherit">
                    <Typography className={classes.welcome}>
                      Alerts : 5
                    </Typography>
                    <Badge style={{ color: "white",paddingLeft:10 }}>
                      <NotificationsActiveIcon />
                    </Badge>
                  </IconButton>
                </>
              </Tooltip>
            </TableCell> */}
            <TableCell align="left" style={{ borderBottom: 'none' }}>
              <Tooltip title="Welcome" arrow>
                <>
                  <IconButton color="inherit">
                    <Typography className={classes.welcome}>
                      Welcome,&nbsp;&nbsp; Admin
                    </Typography>
                    <Badge style={{ color: 'white', paddingLeft: 10 }}>
                      <AccountCircleIcon />
                    </Badge>
                  </IconButton>
                </>
              </Tooltip>
            </TableCell>
            <TableCell style={{ padding: 0, borderBottom: 'none' }}>
              <Tooltip title="Logout" arrow>
                <IconButton color="inherit">
                  <Typography
                    variant="h5"
                    size="small"
                    className={classes.logout}
                    style={{
                      fontWeight: 'bold',
                      fontSize: 12,
                      marginRight: 0,
                      color: '#FFFFFF',
                    }}
                  >
                    Logout
                  </Typography>
                  &nbsp;
                  <Badge style={{ color: 'white' }}>
                    <ExitToAppIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </Table>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
