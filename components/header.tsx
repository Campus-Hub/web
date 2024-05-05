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
import {list} from '@/lib/mock';
import router from '@/lib/router';
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Separator} from "@/components/ui/separator";

export function CampusHeader() {
	
    const learnArr = list.map(v=> v.courses).flat(1).filter(v=>{
    v.learning_propg = (v.completed_chapter / v.total_chapter * 100).toFixed(2)
    return v.is_learning;
    });
	
    return (
        <header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white md:px-6 lg:px-8">
            <div className="flex items-center space-x-4">
                <Link className="text-xl font-bold" href="/">
                    CampusHub
                </Link>
                <div className="hidden space-x-4 md:flex">
                    <DropdownLanguageMenu/>
                    <DropdownVersionMenu/>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <Button size="sm" variant="ghost">
                    <SearchIcon className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                </Button>
                <Sheet>
                    <SheetTrigger asChild>
                        {/*<Button size="sm" variant="ghost">*/}
                        {/*    <Avatar className="h-8 w-8">*/}
                        {/*        <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />*/}
                        {/*        <AvatarFallback>JP</AvatarFallback>*/}
                        {/*    </Avatar>*/}
                        {/*</Button>*/}
                        <Button size="sm" variant="ghost">
                            <MenuIcon className="h-5 w-5" />
                            <span className="sr-only">Menu</span>
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
                                    <AvatarFallback>AX</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <div className="text-lg font-semibold">Anxiu</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">@anxiu</div>
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
                                        {learnArr.map(v=>(
                                            <div key={v.id} className="flex items-center justify-between">
                                                <div>{v.title}</div>
                                                <div className="flex items-center gap-2">
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">{v.learning_propg}%</div>
                                                    { new Array(5).fill(1).map((c,idx)=> (<StarIcon key={idx} className={`h-5 w-5  ${ (idx + 1) * 20 > v.learning_propg ? ' stroke-muted-foreground fill-muted' : 'fill-yellow-500' }`} />)) }

                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

        </header>
    )
}
