import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/core';
import Axios from 'axios';
import Results from './Results';
import Toolbar from './Toolbar';
import IMEIService from '../../services/IMEIService';
import Notification from '../Notification';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    overflow: 'hidden',
  },
  toolBar: {
    margin: theme.spacing(1),
  },
}));

const Transactions = () => {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  const [noData, setNoData] = React.useState([]);
  const [imeis, setImeis] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalImeis, setTotalImeis] = React.useState([]);
  const [page, setPage] = useState(0);
  const [searchIMEI, setSearchIMEI] = React.useState('');
  const [notify, setNotify] = React.useState({
    isOpen: false,
    message: '',
    type: '',
    horizontal: 'top',
    vertical: 'center',
  });

  const headCells = [
    {
      id: 'id',
      label: 'ID',
      minWidth: 50,
      align: 'right',
    },
    {
      id: 'eventName',
      label: 'Event Name',
      minWidth: 200,
    },
    ,
    {
      id: 'eventType',
      label: 'Event Type',
      minWidth: 200,
    },
    {
      id: 'description',
      label: 'Description',
      minWidth: 170,
    },
    {
      id: 'createdDate',
      label: 'Created Date',
      minWidth: 100,
    },
    {
      id: 'updatedDate',
      label: 'Modified Date ',
      minWidth: 100,
    },

    {
      id: 'actions',
      label: 'Actions',
      minWidth: 170,
    },
  ];

  function getAllIMEIs(page, rowsPerPage) {
    IMEIService.getEvents(++page, rowsPerPage).then((res) => {
      console.log(res);
      setImeis(res.data.data.content);
      setTotalImeis(res.data.data.totalElements);
    });
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    getAllIMEIs(newPage, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(event.target.value);
    getAllIMEIs(page, event.target.value);
  };

  const handleClickSearch = () => {
    IMEIService.searchKeywordInEvent(searchIMEI, 1, 10).then((res) => {
      if (res.data) {
        console.log(res);
        setImeis(res.data.data.content);
        setTotalImeis(res.data.data.totalElements);
      } else {
        setImeis([]);
      }
    });
  };

  const handleRefresh = () => {
    getAllIMEIs(0, 10);
    setSearchIMEI('');
  };

  React.useEffect(() => {
    getAllIMEIs(page, rowsPerPage);
  }, [page, rowsPerPage]);

  return (
    <div className={classes.root}>
      <Container fixed>
        <div
          className={classes.toolBar}
          style={{ paddingTop: 0, paddingLeft: 20 }}
        >
          <Toolbar
            headCells={headCells}
            page={page}
            rowsPerPage={rowsPerPage}
            getAllRates={() => getAllIMEIs(page, rowsPerPage)}
            setNotify={setNotify}
            notify={notify}
            handleClickSearch={handleClickSearch}
            searchIMEI={searchIMEI}
            setSearchIMEI={setSearchIMEI}
            handleRefresh={handleRefresh}
          />
        </div>
        <div style={{ paddingTop: 50, paddingLeft: 20 }}>
          <Results
            transactions={imeis}
            headCells={headCells}
            noData={noData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            totalImeis={totalImeis}
            setNotify={setNotify}
            notify={notify}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            getAllRates={() => getAllIMEIs(page, rowsPerPage)}
          />
        </div>
      </Container>
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
};

export default Transactions;
