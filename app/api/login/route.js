import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json()
    const { username, password } = body;

    const validUser = process.env.ADMIN_USERNAME
    const validPass = process.env.ADMIN_PASSWORD

    if (username === validUser && password === validPass) {
        return NextResponse.json({ success: true });
    } else {
        return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
    }
}