/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yppz7QmXaJz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { SheetTrigger, SheetTitle, SheetHeader, SheetContent, Sheet } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import React from "react";
import {
    StarIcon,
    GlobeIcon,
    ChevronDownIcon,
    BookIcon,
    SearchIcon
} from "@/components/icon";

export default function CampusWelcomePage() {
    return (
        <>
            <header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white md:px-6 lg:px-8">
                <div className="flex items-center space-x-4">
                    <Link className="text-xl font-bold" href="/">
                        CampusHub
                    </Link>
                    <div className="hidden space-x-4 md:flex">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size="sm" variant="ghost">
                                    <GlobeIcon className="h-5 w-5" />
                                    <span className="ml-2">English</span>
                                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem>
                                    <Link className="flex items-center space-x-2" href="#">
                                        <GlobeIcon className="h-5 w-5" />
                                        <span>English</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link className="flex items-center space-x-2" href="#">
                                        <GlobeIcon className="h-5 w-5" />
                                        <span>Español</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link className="flex items-center space-x-2" href="#">
                                        <GlobeIcon className="h-5 w-5" />
                                        <span>Français</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <Button size="sm" variant="ghost">
                        <SearchIcon className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="sm" variant="ghost">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                                    <AvatarFallback>JP</AvatarFallback>
                                </Avatar>
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>User Profile</SheetTitle>
                            </SheetHeader>
                            <div className="grid gap-4 py-4">
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-16 w-16">
                                        <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                                        <AvatarFallback>JP</AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1">
                                        <div className="text-lg font-semibold">Jared Palmer</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">@jaredpalmer</div>
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-medium">Change Password</div>
                                        <Button size="sm" variant="outline">
                                            Update
                                        </Button>
                                    </div>
                                    <Separator />
                                    <div className="grid gap-2">
                                        <div className="text-sm font-medium">Course Progress</div>
                                        <div className="grid gap-2">
                                            <div className="flex items-center justify-between">
                                                <div>Introduction to Web Development</div>
                                                <div className="flex items-center gap-2">
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">90%</div>
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                    <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div>Python for Beginners</div>
                                                <div className="flex items-center gap-2">
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">80%</div>
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                    <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div>Data Structures and Algorithms</div>
                                                <div className="flex items-center gap-2">
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">75%</div>
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                    <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                                                    <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div>Introduction to Machine Learning</div>
                                                <div className="flex items-center gap-2">
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">95%</div>
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                    <StarIcon className="h-5 w-5 fill-yellow-500" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
            <main className="flex flex-col min-h-[100dvh]">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#4338ca] to-[#6366f1]">
                    <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                                    Unlock Your Academic Potential with CampusHub
                                </h1>
                                <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Discover a world of educational resources, interactive courses, and collaborative opportunities to
                                    elevate your learning experience.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#4338ca] shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                    href="/course"
                                >
                                    Explore Courses
                                </Link>
                                <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                    href="/login"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                        <img
                            alt="Hero"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
                            height={550}
                            src="https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-home-cover.png"
                            width={550}
                        />
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
                                src="https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-home-cover.png"
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
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                Elevate Your Learning Experience
                            </h2>
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
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

