import React, { useEffect, useState } from 'react';
import Banner from '../../Component/Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => {
                setAllBooks(data);
                console.log(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <Banner />
            <Books books={allBooks} />
        </div>
    );
};

export default Home;
