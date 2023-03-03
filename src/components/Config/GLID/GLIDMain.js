import * as React from 'react';
import {
    Grid
} from '@mui/material';
import Toolbar from './Toolbar';
import GLIDTable from './GLIDTable';

const tableHeaders = [
    {
        id: "glId",
        title: "GL ID",
        minWidth: 50,
        align: "right",
        input_type: "text"
    },
    {
        id: "descr",
        title: "Description",
        minWidth: 170,
        input_type: "text"
    },
    {
        id: "type",
        title: "GL Type",
        minWidth: 100,
        input_type: "text"
    },
    {
        id: "createdT",
        title: "Created Time",
        minWidth: 100
    },
    {
        id: "modT",
        title: "Modified Time",
        minWidth: 100
    },
    {
        id: "actions",
        title: "Actions",
        minWidth: 100
    }
];

const modifiableHeaders = tableHeaders.filter((tableHeader) => (
    tableHeader.id !== "created_time" && tableHeader.id !== "updated_time" && tableHeader.id !== "actions"
));

const actionlessHeaders = tableHeaders.filter((tableHeader) => (
    tableHeader.id !== "actions"
));

function GLIDMain(props) {
    // const glids = [
    //     {
    //         gl_id: 1,
    //         description: "Test description",
    //         gl_type: 0,
    //         created_time: "238384738723",
    //         updated_time: "233242343223"
    //     }
    // ];

    return (
        <div style={{minHeight: '100%',overflow: 'hidden'}}>
            <Grid sx={{px: 10,pt: 5,pb: 0}}>
                <Toolbar addLabels={modifiableHeaders} />
            </Grid>
            <Grid sx={{pt: 3,px: 5}}>
                <GLIDTable headers={tableHeaders} editLabels={modifiableHeaders} dataHeaders={actionlessHeaders} />
            </Grid>
        </div>
    );
}

export default GLIDMain;