import React from 'react';
import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-center p-14 w-full'>
            <div>
                <h2>Lorem ipsum dolor sit</h2>
                <button className='btn btn-primary'>Tap</button>
            </div>
            <div>
                <img className='w-3/12' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;