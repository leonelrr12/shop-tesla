import type { NextPage } from 'next'
import { Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products/ProductList';
import { initialData } from '../database/products';


const Home: NextPage = () => {
  return (
    <ShopLayout title={'Virtual-Mall'} pageDescription={'Encuentra los Mejores Productos del Mercado'} >
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>

      <ProductList products={initialData.products} />

    </ShopLayout>
  )
}

export default Home
