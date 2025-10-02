import React from 'react'
import { ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import APP_CONSTANTS from '@/app/constants/labels';

const navigation = () => {
    const isSignedIn = false;
    
    return (
        <div className="border-b w-full">
            <div className="max-w-[80%] mx-auto flex justify-between py-5">
                <div className="">
                    <h1 className='text-2xl font-bold'>
                        <Link href="/">{APP_CONSTANTS.APP_TITLE}</Link>
                    </h1>
                </div>
                <div className="flex gap-10 items-center">
                    <ul className='list-none flex items-center gap-5'>
                       {APP_CONSTANTS.NAVIGATION_LABELS.map((item, index) => {
                          const { require_auth } = item;
                           return require_auth && !isSignedIn ? null :  (
                            <Link href={item.url} key={index} className="hover:text-primary/70 cursor-pointer">{item.title}</Link>
                        )
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