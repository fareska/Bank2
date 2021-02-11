import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';


const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const generateColumns = (rows, props) => {
    let columns = []
    let keys = Object.keys(rows[0])
    for (let i = 0; i < keys.length; i++) {
        const col = { field: keys[i], headerName: capitalize(keys[i]), width: 160 }
        columns.push(col)
    }
    columns[3].renderCell = (params) => (
        <strong>
            {params.value}
            <Button
                onClick={() => props.deleteTran(params.value)}
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                >
                Delete
              </Button>
        </strong>
    )

    return columns
}

export default function Trans(props) {
    
    
    let rows = [...props.transactions]
    rows.forEach((r, i) => r.id = i)

    let columns = generateColumns(rows, props)
    return (

        <div style={{ height: 400, width: '100%' }}>
            <DataGrid icons={'add'}
                rows={rows}
                columns={columns}
                pageSize={5}
                
            />
        </div>
    );
}