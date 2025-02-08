"use client";
import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import Image from 'next/image';

// Initialize Sanity Client
const client = sanityClient({
  projectId: 'yourProjectId', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name (default: 'production')
  useCdn: true, // Use true for faster response with cached content
  apiVersion: '2023-01-01', // Use the latest Sanity API version
});

// Define TypeScript interface for the product type
interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  imageUrl: string;
  description: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);  // Use the Product type for state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch products from Sanity
    client
      .fetch(
        `*[_type == "product"] | order(_createdAt desc) {
          _id,
          productName,
          category,
          price,
          inventory,
          colors,
          status,
          "imageUrl": image.asset->url,
          description
        }`
      )
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  padding: '10px',
                  width: '300px',
                  boxSizing: 'border-box',
                  transition: 'transform 0.3s ease',
                }}
              >
                {product.imageUrl && (
                  <Image
                    src={product.imageUrl}
                    alt={product.productName || 'Product Image'}
                    width={300}
                    height={200}
                    style={{
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                  />
                )}
                <h2>{product.productName || 'Unnamed Product'}</h2>
                <p>
                  <strong>Category:</strong> {product.category || 'N/A'}
                </p>
                <p>
                  <strong>Price:</strong> ${product.price || 'N/A'}
                </p>
                <p>
                  <strong>Inventory:</strong> {product.inventory || 0}
                </p>
                <p>
                  <strong>Status:</strong> {product.status || 'Unavailable'}
                </p>
                <p>
                  <strong>Colors:</strong>{' '}
                  {product.colors && product.colors.length > 0
                    ? product.colors.join(', ')
                    : 'N/A'}
                </p>
                <p>{product.description || 'No description available.'}</p>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
