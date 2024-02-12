"use client";
import { useCartStore } from "@/store";
import { Product } from "@/types/productTypes";
import React from "react";
import { Button } from "../ui/button";
import RemoveFromCart from "./RemoveFromCart";

const AddToCart = ({ product }: { product: Product }) => {
  const [cart, addTopCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);

  const howManyInCart = cart.filter(
    (item) => item.meta.sku === product.meta.sku
  ).length;

  const handleAdd = () => {
    addTopCart(product);
  };

  if (howManyInCart > 0) {
    return (
      <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product} />
        <span>{howManyInCart}</span>
        <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>
          +
        </Button>
      </div>
    );
  }

  return <Button onClick={handleAdd}>Add to Cart</Button>;
};

export default AddToCart;
