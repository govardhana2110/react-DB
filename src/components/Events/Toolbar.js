import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Button,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
  Grid,
  Box,
  Tooltip,
  IconButton,
} from '@mui
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons/Search';
import SettingsEthernetIcon from '@mui/icons/SettingsEthernet';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentOutlinedIcon from '@mui/icons/AssignmentOutlined';
import Table from '@muible';
import TableBody from '@muibleBody';
import TableCell from '@mui/core/TableCell';
import TableContainer from '@mui/core/TableContainer';
import TableHead from '@mui/core/TableHead';
import TableRow from '@mui/core/TableRow';
import AddIcon from '@mui/icons-material/Add';
import AddDialogComponent from '../AddDialogComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
  headerLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 137,
    fontWeight: 'bold',
    color: 'black',
  },
  newButton: {
    textTransform: 'none',
    backgroundColor: '#32a2a8',
    color: 'white',
    height: '80%',
    width: '100%',
    fontSize: 12,
  },
}));

const Toolbar = ({
  className,
  searchData,
  headCells,
  page,
  notify,
  setNotify,
  rowsPerPage,
  getAllRates,
  handleClickSearch,
  handleRefresh,
  setSearchIMEI,
  searchIMEI,
  ...rest
}) => {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = React.useState(false);

  // Will use this array when adding entries
  const headersWithoutDates = headCells.filter(
    (headCell) =>
      headCell.id !== 'createdDate' &&
      headCell.id !== 'updatedDate' &&
      headCell.id !== 'actions',
  );

  const handleCloseAdd = () => {
    setOpenAdd(false);
    getAllRates(page, rowsPerPage);
  };

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={9} style={{ paddingTop: 50, paddingLeft: 35 }}>
        <Grid xs={7}>
          <Table size="small" aria-label="a dense table" style={{ width: 300 }}>
            <TableRow>
              <TableCell
                style={{
                  paddingTop: 6,
                  paddingLeft: 0,
                  paddingRight: 0,
                  borderBottom: 0,
                  width: 30,
                }}
              >
                <AssignmentOutlinedIcon
                  style={{ color: '#d43546', fontSize: 35 }}
                />
              </TableCell>
              <TableCell
                style={{
                  paddingTop: 10,
                  paddingLeft: 0,
                  paddingRight: 0,
                  width: 150,
                  borderBottom: 0,
                  verticalAlign: 'top',
                }}
              >
                <Typography className={classes.headerLabel}>Events</Typography>
              </TableCell>
            </TableRow>
          </Table>
        </Grid>
        <Grid style={{ marginLeft: 50 }}>
          <Tooltip title="Add Rate" arrow>
            <Button
              onClick={() => handleClickOpenAdd()}
              type="submit"
              size="medium"
              startIcon={<AddIcon />}
              style={{
                backgroundColor: '#3471ad',
                color: '#FFFFFF',
                fontSize: 13,
                fontWeight: 'bold',
                marginRight: 10,
                // width: 120,
                height: 34,
                textTransform: 'none',
              }}
            >
              New Event
            </Button>
          </Tooltip>
          <AddDialogComponent
            type="event"
            setNotify={setNotify}
            notify={notify}
            labels={headersWithoutDates}
            open={openAdd}
            onClose={handleCloseAdd}
            details={{}}
          />
        </Grid>
        <Grid style={{ marginTop: 6 }}>
          <TextField
            size="small"
            fullWidth
            value={searchIMEI}
            onChange={(e) => setSearchIMEI(e.target.value)}
            InputProps={{
              style: { height: '29px', fontSize: 12 },
            }}
            placeholder="Search by Keyword"
            variant="outlined"
          />
        </Grid>
        <Grid style={{ paddingLeft: 0, marginLeft: -3, marginTop: -8 }}>
          <PageviewIcon
            onClick={handleClickSearch}
            style={{ fontSize: 50, color: '#d15b47' }}
          />
        </Grid>
        <Grid style={{ paddingLeft: 0 }}>
          <RefreshRoundedIcon
            onClick={handleRefresh}
            style={{ fontSize: 30, color: 'green' }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
};

export default Toolbar;
