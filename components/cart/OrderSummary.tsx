import { Grid, Typography } from "@mui/material"


export const OrderSumary = () => {
  return (
    <Grid container>
      <Grid item xs={ 6 }>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>3 items</Typography>
      </Grid>

      <Grid item xs={ 6 }>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>${106.89}</Typography>
      </Grid>

      <Grid item xs={ 6 }>
        <Typography>Impuestos (15%)</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>${20.89}</Typography>
      </Grid>

      <Grid item xs={ 6 } sx={{ mt: 1 }}>
        <Typography variant='subtitle1'>Total</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography variant='subtitle1'>${126.89}</Typography>
      </Grid>

    </Grid>
  )
}
