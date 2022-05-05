import { Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ShopLayout } from "../../components/layouts";


const AddressPage = () => {
  return (
    <ShopLayout title='Dirección' pageDescription='Dirección de envío del pedido'>
      <Typography variant='h1' component='h1'>Dirección</Typography>

      <Grid container spacing={ 2 } sx={{ mt: 2 }}>

        <Grid item xs={ 12 } sm={ 6 }>
          <TextField label='Nombre' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <TextField label='Apellido' variant='filled' fullWidth />
        </Grid>

        <Grid item xs={ 12 } sm={ 6 }>
          <TextField label='Dirección' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <TextField label='Dirección 2 (opcional)' variant='filled' fullWidth />
        </Grid>

        <Grid item xs={ 12 } sm={ 6 }>
          <TextField label='Código Postal' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <TextField label='Ciudad' variant='filled' fullWidth />
        </Grid>

        <Grid item xs={ 12 } sm={ 6 }>
          <FormControl fullWidth>
            <Select
              variant='filled'
              label='País'
              value={1}
            >
              <MenuItem value={1}>Panamá</MenuItem>
              <MenuItem value={2}>Mexico</MenuItem>
              <MenuItem value={3}>Costa Rica</MenuItem>
              <MenuItem value={4}>Colombia</MenuItem>
              <MenuItem value={5}>Massachusset</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={ 12 } sm={ 6 }>
          <TextField label='Teléfono' variant='filled' fullWidth />
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }} display='flex' justifyContent='center'>
        <Button color='secondary' className='circular-btn'>Revisar pedido</Button>
      </Box>
    </ShopLayout>
  )
}

export default AddressPage;