'use client';
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState(false)

  

  return (
    <>
     <div>
      <input type="text" placeholder="Enter your URL" value={url} onChange={e => setUrl(e.target.value)}/>
      <input type="text" placeholder="Enter your preferred short URL" value={shortUrl} onChange={e => setShortUrl(e.target.value)} />
      <button>Generate</button>
     </div>
    </>
  );
}
