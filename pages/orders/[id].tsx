import NextLink from 'next/link';
import { ShopLayout } from '../../components/layouts';
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material';
import { CartList } from '../../components/cart';
import { OrderSumary } from '../../components/cart/OrderSummary';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

const OrderPage = () => {
  return (
    <ShopLayout title='Resumen de la Orden No.' pageDescription='Su carrito de compras'>
      <Typography variant='h1' component='h1'>Orden: 12358</Typography>

      {/* <Chip 
        sx={{ my: 2 }}
        label='Pendiente de pago'
        variant='outlined'
        color='error'
        icon={ <CreditCardOffOutlined /> }
      /> */}
      <Chip 
        sx={{ my: 2 }}
        label='Orden fué pagada'
        variant='outlined'
        color='success'
        icon={ <CreditScoreOutlined /> }
      />

      <Grid container>
        <Grid item xs={ 12 } sm={ 7 }>
          <CartList />
        </Grid>
        <Grid item xs={ 12 } sm={ 5 }>
          <Card className='sumary-card'>
            <CardContent>
              <Typography variant='h2'>Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Dirección de entrega</Typography>
                <NextLink href='/checkout/address' passHref>
                  <Link underline='always'>Editar</Link>
                </NextLink>
              </Box>

              <Typography>Ruben Herrera</Typography>
              <Typography>Calle 12 Rio Abajo</Typography>
              <Typography>Edificio #4</Typography>
              <Typography>Panamá</Typography>
              <Typography>+507 9696-9696</Typography>

              <Divider sx={{ my: 1 }} />
              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref>
                  <Link underline='always'>Editar</Link>
                </NextLink>
              </Box>

              <OrderSumary />

              <Box sx={{ mt: 3 }}>
                {/* Pagar */}
                <h1>Pagar</h1>
                <Chip 
                  sx={{ my: 2 }}
                  label='Proceder con el pago'
                  variant='outlined'
                  color='success'
                  icon={ <CreditScoreOutlined /> }
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default OrderPage;