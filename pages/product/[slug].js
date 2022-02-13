import { useRouter } from "next/router";
import React from "react";
import data from "../../utils/data";

export default function Product() {
  const router = useRouter();
  // Fetch the product from url
  const { slug } = router.query;
  // Finding the fetched product from data
  const product = data.products.find((p) => p.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <h1>{Product.name}</h1>
    </div>
  );
}
