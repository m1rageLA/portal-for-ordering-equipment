import { orderService } from "@/modules/order/order.service";
import { CreateOrderDto } from "@/modules/order/order.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body: CreateOrderDto = await req.json();
    const result = await orderService.create(body);
    return NextResponse.json(result);
}

export async function GET(req: NextRequest) {
    const result = await orderService.getAll();
    return NextResponse.json(result);
}

