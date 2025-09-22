"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

const page = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (
        <div className="">
            <Card className="w-[400px] m-auto mt-20">
                <CardHeader>
                    <CardTitle>Sign In to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to sign in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full gap-4">
                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="flex items-center gap-2">
                                <Input id="password" type={isPasswordVisible ? "text" : "password"} placeholder="Enter your password" />
                                <Button variant="outline" className="text-sm mt-1" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>{isPasswordVisible ? <EyeOff /> : <Eye />}</Button>
                            </div>
                        </div>
                        <Button variant="link" asChild>
                            <Link href="/forgot-password">forgot password?</Link>
                        </Button>
                        <Button type="submit">Sign In</Button>
                    </div>
                    <div className="my-4">
                        <div className="border-t border-gray-200" />
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/auth/signup">Create an account</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default page