"use client";
import React, { useState, useEffect } from "react";
import APP_CONSTANTS from "@/app/constants/labels";
import Image from "next/image";

import { Carousel } from "@/components/app/carousel";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/app/product";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 md:py-12">
      <div className="w-full relative overflow-hidden">
        <Carousel images={APP_CONSTANTS.HOME_BANNER_URLS} />
      </div>
      <div className="w-full mt-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">
          shop by category
        </h1>
        <div className="w-full flex flex-wrap justify-center gap-10">
          {APP_CONSTANTS.category.map((cat) => (
            <div key={cat.id} className="flex flex-col items-center mb-10">
              <img
                src={cat.image_url}
                alt={cat.name}
                className="w-32 h-32 object-cover rounded-full border-2 border-gray-200"
              />
              <h2 className="mt-4 text-lg font-semibold text-center">
                {cat.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-20 mb-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">
          featured products
        </h1>
        <div className="w-full flex flex-wrap justify-center gap-8">
          {APP_CONSTANTS.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
