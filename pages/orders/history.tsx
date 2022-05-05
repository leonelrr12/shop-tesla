import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp, GridValueGetterParams } from '@mui/x-data-grid';
import NextLink from 'next/link';
import { ShopLayout } from '../../components/layouts';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullName', headerName: 'Nombre Completo', width: 300 },

  {
    field: 'paid',
    headerName: 'Pagada',
    description: 'Muestra estado de la Orden',
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return (
        params.row.paid 
          ? <Chip color='success' label='Ok Pagada' variant='outlined' />
          : <Chip color='error' label='No Pagada' variant='outlined' />
      )
    }
  },

  { field: 'phoneNumber', headerName: 'Teléfono', width: 100 },

  { 
    field: 'detail', 
    headerName: 'Ver Orden', 
    description: 'Muestra detalle de la orden',
    sortable: false,
    width: 100,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline='always' color='secondary'>Ver</Link>
        </NextLink>
      )
    }
  }
];

const rows = [
  { id: 1, paid: true, fullName: 'Leonel Rodríguez', phoneNumber: '5656-7878' },
  { id: 2, paid: false, fullName: 'Ruben Herrera', phoneNumber: '5656-7878' },
  { id: 3, paid: false, fullName: 'Eduardo Rodriguez', phoneNumber: '5656-7878' },
  { id: 4, paid: false, fullName: 'Ruben Gaitan', phoneNumber: '5656-7878' },
];


const HistoryPage = () => {
  return (
    <ShopLayout title='Historial de ordenes' pageDescription='Historial de ordenes del cliente' >
      <Typography variant='h1' component='h1'>Historial de ordenes</Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid 
            rows={ rows }
            columns={ columns } 
            pageSize={ 10 }
            rowsPerPageOptions={ [10] }
          />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default HistoryPage;