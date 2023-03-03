import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
  Tooltip,
  Dialog,
  DialogContent,
  Typography,
  Button,
} from '@mui/core';
import { makeStyles } from '@mui;
import VisibilityOutlinedIcon from '@mui/icons/VisibilityOutlined';
// import ViewMore from "./ViewMore";
import VisibilityIcon from '@mui/icons/Visibility';
import SendIcon from '@mui/icons/Send';
import EditIcon from '@mui/icons/Edit';
import AddDialogComponent from '../AddDialogComponent';
import ViewDialogComponent from '../ViewDialogComponent';
import UpdateDialogComponent from '../UpdateDialogComponent';
import IMEIService from '../../services/IMEIService';

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  avatar: {
    marginRight: theme.spacing(2),
  },
  dataCell: {
    fontSize: 12,
    fontWeight: '500',
  },
  headCell: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#001b68',
  },
  imageResend: {
    width: 18,
    height: 18,
  },
  imageView: {
    width: 25,
    height: 25,
  },
  noDataTypo: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: theme.spacing(-30),
    borderBottom: 0,
    marginRight: -1000,
    marginTop: 10,
  },
  caption: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  pageinput: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'green',
  },
  pagemenu: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'green',
  },
}));

const DataGrid = ({
  className,
  transactions,
  headCells,
  page,
  rowsPerPage,
  handleChangePage,
  notify,
  setNotify,
  totalImeis,
  handleChangeRowsPerPage,
  getAllRates,
  ...rest
}) => {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [openView, setOpenView] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState({});

  // Will use this array when editing entries
  const headersWithoutDates = headCells.filter(
    (headCell) =>
      headCell.id !== 'createdDate' &&
      headCell.id !== 'updatedDate' &&
      headCell.id !== 'actions',
  );

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
    getAllRates(page, rowsPerPage);
  };

  const handleClickOpenUpdate = (id) => {
    IMEIService.getEventById(id).then((res) => {
      setSelectedRow(res.data.data);
      setOpenUpdate(true);
    });
  };

  const handleCloseView = () => {
    setOpenView(false);
  };

  const handleClickOpenView = (id) => {
    IMEIService.getEventById(id).then((res) => {
      setSelectedRow(res.data.data);
      setOpenView(true);
    });
  };

  return (
    <>
      <Table size="small" style={{ width: 1080 }}>
        <TableHead>
          <TableRow>
            {headCells.map((column) => (
              <TableCell
                key={column.id}
                style={{
                  minWidth: column.minWidth,
                  paddingTop: 5,
                  fontWeight: 'bold',
                  paddingBottom: 5,
                  whiteSpace: 'nowrap',
                }}
              >
                {column.label}
              </TableCell>
            ))}

            {/* <TableCell className={classes.headCell}>Reason</TableCell> */}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.length > 0 ? (
            transactions.map((imei, idx) => (
              <TableRow hover key={imei.id}>
                <TableCell
                  className={classes.dataCell}
                  style={{ fontWeight: 'bold' }}
                >
                  {++idx}
                </TableCell>
                <TableCell
                  className={classes.dataCell}
                  style={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}
                >
                  {imei.eventName}
                </TableCell>
                <TableCell
                  className={classes.dataCell}
                  style={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}
                >
                  {imei.eventType}
                </TableCell>
                <TableCell
                  className={classes.dataCell}
                  style={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}
                >
                  {imei.description}
                </TableCell>
                <TableCell
                  className={classes.dataCell}
                  style={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}
                >
                  {imei.createdDate}
                </TableCell>
                <TableCell
                  className={classes.dataCell}
                  style={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}
                >
                  {imei.updatedDate}
                </TableCell>

                <TableCell>
                  <Tooltip title="View" arrow>
                    <IconButton
                      style={{
                        color: '#999194',
                      }}
                      size="small"
                      onClick={() => handleClickOpenView(imei.id)}
                    >
                      <VisibilityIcon
                        style={{ color: 'green', fontSize: 25 }}
                      />
                    </IconButton>
                  </Tooltip>
                  &nbsp; &nbsp;
                  <Tooltip title="Edit" arrow>
                    <IconButton
                      style={{
                        color: '#999194',
                      }}
                      size="small"
                      onClick={() => handleClickOpenUpdate(imei.id)}
                    >
                      <EditIcon style={{ color: '#b53b38', fontSize: 25 }} />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell align="center" colSpan="8" style={{ borderBottom: 0 }}>
                <Typography
                  align="center"
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    paddingTop: 20,
                    paddingBottom: 10,
                    color: '#d15b47',
                    borderBottom: '#e0e0e0 solid 1px',
                  }}
                >
                  No Data Available
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={totalImeis}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10, 20, 50, 100]}
        style={{ marginRight: 170 }}
        classes={{
          toolbar: classes.toolbar,
          caption: classes.caption,
          input: classes.pageinput,
          menuItem: classes.pagemenu,
        }}
      />
      <ViewDialogComponent
        type="event"
        open={openView}
        value={selectedRow}
        tableHeaders={headCells.slice(0, headCells.length - 1)}
        onClose={handleCloseView}
      />
      <UpdateDialogComponent
        type="event"
        notify={notify}
        setNotify={setNotify}
        open={openUpdate}
        value={selectedRow}
        labels={headersWithoutDates}
        onClose={handleCloseUpdate}
      />
    </>
  );
};

DataGrid.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired,
  rows: PropTypes.string,
  headCells: PropTypes.array.isRequired,
  rowsPerPage: PropTypes.string,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
};

export default DataGrid;
