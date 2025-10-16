import React, { useMemo, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData, Link } from 'react-router-dom';
import { getStoredBook, getStoredWishlist } from '../../utilities/addToDB';

const ReadList = () => {
  const books = useLoaderData();
  const readIds = (getStoredBook() || []).map(Number);
  const wishIds = (getStoredWishlist() || []).map(Number);

  const [readSort, setReadSort] = useState(''); // '', 'rating', 'price'
  const [wishSort, setWishSort] = useState('');

  const addPrice = (list) => list.map(b => ({
    ...b,
    // If your data has price, use it; otherwise mock a price from rating/pages to demo sorting
    price: typeof b.price === 'number' ? b.price : Math.round((b.rating || 0) * 50 + (b.totalPages || 0) * 0.1)
  }));

  const sortList = (list, by) => {
    if (by === 'rating') return [...list].sort((a,b) => (b.rating||0) - (a.rating||0));
    if (by === 'price') return [...list].sort((a,b) => (b.price||0) - (a.price||0));
    return list;
  };

  const readBooks = useMemo(() => {
    const set = new Set(readIds);
    const filtered = Array.isArray(books) ? books.filter(b => set.has(b.bookId)) : [];
    const withPrice = addPrice(filtered);
    return sortList(withPrice, readSort);
  }, [books, readIds, readSort]);

  const wishBooks = useMemo(() => {
    const set = new Set(wishIds);
    const filtered = Array.isArray(books) ? books.filter(b => set.has(b.bookId)) : [];
    const withPrice = addPrice(filtered);
    return sortList(withPrice, wishSort);
  }, [books, wishIds, wishSort]);

  const BookRow = ({ b }) => (
    <div className="flex items-center gap-4 p-3 border rounded-md">
      <img src={b.image} alt={b.bookName} className="w-16 h-20 object-cover" />
      <div className="flex-1">
        <h4 className="font-semibold">{b.bookName}</h4>
        <p className="text-sm text-gray-600">By {b.author}</p>
        <div className="text-xs text-gray-500 flex gap-3">
          <span>Category: {b.category}</span>
          <span>Rating: {b.rating}</span>
          <span>Pages: {b.totalPages}</span>
        </div>
      </div>
      <Link className="btn btn-sm" to={`/bookDetails/${b.bookId}`}>Details</Link>
    </div>
  );

  return (
    <div>
        
      <h2 className="text-2xl font-semibold mb-4">Your Lists</h2>
      <Tabs>
        <TabList>
          <Tab>Read Books ({readBooks.length})</Tab>
          <Tab>Wishlist ({wishBooks.length})</Tab>
        </TabList>

        <TabPanel>
          <div className="flex items-center justify-end gap-2 mt-4">
            <span className="text-sm">Sort by:</span>
            <button className={`btn btn-sm ${readSort==='rating'?'btn-primary':''}`} onClick={()=> setReadSort('rating')}>Rating</button>
            <button className={`btn btn-sm ${readSort==='price'?'btn-primary':''}`} onClick={()=> setReadSort('price')}>Price</button>
            {readSort && <button className="btn btn-sm" onClick={()=> setReadSort('')}>Clear</button>}
          </div>
          <div className="space-y-3 mt-4">
            {readBooks.length === 0 && <p className="text-sm text-gray-500">No books have been marked as read yet.</p>}
            {readBooks.map(b => <BookRow key={b.bookId} b={b} />)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex items-center justify-end gap-2 mt-4">
            <span className="text-sm">Sort by:</span>
            <button className={`btn btn-sm ${wishSort==='rating'?'btn-primary':''}`} onClick={()=> setWishSort('rating')}>Rating</button>
            <button className={`btn btn-sm ${wishSort==='price'?'btn-primary':''}`} onClick={()=> setWishSort('price')}>Price</button>
            {wishSort && <button className="btn btn-sm" onClick={()=> setWishSort('')}>Clear</button>}
          </div>
          <div className="space-y-3 mt-4">
            {wishBooks.length === 0 && <p className="text-sm text-gray-500">No books in your wishlist yet.</p>}
            {wishBooks.map(b => <BookRow key={b.bookId} b={b} />)}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;