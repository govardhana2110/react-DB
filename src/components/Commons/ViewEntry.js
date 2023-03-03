import * as React from 'react';
import {
    Grid,
    Stack,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Typography,
    Button
} from '@mui/material';
import {
    useNavigate,
    useLocation
} from 'react-router-dom';
import PreviewRoundedIcon from '@mui/icons-material/PreviewRounded';

function ViewEntry(props) {
    let navigate = useNavigate();
    let location = useLocation();

    let pageTitle = " Information";

    const type = location.state.type;

    if(type === "glid") {
        pageTitle = "GLID" + pageTitle;
    } else if(type === "discount") {
        pageTitle = "Discount" + pageTitle;
    } else if(type === "package") {
        pageTitle = "Package" + pageTitle;
    } else if(type === "bundle") {
        pageTitle = "Bundle" + pageTitle;
    }

    return (
        <Grid sx={{px: 7,pt: 2,pb: 0}}>
            <Grid xs={9}>
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
                            <PreviewRoundedIcon
                                style={{ color: "#d43546", fontSize: 35 }}
                            />
                        </TableCell>
                        <TableCell
                            style={{
                                paddingTop: 10,
                                paddingLeft: 0,
                                paddingRight: 0,
                                width: 150,
                                borderBottom: 0,
                                verticalAlign: "top",
                            }}
                        >
                            <Typography sx={{ fontSize: 18, fontWeight: "bold", color: "#000", }}>
                                {pageTitle}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </Table>
            </Grid>
            <Stack sx={{mt: 5}}>
                <Table size="large" sx={{width: '100%'}}>
                    <TableHead>
                            <TableCell align="center" style={{paddingTop: 5,fontWeight: 'bold',paddingBottom: 5,whiteSpace: "nowrap"}}>
                                Headers
                            </TableCell>
                            <TableCell align="center" style={{paddingTop: 5,fontWeight: 'bold',paddingBottom: 5,whiteSpace: "nowrap"}}>
                                Details
                            </TableCell>
                    </TableHead>
                    <TableBody>
                        {
                            Object.keys(location.state.data).map((key) => {
                                let viewInfo = location.state.data[key];

                                return Object.keys(viewInfo).map((viewInfoKey) => {
                                    let viewInfoKeyMod = viewInfoKey.split("_");

                                    for(var i = 0;i < viewInfoKeyMod.length;i++) {
                                        viewInfoKeyMod[i] = viewInfoKeyMod[i].charAt(0).toUpperCase() + viewInfoKeyMod[i].slice(1);
                                    }

                                    let modViewInfo = viewInfoKeyMod.join(" ");

                                    return (
                                        <TableRow>
                                            <TableCell key={viewInfoKey} align="center">
                                                {modViewInfo}
                                            </TableCell>
                                            <TableCell key={viewInfo[viewInfoKey]} align="center">
                                                {viewInfo[viewInfoKey]}
                                            </TableCell>
                                        </TableRow>
                                    );
                                });
                            })
                        }
                    </TableBody>
                </Table>
            </Stack>
            <Stack direction="row" sx={{ml: 120,mt: 5}}>
                <Button size="medium" variant="contained" color="error" sx={{fontWeight: "bold",fontSize: 15}} onClick={() => navigate(location.state.returnPath)}>
                    Return
                </Button>
            </Stack>
        </Grid>
    );
}

export default ViewEntry;