import React from "react";

const page = () => {
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
    <div className="flex w-full flex-col items-center justify-center gap-8 py-8 md:py-12">
  PAGE
    </div>
  );
};

export default page;
