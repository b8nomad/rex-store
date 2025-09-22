import Navigation from "@/components/app/navigation";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex min-h-screen flex-col">
            <Navigation />
            <div className="w-full">
                <div className="max-w-[80%] mx-auto py-5">
                        {children}
                </div>
            </div>
        </main>
    );
}
