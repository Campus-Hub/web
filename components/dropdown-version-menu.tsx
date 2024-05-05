"use client"

import * as React from "react"
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import {BookIcon} from "@/components/icon";

// type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropdownVersionMenu() {
    // const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    // const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    // const [showPanel, setShowPanel] = React.useState<Checked>(false)

    return (
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
    )
}

function ChevronDownIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}