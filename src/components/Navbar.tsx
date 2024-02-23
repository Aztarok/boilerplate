import React, { Suspense } from "react";
import Profile from "./Profile";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-20">
            <Link href="/">
                <h1 className="text-xl font-bold">Logo</h1>
            </Link>
            <Link href="/">
                <h1 className="text-xl font-bold">Logo</h1>
            </Link>
            <div className="w-[50px] rounded-full">
                <Suspense>
                    <Profile />
                </Suspense>
            </div>
        </div>
    );
};

export default Navbar;
