import React from "react";
import { Button } from "@/components/ui/button";
import APP_CONSTANTS from "@/app/constants/labels";

type cartType = {
  id: number;
  quantity: number;
}[];

const page = () => {
  const cart: cartType = [
    { id: 1, quantity: 2 },
    { id: 3, quantity: 1 },
    { id: 5, quantity: 4 },
  ];
  const products = [
    {
      id: 1,
      name: "Shirt",
      price: 29.99,
      img_url:
        "https://image.hm.com/assets/hm/52/2c/522c4003b164b188cc3268639d62078cc68790ff.jpg",
      description: "A comfortable cotton shirt.",
      category: "Clothing",
      stock: 100,
    },
    {
      id: 2,
      name: "Jeans",
      price: 49.99,
      img_url:
        "https://image.hm.com/assets/hm/52/2c/522c4003b164b188cc3268639d62078cc68790ff.jpg",
      description: "Stylish denim jeans.",
      category: "Clothing",
      stock: 50,
    },
    {
      id: 3,
      name: "Sneakers",
      price: 79.99,
      img_url:
        "https://image.hm.com/assets/hm/52/2c/522c4003b164b188cc3268639d62078cc68790ff.jpg",
      description: "Comfortable sneakers for everyday wear.",
      category: "Footwear",
      stock: 30,
    },
    {
      id: 4,
      name: "Jacket",
      price: 99.99,
      img_url:
        "https://image.hm.com/assets/hm/52/2c/522c4003b164b188cc3268639d62078cc68790ff.jpg",
      description: "A warm and stylish jacket.",
      category: "Clothing",
      stock: 20,
    },
    {
      id: 5,
      name: "Watch",
      price: 199.99,
      img_url:
        "https://image.hm.com/assets/hm/52/2c/522c4003b164b188cc3268639d62078cc68790ff.jpg",
      description: "A sleek wristwatch.",
      category: "Accessories",
      stock: 15,
    },
  ];
  return (
    <div className="">
      <h1 className="text-2xl font-bold my-10">user cart</h1>
      <div className="w-full">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {cart.length === 0 ? (
            <h1 className="text-center">Your cart is empty</h1>
          ) : (
            <div className="">
              {cart.map((cartItem) => {
                const product = products.find((p) => p.id === cartItem.id);
                if (!product) return null;
                return (
                  <div key={product.id} className="flex gap-5 mb-5">
                    <img
                      src={product.img_url}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex flex-col justify-between">
                      <h2 className="font-semibold">{product.name}</h2>
                      <p>${product.price}</p>
                      <div className="flex items-center gap-2">
                        <Button size="sm">-</Button>
                        <span>{cartItem.quantity}</span>
                        <Button size="sm">+</Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className="flex flex-col gap-5 border p-5 rounded-md h-fit bg-muted-foreground/10 w-[30%]">
            <h1>order summary</h1>
            <div className="my-4">
              <div className="border-t border-gray-200" />
            </div>
            <div className="flex justify-between">
              <h1>order total</h1>
              <h1>$0.0</h1>
            </div>
            <Button>{APP_CONSTANTS.CHECKOUT_LABEL}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
