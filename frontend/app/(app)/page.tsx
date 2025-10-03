"use client";
import React, { useState, useEffect } from "react";
import APP_CONSTANTS from "@/app/constants/labels";
import Image from "next/image";

import { Carousel } from "@/components/app/carousel";
import { Button } from "@/components/ui/button";

const page = () => {
  const category = [
    {
      id: 1,
      name: "men",
      description: "Explore our latest men's fashion collection.",
      image_url:
        "https://commerce.bagisto.com/cache/large/category/2/OYsuHioryn5KrOE7p8wQ2hQ3BReXY5CSbDzhvEk8.webp",
  
      },
    {
      id: 2,
      name: "kids",
      description: "Discover trendy and comfortable styles for kids.",
      image_url:
        "https://commerce.bagisto.com/cache/large/category/3/IZckbPVQSOboHJrXmguJnJA3jPCUD1GfjSZHgtB3.webp",
    },
    {
      id: 3,
      name: "women",
      description: "Shop the newest arrivals in women's fashion.",
      image_url:
        "https://commerce.bagisto.com/cache/large/category/4/oT8LA8gG6K7UlBgzB3ZVOjczO3iKyRkrVLD6d1s9.webp",
    },
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
    {
      id: 6,
      name: "Hat",
      price: 19.99,
      img_url:
        "https://image.hm.com/assets/hm/52/2c/522c4003b164b188cc3268639d62078cc68790ff.jpg",
      description: "A stylish hat for all seasons.",
      category: "Accessories",
      stock: 40,
    }
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 md:py-12">
      <div className="w-full relative overflow-hidden">
        <Carousel images={APP_CONSTANTS.HOME_BANNER_URLS} />
      </div>
      <div className="w-full mt-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">shop by category</h1>
        <div className="w-full flex flex-wrap justify-center gap-10">
          {category.map((cat) => (
        <div key={cat.id} className="flex flex-col items-center mb-10">
          <img
            src={cat.image_url}
            alt={cat.name}
            className="w-32 h-32 object-cover rounded-full border-2 border-gray-200"
          />
          <h2 className="mt-4 text-lg font-semibold text-center">{cat.name}</h2>
        </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-20 mb-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">featured products</h1>
        <div className="w-full flex flex-wrap justify-center gap-8">
          {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 flex flex-col items-center w-[250px] bg-white"
        >
          <Image
            src={product.img_url}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded"
            width={200}
            height={200}
          />
          <h2 className="text-lg font-semibold mb-2 text-center">{product.name}</h2>
          <p className="text-gray-600 mb-4 text-center">${product.price.toFixed(2)}</p>
          <Button>
            {APP_CONSTANTS.ADD_CART_LABEL}
          </Button>
        </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
