import React from 'react'
import { FaStar } from "react-icons/fa6";

function ProductCard({ img, title, price, chegirmaNarx, rating, sharhlar }) {
    return (
        <div className='col-sm-6 col-md-3'>
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
                        <button className='btn btn-primary'>Qo'shish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
