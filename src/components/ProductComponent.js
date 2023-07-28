import React from 'react'
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    var maxLength = 100;
    return (
        <>
            {products.map((product) => {
                const { id, title, price, description, category, image, rating } = product;

                return (
                    <div className='shadow-md p-5' key={id}>
                        <div>
                            {/* {JSON.stringify(products[0])} */}
                            <div>
                                <img
                                    src={image}
                                    alt={title}
                                    style={{
                                        height: "300px",
                                        width: "300px"
                                    }}
                                />
                            </div>
                            <div className='mt-3'>
                                <h5>{title}</h5>
                                <p className='uppercase text-lg'>{category}</p>
                                <p className='text-red-400'>Cost: {price}</p>
                                <p>Rating: {rating.rate}</p>
                                <p>Desceiption: {description.substring(0, maxLength) + '...'}</p>
                            </div>
                        </div>

                    </div>
                )
            })}
        </>

    )
}

export default ProductComponent
