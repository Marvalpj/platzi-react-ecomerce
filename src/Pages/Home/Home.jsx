import React,{Suspense} from 'react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import ProductDetail from '../../components/ProductDetail/ProductDetail'
import {useFetch} from '../../Hooks/useFetch'

function Home(props) {

    const {data, loading, error, hanbleCancelRequest} = useFetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")

    return (
       <Layout>

            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                <Suspense fallback={<div>Loading...</div>}>
                {
                    data?.map((p,i) => {
                        return <Card key={i} name={p.title} price={p.price} category={p.category.name} image={p.images[0]} />
                    })
                }   
                </Suspense>
            </div>

            <ProductDetail />
       </Layout>
    );
}

export default Home;