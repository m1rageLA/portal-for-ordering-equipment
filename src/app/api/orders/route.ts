import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    return NextResponse.json([
        { id: 0, name: "John" },
        { id: 1, name: "Mateusz" },
        { id: 2, name: "Tymur" }
    ]);
}