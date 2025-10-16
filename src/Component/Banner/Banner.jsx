import React from 'react';
import bookimage from '../../assets/books.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookimage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Best Place for Bookish!</h1>
      <p className="py-6">
        You can find the best collection of books including novel, fictions, fantasy, horror, romance and many more. Let's dive into the sea of knowledge.
      </p>
  <Link to="/#books" className="btn btn-primary">Dive</Link>
    </div>
  </div>
</div>
    );
};

export default Banner;