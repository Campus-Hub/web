/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j067XZezaMU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import {
    AvatarImage,
    AvatarFallback,
    Avatar
} from "@/components/ui/avatar"
import {
    SheetTrigger,
    SheetTitle,
    SheetHeader,
    SheetContent,
    Sheet
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import React from "react";
import {
    StarIcon,
    BookIcon,
    ChevronDownIcon,
    GlobeIcon,
    SearchIcon
} from "@/components/icon";

export default function CourseCreatePage() {
    return (
        <>
            <header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white md:px-6 lg:px-8">
                <div className="flex items-center space-x-4">
                    <Link className="text-xl font-bold" href="#">
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
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size="sm" variant="ghost">
                                    <BookIcon className="h-5 w-5" />
                                    <span className="ml-2">Version 1.2</span>
                                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem>
                                    <Link className="flex items-center space-x-2" href="#">
                                        <BookIcon className="h-5 w-5" />
                                        <span>Version 1.0</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link className="flex items-center space-x-2" href="#">
                                        <BookIcon className="h-5 w-5" />
                                        <span>Version 1.1</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link className="flex items-center space-x-2" href="#">
                                        <BookIcon className="h-5 w-5" />
                                        <span>Version 1.2</span>
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
            <main className="container mx-auto my-8 px-4 md:px-6 lg:px-8">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold">Create a New Course</h1>
                        <p className="mt-4 text-gray-500">Fill out the form to create a new course on CampusHub.</p>
                    </div>
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="course-name">Course Name</Label>
                                <Input id="course-name" placeholder="Enter course name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="course-code">Course Code</Label>
                                <Input id="course-code" placeholder="Enter course code" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="course-link">Course Link</Label>
                            <Input id="course-link" placeholder="Enter course link" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="committee-members">Committee Members</Label>
                            <div className="grid gap-4">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="member-name">Name</Label>
                                        <Input id="member-name" placeholder="Enter member name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="member-email">Email</Label>
                                        <Input id="member-email" placeholder="Enter member email" type="email" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="member-role">Role</Label>
                                        <Select defaultValue="instructor" id="member-role">
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="instructor">Instructor</SelectItem>
                                                <SelectItem value="ta">Teaching Assistant</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <Button size="sm">Add Member</Button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="course-description">Course Description</Label>
                            <Textarea className="min-h-[100px]" id="course-description" placeholder="Enter course description" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="course-content">Course Content</Label>
                            <Textarea
                                className="min-h-[200px]"
                                id="course-content"
                                placeholder="Enter course content in Markdown format"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="course-duration">Course Duration</Label>
                                <Select defaultValue="12-weeks" id="course-duration">
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select duration" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="8-weeks">8 Weeks</SelectItem>
                                        <SelectItem value="9-weeks">9 Weeks</SelectItem>
                                        <SelectItem value="12-weeks">12 Weeks</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="course-difficulty">Course Difficulty</Label>
                                <Select defaultValue="beginner" id="course-difficulty">
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select difficulty" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="beginner">Beginner</SelectItem>
                                        <SelectItem value="intermediate">Intermediate</SelectItem>
                                        <SelectItem value="advanced">Advanced</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="course-certification">Course Certification</Label>
                                <Select defaultValue="yes" id="course-certification">
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select certification" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="yes">Yes</SelectItem>
                                        <SelectItem value="no">No</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="course-format">Course Format</Label>
                                <Select defaultValue="online" id="course-format">
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select format" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="online">Online</SelectItem>
                                        <SelectItem value="offline">Offline</SelectItem>
                                        <SelectItem value="mixed">Mixed Mode</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="course-resources">Course Resources</Label>
                            <div className="grid gap-4">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="resource-file">File</Label>
                                        <Input id="resource-file" type="file" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="resource-type">Type</Label>
                                        <Select defaultValue="syllabus" id="resource-type">
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="syllabus">Course Syllabus</SelectItem>
                                                <SelectItem value="video">Lecture Video</SelectItem>
                                                <SelectItem value="slides">Presentation Slides</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <Button size="sm">Add Resource</Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit">Create Course</Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

