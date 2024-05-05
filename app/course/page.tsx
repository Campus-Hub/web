"use client"

import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
    PaginationPrevious,
    PaginationItem,
    PaginationLink,
    PaginationEllipsis,
    PaginationNext,
    PaginationContent,
    Pagination
} from "@/components/ui/pagination";
import {
    StarIcon
} from "@/components/icon";
import { CampusHeader } from "@/components/header";
import * as React from "react";
import CourseSearchBar from "@/components/course-search-bar";
import { list } from '@/lib/mock';
import { useState } from 'react'
import {CourseDetailSheet} from "@/components/course-detail-sheet";

export default function CourseHomePage() {
	const [params,setParams] = useState({
		page:1,
		limit:8,
		title: '',
		date: '',
		category: 1,
	})
	
	const {page,limit,title,date,category} = params;
	let data: ({
      date: string;
      star: string;
      thumb: string;
      total_chapter: number;
      format: string;
      completed_chapter: number;
      title: string;
      downloadPdfUrl: string;
      content: string;
      certification: string;
      duration: number;
      difficulty: string;
      des: string;
      is_learning: boolean;
      id: number;
      state: string
  } | {
      date: string;
      star: string;
      thumb: string;
      total_chapter: number;
      format: string;
      completed_chapter: number;
      title: string;
      certification: string;
      duration: number;
      difficulty: string;
      des: string;
      id: number;
      state: string
  })[] = list.find(v=>v.id === category);
	data = data && data.courses || []
	data = data.filter(v=> (!title || v.title.includes(title) ) && (!date || v.date === date) )

    return (
        <>
            <CampusHeader/>
            {/*<CourseDetailSheet/>*/}
            <main className="container mx-auto my-8 px-4 md:px-6 lg:px-8">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold">Courses</h1>
                        <p className="mt-4 text-gray-500">
                            Explore a wide range of public educational courses on Campus Hub Online.
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="w-full max-w-md">
                            <CourseSearchBar changeDate={ d=>  setParams({...params,date: `${d.getFullYear()}-${d.getMonth() < 9 ? '0' + (d.getMonth()+1) : (d.getMonth()+1)  }-${d.getDate() < 10 ? '0' + d.getDate() : d.getDate()  }` }) } changeTitle={title=> setParams({...params,title})} changeCategory={category=> setParams({...params,category})} />
                            {/*<Input*/}
                            {/*    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"*/}
                            {/*    placeholder="Search courses..."*/}
                            {/*    type="search"*/}
                            {/*/>*/}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        { data.slice( (page - 1) * limit, page * limit ).map((v,idx)=> (
							<div key={idx} className="rounded-md bg-white shadow-md dark:bg-gray-800">
							    <a className="block h-48 overflow-hidden rounded-t-md" href={ `/course/${v.id}` }>
							        <img
							            alt="Course Image"
							            className="h-full w-full object-cover"
							            height={300}
							            src={v.thumb}
							            style={{
							                aspectRatio: "400/300",
							                objectFit: "cover",
							            }}
							            width={400}
							        />
							    </a>
							    <div className="p-4">
							        <h3 className="text-lg font-bold">{v.title}</h3>
							        <p className="mt-2 text-gray-500 dark:text-gray-400">
							            {v.des}
							        </p>
							        <div className="mt-4 flex items-center justify-between">
							            <div className="flex items-center space-x-2">
							                <StarIcon className="h-5 w-5 fill-yellow-500" />
							                <span className="text-gray-500 dark:text-gray-400">{v.star}</span>
							            </div>
							            <span className="text-blue-500">{v.state}</span>
							        </div>
							    </div>
							</div>
						)) }
                    </div>
                    <div className="flex justify-center">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious onClick={ ()=> page > 1 && setParams({...params,page: page - 1}) }   />
                                </PaginationItem>
                               { new Array( Math.ceil(data.length / limit) ).fill(1).map((v,idx)=> ( 
								   <PaginationItem key={idx}  >
										<PaginationLink isActive={page === idx + 1} onClick={ ()=> setParams({...params,page: idx + 1}) } >{idx + 1}</PaginationLink>
									</PaginationItem>
								)) }
                               
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext onClick={ ()=> page <  Math.ceil(data.length / limit) && setParams({...params,page: page + 1}) }   />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </main>
        </>
    )
}


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oGNLQ4BmSCS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
