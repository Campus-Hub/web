import * as React from "react"

import Link from "next/link";
import { Button } from "@/components/ui/button"
import { DropdownLanguageMenu } from "@/components/dropdown-language-menu";
import { DropdownVersionMenu } from "@/components/dropdown-version-menu";
import {
    MenuIcon,
    SearchIcon,
    StarIcon
} from "@/components/icon";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";
import {list} from '@/lib/mock';
import router from '@/lib/router';

export function CampusFooter() {
    return (
        <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
            <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
                <div className="grid gap-1">
                    <h3 className="font-semibold">Company</h3>
                    <Link href="#">About Us</Link>
                    <Link href="#">Our Team</Link>
                    <Link href="#">Careers</Link>
                    <Link href="#">News</Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Products</h3>
                    <Link href="#">Courses</Link>
                    <Link href="#">Resources</Link>
                    <Link href="#">Community</Link>
                    <Link href="#">Support</Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Resources</h3>
                    <Link href="#">Blog</Link>
                    <Link href="#">Documentation</Link>
                    <Link href="#">Help Center</Link>
                    <Link href="#">FAQs</Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Legal</h3>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of Service</Link>
                    <Link href="#">Cookie Policy</Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Contact</h3>
                    <Link href="#">Support</Link>
                    <Link href="#">Sales</Link>
                    <Link href="#">Press</Link>
                    <Link href="#">Partnerships</Link>
                </div>
            </div>
        </footer>
    )
}


