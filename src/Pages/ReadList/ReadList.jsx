import React, { useMemo } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData, Link } from 'react-router-dom';
import { getStoredBook, getStoredWishlist } from '../../utilities/addToDB';

const ReadList = () => {
  const books = useLoaderData();
  const readIds = (getStoredBook() || []).map(Number);
  const wishIds = (getStoredWishlist() || []).map(Number);

  const readBooks = useMemo(() => {
    const set = new Set(readIds);
    return Array.isArray(books) ? books.filter(b => set.has(b.bookId)) : [];
  }, [books, readIds]);

  const wishBooks = useMemo(() => {
    const set = new Set(wishIds);
    return Array.isArray(books) ? books.filter(b => set.has(b.bookId)) : [];
  }, [books, wishIds]);

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
          <div className="space-y-3 mt-4">
            {readBooks.length === 0 && <p className="text-sm text-gray-500">No books have been marked as read yet.</p>}
            {readBooks.map(b => <BookRow key={b.bookId} b={b} />)}
          </div>
        </TabPanel>
        <TabPanel>
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