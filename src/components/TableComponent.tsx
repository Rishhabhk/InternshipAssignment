import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Root } from '../InterfaceAPI';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        type: 'number',
        align: 'center',
        headerAlign: 'center',
        width: 80,
        editable: true
    },
    {
        field: 'userId',
        headerName: 'UserID',
        type: 'number',
        align: 'center',
        headerAlign: 'center',
        width: 90,
        editable: true
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 510,
        editable: true
    },
    {
        field: 'body',
        headerName: 'Body',
        width: 1550
    },
];

type Props = {
    result: Root
}

const TableComponent = ({ result }: Props) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
            <Box sx={{ height: 550, width: '90%' }} >
                <DataGrid
                    rows={result}
                    columns={columns}
                    disableRowSelectionOnClick
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 25,
                            },
                        },
                    }}
                    sx={{
                        boxShadow: 2,
                        borderColor: 'primary.dark',
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                        },
                    }}
                />
            </Box>
        </Box>
    )
}

export default TableComponent