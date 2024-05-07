/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OZmRZ8zXV8a
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    PopoverTrigger,
    PopoverContent,
    Popover
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenu
} from "@/components/ui/dropdown-menu"
import {
    BuildingIcon,
    CalendarDaysIcon,
    SearchIcon,
    ChevronDownIcon
} from "@/components/icon";
import {useState} from 'react'
import {list} from '@/lib/mock';
// @ts-ignore
export default function CourseSearchBar(props) {
	const [search,setSearch] = useState('')
    // @ts-ignore
    return (
        <div className="flex items-center gap-4">
            <Popover>
                <PopoverTrigger asChild>
                    <Button className="flex items-center gap-2" variant="outline">
                        <CalendarDaysIcon className="h-5 w-5" />
                        <span>Select Dates</span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[340px] p-4">
                    <Calendar mode="range" onDayClick={date =>  props.changeDate(date )} />
                </PopoverContent>
            </Popover>
            <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                {/*// @ts-ignore*/}
                <Input
                    className="h-10 w-[300px] pl-10 focus:border-gray-400 dark:bg-gray-800 dark:text-gray-50 dark:placeholder:text-gray-400"
                    placeholder="Search courses..."
                    type="search"
                    // @ts-ignore
					onInput={e=>props.changeTitle(e.target.value )}
                />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="flex items-center gap-2" variant="outline">
                        <BuildingIcon className="h-5 w-5" />
                        <span>Filter by Organization</span>
                        <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[300px] p-2">
                    <div className="space-y-2">
                        <div className="relative">
                            <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                            <Input
                                className="h-10 w-full pl-10 focus:border-gray-400 dark:bg-gray-800 dark:text-gray-50 dark:placeholder:text-gray-400"
                                placeholder="Search organizations..."
                                type="search"
								value={search}
								onChange={ e=> setSearch(e.target.value ) }
                            />
                        </div>
						
						{ list.filter(v=> v.category.includes(search)).map(v=> (
							<DropdownMenuCheckboxItem key={v.id} onClick={()=>props.changeCategory(v.id)}>
							    <div className="flex items-center justify-between">
							        <span>{v.category}</span>
							        <span className="text-sm text-gray-500 dark:text-gray-400">({v.courses.length} courses)</span>
							    </div>
							</DropdownMenuCheckboxItem>
						))}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        // <header className="flex items-center justify-between bg-white px-4 py-3 shadow-sm dark:bg-gray-950">
        //
        // </header>
    )
}








