"use client"
import { useEffect, useState } from "react";

export default function Home() {
    type Order = {
        id: number,
        name: string
    }

    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        fetch("/api/orders")
            .then(res => res.json())
            .then(setOrders)
    }, [])

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white">
                <div>
                    <input type="text" className="border-2 text-black border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" placeholder="Item"></input>
                    <button className="bg-blue-500 text-black px-4 py-2 rounded">Add</button>
                </div>

                <div className="border-2">
                    {orders.map(order => (
                        <div>
                            <p>{order.id}</p>
                            <p>{order.name}</p>
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
}
