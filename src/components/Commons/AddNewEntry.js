import * as React from 'react';
import {
    Box,
    Grid,
    Stack,
    Button,
    Table,
    TableRow,
    TableCell,
    TextField,
    Typography,
    MenuItem
} from '@mui/material';
import {
    useLocation,
    useNavigate
} from 'react-router-dom';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import IMEIService from '../../services/IMEIService';

function AddNewEntry(props) {

    const [details,setDetails] = React.useState({});

    let location = useLocation();
    let navigate = useNavigate();

    let pageTitle = "Add New ";

    const type = location.state.type;

    // Event handler for every individual text field
    const handleInputChange = (event) => {
        setDetails({
            ...details,
            [event.target.id]: event.target.value
        })
    } 

    const handleSelectChange = (event,child) => {
        setDetails({
            ...details,
            [child.props.id]: event.target.value
        });
    }

    // Event handler used to create a new entry inside the appropriate table
    const handleSubmit = () => {
        // Create a POST request to the backend API here depending on the type
        if(type === "discount") {
            IMEIService.createDiscount(details);
        }
        
        navigate(location.state.returnPath);
    }

    React.useEffect(() => {
        location.state.allAtributes.allAtributes.map((attribute) => {

            setDetails((details) => (
                {
                    ...details,
                    [attribute.id]: ""
                }
            ));
        });
    },[]);

    if(type === "glid") {
        pageTitle += "GLID";
    } else if(type === "discount") {
        pageTitle += "Discount";
    } else if(type === "package") {
        pageTitle += "Package";
    } else if(type === "bundle") {
        pageTitle += "Bundle";
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
                            <AddCircleRoundedIcon
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
            <Box component="form" onSubmit={handleSubmit}>
                <Stack>
                    {
                        location.state.addLabels.addLabels.map((label) => (
                            label.input_type === "text" ? (
                                <TextField
                                    margin="dense"
                                    id={label.id}
                                    label={label.title}
                                    multiline={label.id === "description"}
                                    rows={5}
                                    fullWidth
                                    onChange={handleInputChange}
                                    required
                                />
                            ) : (label.input_type === "select" ? (
                                <TextField
                                    margin="dense"
                                    select
                                    id={label.id}
                                    label={label.title}
                                    onChange={handleSelectChange}
                                    fullWidth
                                    required
                                >
                                    {
                                        label.options.map((option) => (
                                            <MenuItem id={label.id} key={option} value={option}>{option}</MenuItem>
                                        ))
                                    }
                                </TextField>
                            ) : null)
                        ))
                    }
                </Stack>
                <Stack direction="row" sx={{ml: 110,mt: 5}}>
                    <Button size="medium" variant="contained" color="error" sx={{fontWeight: "bold",fontSize: 15}} onClick={() => navigate(location.state.returnPath)}>
                        Cancel
                    </Button>
                    <Button type="submit" size="medium" variant="contained" color="success" sx={{ml: 2,fontWeight: "bold",fontSize: 15}}>
                        Create
                    </Button>
                </Stack>
            </Box>
        </Grid>
    );
}

export default AddNewEntry;