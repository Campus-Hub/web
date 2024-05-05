"use client"

import * as React from "react"
import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
    Card
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CampusFooter } from "@/components/footer";
import { CampusHeader } from "@/components/header";
import { useState, useEffect } from "react";
// import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation';

interface User {
    user_name: string;
    email_addr: string;
    password: string;
}

export default function UserLoginPage() {

    // const [data, setData] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    const router = useRouter();

    useEffect(() => {
        fetch('data/user_data.json')
            .then(response => response.json())
            .then(setUsers)
            .catch(error => console.error('Error loading users:', error));
    }, []);

    // 处理登录的用户校验逻辑
    const handleLogin = () => {
        const user = users.find(user => user.user_name === username && user.email_addr === email && user.password === password);
        if (user) {
            console.log("Login successful!");
            // redirect("/course")
            router.push('/course')
        } else {
            setLoginError("Invalid credentials");
        }
    };

    // 处理注册的用户数据写入逻辑
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <>
            <CampusHeader/>
            <main className="flex flex-col min-h-[100dvh]">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#4338ca] to-[#6366f1]">
                    <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                                    Welcome to CampusHub
                                </h1>
                                <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Unlock your academic potential with our diverse range of courses and collaborative learning
                                    opportunities.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <Card className="w-full max-w-md mx-auto">
                                <CardHeader>
                                    <CardTitle>Login</CardTitle>
                                    <CardDescription>Enter your credentials to access your account.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="username">Username</Label>
                                        <Input id="username" placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)}/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="Enter your email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" placeholder="Enter your password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                                    </div>
                                    {loginError && <p className="text-red-500">{loginError}</p>}
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="policy" />
                                        <Label htmlFor="policy">
                                            I agree to the
                                            <Link className="underline" href="#">
                                                privacy policy
                                            </Link>
                                        </Label>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Button className="w-full" onClick={handleLogin}>
                                            Login
                                        </Button>
                                        {/*<Button className="w-full" variant="outline">*/}
                                        {/*    Sign Up*/}
                                        {/*</Button>*/}
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Featured Courses
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Diverse Curriculum</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    From introductory programming to advanced data science, our courses cover a wide range of topics to
                                    cater to your academic interests.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <img
                                alt="Image"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                height={310}
                                src="https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png"
                                width={550}
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Web Development</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Master the fundamentals of front-end and back-end web development.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Data Science</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Dive into the world of data analysis, machine learning, and artificial intelligence.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Mobile Development</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Learn to build mobile apps for iOS and Android platforms.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Elevate Your Learning Experience</h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Discover a world of educational resources, interactive courses, and collaborative opportunities to reach
                                new heights in your academic journey.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-[#4338ca] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#4338ca]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                href="#"
                            >
                                Sign Up
                            </Link>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                href="#"
                            >
                                About
                            </Link>
                        </div>
                    </div>
                </section>
                {/* General Footer */}
                <CampusFooter/>
            </main>
        </>

    )
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aR5lYpswb97
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */