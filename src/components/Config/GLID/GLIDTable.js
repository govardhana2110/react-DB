import * as React from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Typography,
  Tooltip,
  IconButton,
} from '@mui/material';
import { useRouter } from 'next/router';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import IMEIService from '../../../services/IMEIService';

function GLIDTable(props) {
  const { headers, editLabels, dataHeaders } = props;

  const [glids, setGLIDs] = React.useState([]);
  const [totalGLIDs, setTotalGLIDs] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const navigate = useRouter();

  function getAllGLIDS(page, rowsPerPage) {
    IMEIService.getGLIDs(++page, rowsPerPage).then((res) => {
      setGLIDs(res.data);
      setTotalGLIDs(glids.length);
    });
  }

  React.useEffect(() => {
    getAllGLIDS(page, rowsPerPage);
  }, [page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);

    // Call the API for GET request here for the new page
    getAllGLIDS(newPage, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);

    // Call the API for GET request here for the new rows per page
    getAllGLIDS(page, rowsPerPage);
  };

  const handleViewMore = (glid) => {
    // Call the API for a GET request by ID here to get that particular entry

    navigate.push('/view/glid', {
      state: { type: 'glid', data: { glid }, returnPath: '/config/glid' },
    });
  };

  const handleEdit = (glid) => {
    // Call the API for a GET request by ID here to get that particular entry

    navigate.push('/edit/glid', {
      state: {
        type: 'glid',
        editLabels: { editLabels },
        data: { glid },
        returnPath: '/config/glid',
      },
    });
  };

  return (
    <>
      <Table size="small" sx={{ width: 1080 }}>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell
                key={header.id}
                align={header.align}
                style={{
                  minWidth: header.minWidth,
                  paddingTop: 5,
                  fontWeight: 'bold',
                  paddingBottom: 5,
                  whiteSpace: 'nowrap',
                }}
              >
                {header.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {glids.length > 0 ? (
            glids.map((glid) => (
              <TableRow hover key={glid.id}>
                {dataHeaders.map((header) => (
                  <TableCell key={header.id} align={header.align}>
                    {header.id === 'type'
                      ? glid[header.id].join(',')
                      : glid[header.id]}
                  </TableCell>
                ))}
                <TableCell>
                  <Tooltip title="View" arrow>
                    <IconButton
                      style={{
                        color: '#999194',
                      }}
                      size="small"
                      onClick={() => handleViewMore(glid)}
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
                      onClick={() => handleEdit(glid)}
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
        count={totalGLIDs}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10, 20, 50, 100]}
        sx={{
          mr: 22,
          '& .MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows':
            {
              fontWeight: 'bold',
              fontSize: 12,
              pt: 2,
            },
          '& 	.MuiTablePagination-select': {
            fontWeight: 'bold',
            fontSize: 12,
            color: 'green',
          },
        }}
        SelectProps={{
          MenuProps: {
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            PaperProps: {
              sx: {
                '& .MuiMenuItem-root': {
                  padding: 0.75,
                  fontWeight: 'bold',
                  color: 'green',
                  fontSize: 12,
                  display: 'flex',
                  justifyContent: 'center',
                },
              },
            },
          },
        }}
      />
    </>
  );
}

export default GLIDTable;
