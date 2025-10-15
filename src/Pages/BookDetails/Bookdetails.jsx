import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utilities/addToDB';

const Bookdetails = () => {
    const {id} = useParams();
    const bookId =parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image} = singleBook || {};
    const handleMarkasRead = id =>{
        
        addToStoreDB(id)
    }
    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>

            <button onClick={()=> handleMarkasRead(id)} class="btn btn-success m-2">Mar As Read</button>
            <button class="btn btn-warning m-2">Add To Wishlist</button>
        </div>
    );
};

export default Bookdetails;