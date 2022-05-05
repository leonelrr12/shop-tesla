import { FC } from 'react'
import Head from 'next/head'
import { Box } from '@mui/material';

interface Props {
  title: string;
  children?: string | JSX.Element | JSX.Element[];
}

export const AuthLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>

      <main>
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
          { children }
        </Box>
      </main>
    </>
  )
}