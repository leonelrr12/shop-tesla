import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products';
import { useProducts } from "../../hooks";
import { FullScreenLoading } from '../../components/ui';

const KidPage: NextPage = () => {

  const { products, isLoading, isError } = useProducts(`/products?gender=kid`)

  return (
    <ShopLayout title={'Virtual-Mall'} pageDescription={'Encuentra los Mejores Productos para Niños'} >
      <Typography variant='h1' component='h1'>Kids</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Productos para Niños</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={ products } />
      }

    </ShopLayout>
  )
}

export default KidPage;