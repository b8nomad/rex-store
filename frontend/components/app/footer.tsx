import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import APP_CONSTANTS from '@/app/constants/labels';

const Footer: React.FC = () => {
    const isSignedIn = false;

    return (
        <footer className="border-t w-full bg-background">
            <div className="max-w-[80%] mx-auto flex justify-center md:justify-around py-6">
                <div className="max-w-[40%] text-center md:text-left mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold">
                        <Link href="/">{APP_CONSTANTS.APP_TITLE}</Link>
                    </h1>
                    <p className="text-muted-foreground text-sm mt-2">
                        {APP_CONSTANTS.FOOTER_DESCRIPTION}
                    </p>
                </div>
                <div className="hidden md:flex gap-10 items-start">
                    <ul className="list-none flex flex-col gap-2">
                        {APP_CONSTANTS.FOOTER_LINKS.map((item, idx) => {
                            const { require_auth } = item;
                            if (require_auth && !isSignedIn) return null;
                            return (
                                <li key={idx}>
                                    <Link href={item.url} className="hover:text-primary/70 cursor-pointer">
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex items-center gap-5">
                        <Button asChild>
                            <Link href="/cart">
                                <ShoppingBag className="mr-2" /> 0
                            </Link>
                        </Button>
                        {isSignedIn ? (
                            <Button variant="outline">Sign Out</Button>
                        ) : (
                            <Button variant="outline" asChild>
                                <Link href="/auth/signin">Sign In</Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            <div className="text-center text-xs text-muted-foreground py-2">
                &copy; {new Date().getFullYear()} {APP_CONSTANTS.APP_TITLE}. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;