import { connectDB } from "@/lib/mongodb";
import Connection from "@/models/Connection";

export async function GET() {
    try {
        await connectDB(); //db conection
        const connections = await Connection.find().sort({ createdAt : -1 })
        return Response.json(connections)
    } catch (error) {
        return Response.json({error : "failed to fetch connectoins"},{status:500})
    }
}