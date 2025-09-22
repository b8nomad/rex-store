"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

const SignupPage = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div>
            <Card className="w-[400px] m-auto mt-20">
                <CardHeader>
                    <CardTitle>Create your account</CardTitle>
                    <CardDescription>
                        Enter your details below to sign up
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="grid w-full gap-4">
                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" type="text" placeholder="Enter your name" />
                        </div>
                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="Enter your password" />
                        </div>
                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <div className="flex items-center gap-2">
                                <Input id="confirmPassword" type={isPasswordVisible ? "text" : "password"} placeholder="Confirm your password" />
                                <Button variant="outline" className="text-sm mt-1" type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                                    {isPasswordVisible ? <EyeOff /> : <Eye />}
                                </Button>
                            </div>
                        </div>
                        <Button type="submit">Sign Up</Button>
                        <p className="text-sm text-muted-foreground">
                            by signing up, you agree to our <Button variant="link" className='p-0'>Terms of Service</Button> and <Button variant="link" className='p-0'>Privacy Policy</Button>.
                        </p>
                    </form>
                    <div className="my-4">
                        <div className="border-t border-gray-200" />
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/auth/signin">Already have an account? Sign In</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default SignupPage