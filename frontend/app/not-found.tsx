import Navigation from "@/components/app/navigation";
import { HeartCrack } from "lucide-react";
import React from "react";
import Link from "next/link";
import APP_CONSTANTS from "./constants/labels";

const notFound = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <div className="flex flex-col items-center justify-center flex-1 w-full rounded-lg shadow-md">
        <div className="bg-red-100 rounded-full p-4 mb-6">
          <HeartCrack className="text-red-500 w-12 h-12" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">
          {APP_CONSTANTS.NOT_FOUND.TITLE}
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          {APP_CONSTANTS.NOT_FOUND.DESCRIPTION}
        </p>

        <Link
          href={APP_CONSTANTS.NOT_FOUND.BUTTON.url}
          className="inline-block px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          {APP_CONSTANTS.NOT_FOUND.BUTTON.title}
        </Link>
      </div>
    </main>
  );
};

export default notFound;
