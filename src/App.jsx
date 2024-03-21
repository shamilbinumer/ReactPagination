import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Pagination from './component/Paginate/Paginate';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Number of products to display per page
  const totalProducts = 30; // Total number of products in your data set

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // You can fetch data for the new page using the pageNumber here if needed
  };

  // Simulated data for demonstration
  const fetchProductsForPage = (page) => {
    // In a real application, you would fetch data from an API instead
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, totalProducts);
    const productsForPage = [];

    for (let i = startIndex; i < endIndex; i++) {
      productsForPage.push({
        id: i + 1,
        name: `Product ${i + 1}`,
        price: Math.floor(Math.random() * 100) + 1, // Generate random price for demonstration
        imageUrl: `https://via.placeholder.com/150?text=Product+${i + 1}` // Example placeholder image URL
      });
    }

    return productsForPage;
  };

  const productsToShow = fetchProductsForPage(currentPage);

  return (
    <div>
      <h1 className='MainHeading'>Products</h1>
      <div className="product-container">
        {productsToShow.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalProducts / productsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
