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
import {ChevronDownIcon, GlobeIcon} from "@/components/icon";

// type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropdownLanguageMenu() {
    // const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    // const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    // const [showPanel, setShowPanel] = React.useState<Checked>(false)

    return (
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
    )
}

