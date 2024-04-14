import React, { useState } from "react";
const TopProdOverview = () => {
  const [showAll, setShowAll] = useState(false);
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
    { id: 7, name: "Product 7" },
    { id: 8, name: "Product 8" },
    { id: 9, name: "Product 9" },
    { id: 10, name: "Product 10" },
  ];
  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`p-4 border border-gray-200 ${
                !showAll && index > 3 ? "bg-blue-200" : ""
              }`}
            >
              <p>{product.name}</p>
            </div>
          ))}
        </div>
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            See More
          </button>
        )}
      </div>
    </>
  );
};

export default TopProdOverview;
