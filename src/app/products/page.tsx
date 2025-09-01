"use client";

import ProductList from "../components/ProductList";

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return <ProductList category={category} params="products" />;
};

export default ProductPage;
