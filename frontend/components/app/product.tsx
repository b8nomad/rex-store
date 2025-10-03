import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import APP_CONSTANTS from "@/app/constants/labels";
import { ExternalLink } from "lucide-react";
import { toast } from "sonner";

export type Product = {
  id: string | number;
  name: string;
  img_url: string;
  tags: string[];
  price: number;
};

type ProductCardProps = {
  product: Product;
};

export const AddToCartAction = () => {
  toast.success("Added to cart");
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="border rounded-lg p-4 flex flex-col items-stretch w-[250px] bg-white">
    <div className="w-full h-48 mb-4 rounded overflow-hidden flex items-center justify-center bg-gray-100 relative group cursor-pointer">
      <Image
        src={product.img_url}
        alt={product.name}
        className="object-cover hover:scale-110 transition-transform hover:grayscale-50 hover:brightness-90 duration-300"
        fill
        sizes="250px"
      />
      <ExternalLink className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </div>
    <div className="flex flex-wrap justify-center mb-2">
      {product.tags.map((tag) => (
        <Badge key={tag} variant="outline" className="mr-2 mb-2">
          {tag}
        </Badge>
      ))}
    </div>
    <h2 className="text-lg font-semibold mb-2 text-center">{product.name}</h2>
    <p className="text-gray-600 mb-4 text-center">
      ${product.price.toFixed(2)}
    </p>
    <Button className="" onClick={AddToCartAction}>{APP_CONSTANTS.ADD_CART_LABEL}</Button>
  </div>
);
