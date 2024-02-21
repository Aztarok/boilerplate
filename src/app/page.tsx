import Price from "@/components/subscription/price";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";

export default function Home() {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-xl font-bold">Text Links</h1>
                <div className="space-x-2">
                    <Button variant="outline" asChild>
                        <Link href="/dashboard" className="underline">
                            /Dashboard
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/profile" className="underline">
                            /Profile
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/subscription" className="underline">
                            /Subscription
                        </Link>
                    </Button>
                </div>
            </div>
            <Price />
            <div className=" border-t pt-10">
                <h1 className="text-xl font-bold">
                    Thank you cloning my boilerplate project.
                </h1>
                <p>If you want to support me. Follow me here</p>
                <div className="mt-5">
                    <div className="flex items-center gap-5">
                        <Link href={"https://www.youtube.com/"} target="_blank">
                            <FaYoutube className="h-8 w-8 hover:scale-105" />
                        </Link>
                        <Link
                            href={"https://github.com/Aztarok"}
                            target="_blank"
                        >
                            <FaGithub className="h-8 w-8 hover:scale-105" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
