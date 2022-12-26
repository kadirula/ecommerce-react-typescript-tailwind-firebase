import React, { useEffect, useState } from 'react'
import { getAllProductsByCategory } from '../../services/product';
import ProductCard from '../product-card';
import ProductSkeleton from '../skeleton/ProductSkeleton';


import Title from '../title';

interface IProductContainerProps {
    type: string
}

const ProductContainer: React.FunctionComponent<IProductContainerProps> = ({ type = 'smartphones' }) => {

    const [products, setProducts] = useState<Array<any>>([]);
    const [loading, setLoading] = useState<boolean>(false)


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await getAllProductsByCategory(type, 15);

            if (res?.statusText === 'OK') {
                setProducts(res?.data.products);
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            }
        }

        fetchData();
    }, [type]);

    return (
        <div className='container mx-auto py-4 px-4 lg:px-0 lg:py-10'>
            <Title title={type} />
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 py-5">
                {
                    products.sort((a, b) => b.rating - a.rating)?.map((product) => (
                        loading ?
                            <ProductSkeleton key={product.id}/>
                            :
                            <ProductCard product={product} key={product.id} />
                    ))

                }
            </div>
        </div>
    )
}

export default ProductContainer