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
        <div className='w-11/12 md:w-2/3 mx-auto'>
            <div className='flex flex-col md:flex-row items-start gap-6'>
                <div className='flex-shrink-0 flex flex-col items-center gap-3'>
                    <img className='w-40 md:w-56 rounded shadow' src={image} alt={bookName || 'book'} />
                    <div className='flex flex-col md:flex-row md:items-center gap-2 mt-2'>
                        <button onClick={()=> handleMarkasRead(id)} className="btn btn-success">Mark As Read</button>
                        <button onClick={()=> handleAddToWishlist(id)} className="btn btn-warning">Add To Wishlist</button>
                    </div>
                </div>
                <div className='flex-1 space-y-3'>
                    <div>
                        <h2 className='text-2xl font-semibold'>{bookName}</h2>
                        <p className='text-sm text-gray-600'>By {author}</p>
                    </div>

                    <div className='text-sm flex flex-wrap gap-4 text-gray-700'>
                        <span>Category: <strong className='text-black'>{category}</strong></span>
                        <span>Publisher: <strong className='text-black'>{publisher}</strong></span>
                        <span>Year: <strong className='text-black'>{yearOfPublishing}</strong></span>
                        <span>Pages: <strong className='text-black'>{totalPages}</strong></span>
                        <span>Rating: <strong className='text-black'>{rating}</strong></span>
                    </div>

                    {Array.isArray(tags) && tags.length > 0 && (
                        <div className='flex gap-2 flex-wrap'>
                            {tags.map((t) => (
                                <span key={t} className='badge badge-outline'>{t}</span>
                            ))}
                        </div>
                    )}

                    {review && <p className='text-sm leading-relaxed'>{review}</p>}

                    {/* actions moved to the left column under the image */}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Bookdetails;