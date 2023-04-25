"use client" // by default server component, use client needed to importing useState

import {useState} from "react"

export default function Page() {
    const [message,setMessage] = useState("hello")

    return <div>
        <h1>Hello, Next.js! {message}</h1>
        <div id="root"></div>
    </div>
}