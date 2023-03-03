import * as React from 'react';
import {
  Grid,
  Table,
  TableRow,
  TableCell,
  Button,
  Tooltip,
  Typography,
  TextField,
} from '@mui/material';
import { useRouter } from 'next/router';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import PageviewIcon from '@mui/icons-material/Pageview';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

function Toolbar(props) {
  const { addLabels } = props;

  const navigate = useRouter();

  return (
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
              <SettingsIcon style={{ color: '#d43546', fontSize: 35 }} />
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
              <Typography
                sx={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}
              >
                GLID Configurations
              </Typography>
            </TableCell>
          </TableRow>
        </Table>
      </Grid>
      <Grid style={{ marginLeft: 70 }}>
        <Tooltip title="Add GLID" arrow>
          <Button
            type="submit"
            size="medium"
            onClick={() =>
              navigate.push('/add/glid', {
                state: {
                  type: 'glid',
                  addLabels: { addLabels },
                  returnPath: '/config/glid',
                },
              })
            }
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
            New GLID
          </Button>
        </Tooltip>
      </Grid>
      <Grid style={{ marginTop: 6 }}>
        <TextField
          size="small"
          fullWidth
          InputProps={{
            style: { height: '29px', fontSize: 12 },
          }}
          placeholder="Search by Keyword"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-notchedOutline legend': { display: 'none' },
          }}
        />
      </Grid>
      <Grid style={{ paddingLeft: 0, marginLeft: -3, marginTop: -8 }}>
        <PageviewIcon style={{ fontSize: 50, color: '#d15b47' }} />
      </Grid>
      <Grid style={{ paddingLeft: 0 }}>
        <RefreshRoundedIcon style={{ fontSize: 30, color: 'green' }} />
      </Grid>
    </Grid>
  );
}

export default Toolbar;
