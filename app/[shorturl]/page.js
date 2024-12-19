import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
    const shorturl = (await params).shorturl

    const client = await clientPromise
    const db = client.db("linkbyte")
    const collection = db.collection("links")

    const existing = await collection.findOne({ shorturl: shorturl })
    if (existing) {
        redirect(existing.url)
    }
    else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }



    return <div>My Post: {shorturl}</div>
  }