import React, { Suspense, useEffect, useState } from 'react';

const Books = () => {
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
                {
                    data.map(singleBook)=> <Books key={singleBook.bookID} singleBook = {singleBook}></Books>
                }
            </Suspense>
        </div>
    );
};

export default Books;