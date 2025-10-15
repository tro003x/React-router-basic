import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Bookdetails = () => {
    const {id} = useParams();
    const bookId =parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image} = singleBook;
    console.log(data)
    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>

            <button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
        </div>
    );
};

export default Bookdetails;