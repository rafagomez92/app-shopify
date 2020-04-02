import { TextStyle, Page, Layout, Card, EmptyState, FooterHelp, Link } from '@shopify/polaris'
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react'
import { useState } from 'react'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';


const Index = () => {

    const [open, setOpen] = useState(false)

    const handleSelection = (resources)=>{
        setOpen(false)
        console.log(resources)
    }
    
    return (
        <Page>

            <TitleBar
                primaryAction={{
                    content: 'Hola soy un primary actions'
                }}
            />
            <ResourcePicker
                resourceType="Product"
                showVariants={false}
                open={open}
                onSelection={handleSelection}
                onCancel={()=> setOpen(false)}
            />

            <Layout>
                <Layout.Section>
                    <Card title="Bienvenido" sectioned>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate risus et metus finibus efficitur. Curabitur luctus diam sit amet interdum rutrum. Donec non eros ac sapien hendrerit dignissim consectetur id magna. Quisque eget orci ipsum. Etiam ornare dolor nec odio tristique malesuada. Donec hendrerit ex at lorem vehicula tincidunt. Phasellus nisi ex, fringilla id consectetur eu, commodo vel nibh. Sed quis viverra leo. Vestibulum at condimentum justo. Integer a erat fermentum, porttitor tortor eget, rhoncus ex. Suspendisse in vulputate augue. Phasellus lacinia rhoncus tortor, a dictum ipsum vehicula ut. Nullam fringilla mauris nec molestie imperdiet. Nunc tempus mauris sit amet diam tristique dignissim.</p>
                    </Card>
                </Layout.Section>
                {/* <Layout.Section secondary>
                    <Card title="Tags" sectioned>
                    <p>Add tags to your order.</p>
                    </Card>
                </Layout.Section> */}
                <Layout.Section secondary>
                    <EmptyState
                        heading="Soy un titulo"
                        action={{
                            content: 'Click on me',
                            onAction: ()=> setOpen(true)
                        }}
                        image={img}
                    >
                        <p>Selecciona productos</p>
                    </EmptyState>
                </Layout.Section>
                <Layout.Section secondary>
                    <EmptyState
                        heading="Soy un titulo"
                        action={{
                            content: 'Click on me',
                            onAction: ()=> setOpen(true)
                        }}
                        image={img}
                    >
                        <p>Enviar productos a revision</p>
                    </EmptyState>
                </Layout.Section>
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