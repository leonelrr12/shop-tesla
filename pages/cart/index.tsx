import React from 'react'
import { ShopLayout } from '../../components/layouts';
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { CartList } from '../../components/cart';
import { OrderSumary } from '../../components/cart/OrderSummary';

const CartPage = () => {
  return (
    <ShopLayout title='Carrito - 3' pageDescription='Su carrito de compras'>
      <Typography variant='h1' component='h1'>Carrito</Typography>

      <Grid container>

        <Grid item xs={ 12 } sm={ 7 }>
          <CartList editable={ true } />
        </Grid>
        <Grid item xs={ 12 } sm={ 5 }>
          <Card className='sumary-card'>
            <CardContent>
              <Typography variant='h2'>Orden</Typography>
              <Divider sx={{ my: 1 }} />

              <OrderSumary />

              <Box sx={{ mt: 3 }}>
                <Button color='secondary' className='circular-btn' fullWidth>
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default CartPage;