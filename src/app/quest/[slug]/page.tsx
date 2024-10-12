'use client'

import { useState, Suspense } from "react";

export default function Quest({ params } : { params: { slug: string }}) {
    const [hint, setHint] = useState("Loading...");
    const [hintLoaded, setHintLoaded] = useState(false);

    async function fetchData() {
        try {
            const response = await fetch(`http://localhost:3000/api/quest/${params.slug}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            setHintLoaded(true);
            setHint(data.hint);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    // Call the function
    fetchData();


  return (
    <div
      id="container"
      className="bg-background flex flex-col h-screen p-8 text-text w-screen"
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
                className="bg-accent flex h-fit items-center justify-center min-w-[85%] p-8 rounded-2xl w-auto"
            >
                {hintLoaded &&
                    <div>
                        {hint}
                    </div>
                }
                {!hintLoaded &&
                    <div>
                        Loading hint...
                    </div>
                }
            </div>
        </div>
    </div>
  );
}
