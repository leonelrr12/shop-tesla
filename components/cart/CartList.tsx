import NextLink from 'next/link';

import { Typography, CardActionArea, CardMedia, Grid, Link, Box, Button } from '@mui/material';
import { initialData } from "../../database/products"
import { ItemCounter } from '../ui/ItemCounter';
import { FC } from 'react';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[3],
]

interface Props {
  editable?: boolean;
}

export const CartList: FC<Props> = ({ editable = false }) => {
  return (
    <>
      {
        productsInCart.map( product => (
          <Grid container key={ product.slug } spacing={ 2 }>
            <Grid item xs={ 3 }>
              {/* TODO: llevar a la pagina del producto */}
              <NextLink href='/product/slug' passHref> 
                <Link>
                  <CardActionArea>
                    <CardMedia 
                      image={ `/products/${ product.images[0] }` }
                      component='img'
                      sx={{ borderRadius: '5px' }}
                    />
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={7}>
              <Box display='flex' flexDirection='column'>
                <Typography variant='body1'>{ product.title }</Typography>
                <Typography variant='body1'>Talla: <strong>M</strong></Typography>

                {
                  editable 
                    ? <ItemCounter />
                    : <Typography variant='subtitle2'>3 items</Typography>
                }
                
              </Box>
            </Grid>
            <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
              <Typography variant='subtitle1'>${ product.price }</Typography>

              {
                editable && (
                  <Button variant='text' color='secondary'>
                    Remover
                  </Button>
                ) 
              }
            </Grid>
          </Grid>
        ))
      }
    </>
  )
}
