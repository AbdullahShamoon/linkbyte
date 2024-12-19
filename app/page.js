'use client';
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [url, setUrl] = useState("")
  const [shorturl, setShorturl] = useState("")
  const [generated, setGenerated] = useState()

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        setShorturl("")
        if(result.success==true)setUrl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }


  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5 bg-gray-50 min-w-fit w-1/2 mx-auto p-5 border rounded-3xl">
        <input type="text" className="w-full py-1 px-2 rounded-2xl border mb-2 " placeholder="Enter your URL" value={url} onChange={e => setUrl(e.target.value)} />
        <input type="text" className="w-full py-1 px-2 rounded-2xl border mb-2" placeholder="Enter your preferred short URL" value={shorturl} onChange={e => setShorturl(e.target.value)} />
        <button onClick={generate} className="relative rounded-full px-3 py-2 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Generate</span>
        </button>
        {generated && <>
        <span className="font-bold text-lg">Your Link</span>
        <div><Link href={generated} className="font-prosto">{generated}</Link></div>
        </>}
      </div>
    </>
  );
}
