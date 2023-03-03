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
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import IMEIService from '../../services/IMEIService';

function EditEntry(props) {
    let location = useLocation();
    let navigate = useNavigate();

    const [updatedData,setUpdatedData] = React.useState(location.state.data.data);

    let pageTitle = "Edit Existing ";
    
    const type = location.state.type;

    let data = Object.keys(location.state.data).map((key) => location.state.data[key])[0];

    if(type === "glid") {
        pageTitle += "GLID";
    } else if(type === "discount") {
        pageTitle += "Discount";
    } else if(type === "package") {
        pageTitle += "Package";
    } else if(type === "bundle") {
        pageTitle += "Bundle";
    }

    // Event handler for every individual text field
    const handleInputChange = (event) => {
        setUpdatedData({
            ...updatedData,
            [event.target.id]: event.target.value
        });
    } 

    const handleSelectChange = (event,child) => {
        setUpdatedData({
            ...updatedData,
            [child.props.id]: event.target.value
        });
    }

    // Event handler used to edit an existing entry inside the appropriate table
    const handleSubmit = () => {
        // Create a PUT request to the backend API here depending on the type

        if(type === "discount") {
            IMEIService.updateDiscount(updatedData,updatedData.id);
        }

        navigate(location.state.returnPath);
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
                            <EditRoundedIcon
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
                        location.state.editLabels.editLabels.map((label) => (
                            label.input_type === "text" ? (
                                <TextField
                                    margin="dense"
                                    id={label.id}
                                    label={label.title}
                                    multiline={label.id === "description"}
                                    rows={5}
                                    fullWidth
                                    onChange={handleInputChange}
                                    defaultValue={updatedData[label.id]}
                                    required
                                />
                            ) : (label.input_type === "select" ? (
                                <TextField
                                    margin="dense"
                                    select
                                    id={label.id}
                                    label={label.title}
                                    name={label.title}
                                    defaultValue={updatedData[label.id]}
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
                        Update
                    </Button>
                </Stack>
            </Box>
        </Grid>
    );
}

export default EditEntry;