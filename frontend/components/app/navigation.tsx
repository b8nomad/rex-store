import React from 'react'
import { ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const navigation = () => {
    const isSignedIn = false;
    const featuredCategories = [
        { name: "shirts", href: "#" },
        { name: "shoes", href: "#" },
    ];
    return (
        <div className="border-b w-full">
            <div className="max-w-[80%] mx-auto flex justify-between py-5">
                <div className="">
                    <h1 className='text-2xl font-bold'>
                        <Link href="/">Rex Store</Link>
                    </h1>
                </div>
                <div className="flex gap-10 items-center">
                    <ul className='list-none flex items-center gap-5'>
                        {featuredCategories.map((item) => {
                            return <li key={item.name} className="hover:text-red-500 cursor-pointer">{item.name}</li>
                        })}
                    </ul>
                    <div className="flex items-center gap-5">

                    <Button asChild><Link href="/cart"><ShoppingBag /> 0</Link></Button>
                    {isSignedIn ? <Button variant="outline">Sign Out</Button> : <Button variant="outline" asChild><Link href="/auth/signin">Sign In</Link></Button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navigation;