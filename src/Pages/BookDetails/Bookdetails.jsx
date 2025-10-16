import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreDB, addToWishlistDB } from '../../utilities/addToDB';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Bookdetails = () => {
    const {id} = useParams();
    const bookId =parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = singleBook || {};
    const handleMarkasRead = id =>{
        const res = addToStoreDB(id);
        if(res?.added){
            toast("Marked as Read!");
        } else if(res?.duplicate){
            toast.info("Already Marked as Read");
        }
    }
    const handleAddToWishlist = (id) => {
        const res = addToWishlistDB(id);
        if (res?.added) {
            toast("Added to Wishlist!");
        } else if (res?.duplicate) {
            toast.info("Already in Wishlist");
        }
    };

    return (
        <div className='w-2/3 mx-auto space-y-4'>
            <img className='w-48' src={image} alt={bookName || 'book'} />
            <h2 className='text-2xl font-semibold'>{bookName}</h2>
            <p className='text-sm text-gray-600'>By {author}</p>
            <div className='text-sm'>
                <span className='mr-2'>Category: {category}</span>
                <span className='mr-2'>Publisher: {publisher}</span>
                <span className='mr-2'>Year: {yearOfPublishing}</span>
                <span className='mr-2'>Pages: {totalPages}</span>
                <span className='mr-2'>Rating: {rating}</span>
            </div>
            <ToastContainer />
            {Array.isArray(tags) && tags.length > 0 && (
                <div className='flex gap-2 flex-wrap'>
                    {tags.map((t) => (
                        <span key={t} className='badge badge-outline'>{t}</span>
                    ))}
                </div>
            )}
            {review && <p className='text-sm leading-relaxed'>{review}</p>}
            <div>
                <button onClick={()=> handleMarkasRead(id)} className="btn btn-success m-2">Mark As Read</button>
                <button onClick={()=> handleAddToWishlist(id)} className="btn btn-warning m-2">Add To Wishlist</button>
            </div>
        </div>
    );
};

export default Bookdetails;