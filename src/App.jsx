import React, { useState, useEffect } from "react";
import { fetchProducts } from "./api";
import CategoryDropdown from "./components/CategoryDropdown";
import ProductList from "./components/ProductList";
import LoadingIndicator from "./components/LoadingIndicator";
import ErrorDisplay from "./components/ErrorDisplay";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      {loading && <LoadingIndicator />}
      {error && <ErrorDisplay error={error} />}
      <CategoryDropdown
        categories={categories}
        onSelectCategory={handleSelectCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
