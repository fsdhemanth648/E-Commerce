import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../redux/actions/productActions'


const ProductDetails = () => {
    const { productID } = useParams();
    console.log(productID)
    let product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log(err);
            });
        dispatch(selectedProduct(response.data));

    }

    useEffect(() => {
        if (productID && productID !== '')
            fetchProductDetail(productID);
    }, [productID]);

    return (
        <div>
            <div >
                {Object.keys(product).length === 0 ? (
                    <div>...Loading</div>
                ) : (
                    <div className="grid grid-cols-2 p-10">
                        <div className='shadow-md shadow-slate-900 flex justify-center content-center border border-r-black rounded-l-md'>
                            <img className="w-[500px] h-[500px] my-10" src={image} alt={title} />
                        </div>
                        <div className='p-10 shadow-md shadow-slate-900 rounded-r-md'>
                            <div>
                                <h1 className='text-2xl'>{title}</h1>
                                <h2>
                                    <p className=" text-red-700">Price: ${price}</p>
                                </h2>
                                <h3 className=" uppercase text-base">{category}</h3>
                                <p className='py-3'>{description}</p>
                                <div className='flex justify-end mt-20'>
                                    <button className="rounded-full bg-purple-500 px-5 py-3">Add to cart</button>
                                </div>
                            </div>


                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductDetails
