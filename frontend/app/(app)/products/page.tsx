"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import APP_CONSTANTS from "@/app/constants/labels";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/app/product";

const page = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h1 className="text-2xl font-bold my-10">products</h1>
        <div className="mb-6 flex items-center">
            <Input placeholder="Search products..." />
            <Button className="ml-2">Search</Button>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-8">
        {APP_CONSTANTS.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
