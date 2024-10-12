'use client'

import { Suspense } from "react";
import Hint from "./hint";
import Loading from "@/app/quest/[slug]/loading";

export default function Quest({ params } : { params: { slug: string }}) {

  return (
    <div
      id="container"
      className="flex flex-col h-screen p-8 text-text w-screen"
    >
        <div
            id="navbar"
            className="flex justify-start"
        >
            <div
                className="text-3xl font-robotoslab font-bold"
            >
                QwestMaster
            </div>
        </div>
        <div
            id="content-container"
            className="flex flex-grow justify-center items-center"
        >
            <div
                id="quest-block"
                className="bg-gradient-to-br from-accent to-background flex h-fit items-center justify-center w-[95%] p-8 rounded-2xl"
            >
                <Suspense fallback={<Loading/>}>
                    <Hint params={params} />
                </Suspense>
            </div>
        </div>
    </div>
  );
}
