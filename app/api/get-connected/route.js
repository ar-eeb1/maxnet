import { connectDB } from "@/lib/mongodb";
import Connection from "@/models/Connection";

export async function POST(request) {
  try {
    const body = await request.json();

    await connectDB(); // connect to DB
    const newConnection = await Connection.create(body);

    return Response.json({
      success: true,
      message: "Connection saved to DB",
      data: newConnection,
    });
  } catch (err) {
    console.error("❌ Error saving connection:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
