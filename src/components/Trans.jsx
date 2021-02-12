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
    for (let i = 1; i < keys.length-1; i++) {
        const col = { field: keys[i], headerName: capitalize(keys[i]), width: 160 }
        if(col.field === '__v')
        {
            col.headerName = 'Delete Transaction'
            col.width = 175
        }
        columns.push(col)
    }
    columns[3].renderCell = (params) => (
        <strong>
            {params.value}
            <Button
                onClick={() => props.deleteTran(params.row._id)}
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
    rows.forEach((r, i) =>{ 
        r.id = r._id
        r.__v = ''
    })

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