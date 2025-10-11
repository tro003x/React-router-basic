import React, { Suspense, useEffect, useState } from 'react';
import SBooks from '../sBooks/sBooks';

const Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch('/booksData.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllBooks(data);
    //             console.log(data);
    //         })
    //         .catch(err => console.error(err));
    // }, []); // Add empty dependency array!

    return (
        <div>
            <h1 className="text-3xl text-center p-6">Books</h1>
            <Suspense>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                 {
                   data.map((singleBook)=> <SBooks key={singleBook.bookId} singleBook = {singleBook}></SBooks>)
            
                }
               </div>
            </Suspense>
        </div>
    );
};

export default Books;