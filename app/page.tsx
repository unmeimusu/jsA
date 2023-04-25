"use client"

import {useState} from "react"

export default function Page() {
    const [message,setMessage] = useState("hello")

    return <div>
        <h1>Hello, Next.js! {message}</h1>
        <div id="root"></div>
    </div>
}