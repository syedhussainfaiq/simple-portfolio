import Link from "next/link";

export default function Navbar () {
    return(
        <div className="bg-gray-900 p-4 text-white">
            <div className="container flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
                <div className="space-x-8 ">
                    <Link href="/Home"className=" hover:text-gray-400">Home</Link>
                    <Link href="/About" className=" hover:text-gray-400">About</Link>
                    <Link href="/Contact" className=" hover:text-gray-400">Contact</Link>
                </div>
            </div>
        </div>
    )
}