import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import prod1 from '../public/prod1.png'; // Import image file correctly
import './App.css';
import Pagination from './component/Paginate/Paginate';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Number of products to display per page
  const totalProducts = 18; // Total number of products in your data set

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // You can fetch data for the new page using the pageNumber here if needed
  };

  // Simulated data for demonstration
  const content = {
    products: [
      {
        prod_id: 1001,
        name: "Product 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "399",
        image: prod1
      },
      {
        prod_id: 1002,
        name: "Product 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "299",
        image: prod1
      },
      {
        prod_id: 1003,
        name: "Product 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "499",
        image: prod1
      },
      {
        prod_id: 1004,
        name: "Product 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "199",
        image: prod1
      },
      {
        prod_id: 1005,
        name: "Product 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "999",
        image: prod1
      },
      {
        prod_id: 1006,
        name: "Product 6",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "899",
        image: prod1
      },
      {
        prod_id: 1007,
        name: "Product 7",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "399",
        image: prod1
      },
      {
        prod_id: 1008,
        name: "Product 8",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "299",
        image: prod1
      },
      {
        prod_id: 1009,
        name: "Product 9",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "499",
        image: prod1
      },
      {
        prod_id: 1010,
        name: "Product 10",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "199",
        image: prod1
      },
      {
        prod_id: 1011,
        name: "Product 11",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "999",
        image: prod1
      },
      {
        prod_id: 1012,
        name: "Product 12",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "899",
        image: prod1
      },
      {
        prod_id: 1013,
        name: "Product 13",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "399",
        image: prod1
      },
      {
        prod_id: 1014,
        name: "Product 14",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "299",
        image: prod1
      },
      {
        prod_id: 1015,
        name: "Product 15",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "499",
        image: prod1
      },
      {
        prod_id: 1016,
        name: "Product 16",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "199",
        image: prod1
      },
      {
        prod_id: 1017,
        name: "Product 17",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "999",
        image: prod1
      },
      {
        prod_id: 1018,
        name: "Product 18",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "899",
        image: prod1
      },
    ]
  };

  const fetchProductsForPage = (page) => {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, totalProducts);
    return content.products.slice(startIndex, endIndex);
  };

  const productsToShow = fetchProductsForPage(currentPage);

  return (
    <div>
      <h1 className='MainHeading'>Products</h1>
      <div className="product-container">
        {productsToShow.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
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
