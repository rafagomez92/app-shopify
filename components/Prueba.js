//import { TextStyle } from '@shopify/polaris'
import { TextStyle, Page, Layout, EmptyState, FooterHelp, Link, Card, Stack, Button, Spinner } from '@shopify/polaris'
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Hijo from '../components/Hijo'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = ({ 
    prueba_titulo
}) => {

    console.log('Prueba.js')

    
    return (
        <Page fullWidth>

            
            
            
            <Layout>
                <h1>{prueba_titulo}</h1>

                <Hijo />
            </Layout>    

            <FooterHelp>
                Soy Fernando{' '}
                <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
                    Castillo
                </Link>
            </FooterHelp>
        </Page>    
    )
}


export default Index