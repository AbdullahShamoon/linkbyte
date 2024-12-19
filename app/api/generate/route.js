import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json()
    const client = await clientPromise
    const db = client.db("linkbyte")
    const collection = db.collection("links")

    //check if short url exists
    const existing = await collection.findOne({ shorturl: body.shorturl })
    if (existing) {
        return Response.json({ success: false , error: true , message: "shorturl already exists" })
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })


    return Response.json({ success: true , error: false , message: "URL generated successfully" })
}