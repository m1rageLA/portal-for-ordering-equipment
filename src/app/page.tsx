import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white">
                <div>
                    <input type="text" className="border-2 text-black border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" placeholder="Item"></input>
                    <button className="bg-blue-500 text-black px-4 py-2 rounded">Add</button>
                </div>
            </main>
        </div>
    );
}
