import React from 'react'
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { tovarOlipTashlash, tovarQosh } from '../counterSlice';

function ProductCard({ data, img, title, price, chegirmaNarx, rating, sharhlar, id }) {

    const count = useSelector((state) => state.counter.tovars)
    const dispatch = useDispatch()

    return (
        <div className='col-sm-6 col-md-3'>
            {/* <Link to={`/productInfo/${id}`}> */}
            <div className='product-card'>
                <img src={img} className='img-fluid' alt="" />
                <div className='product-info shadow'>
                    <p className='product-title'>{title}</p>
                    <div className='d-flex align-items-center gap-2'>
                        <FaStar />
                        <p className='mb-0'>{rating}</p>
                        <p className='mb-0'>{`(${sharhlar} sharhlar)`}</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-between mt-3'>
                        <div>
                            <p className='mb-1'><del>{price}</del></p>
                            <p>{chegirmaNarx}</p>
                        </div>
                        <button onClick={() => dispatch(tovarQosh(data))} className='btn btn-primary'>Qo'shish</button>
                        <button onClick={()=>dispatch(tovarOlipTashlash(data))} className='btn btn-danger'>olip tashlash</button>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </div>
    )
}

export default ProductCard
