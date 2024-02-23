"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import useUser from "../hook/useUser";
import { useRouter } from "next/navigation";
import { checkout } from "@/lib/actions/stripe";
import { loadStripe } from "@stripe/stripe-js";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";

const Checkout = ({ priceId }: { priceId: string }) => {
    const { data: user } = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        if (user?.id) {
            setLoading(true);
            const data = JSON.parse(
                await checkout(
                    user.email,
                    priceId,
                    location.origin + "/success"
                )
            );
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!);
            const res = await stripe?.redirectToCheckout({
                sessionId: data.id
            });
            if (res?.error) {
                alert("Failed to checkout");
            }
        } else {
            router.push("/auth?next=" + location.pathname);
        }
        setLoading(false);
    };

    return (
        <div>
            <Button
                variant="goldHover"
                className="w-full flex items-center gap-2"
                onClick={handleCheckout}
            >
                Get Started{" "}
                <AiOutlineLoading3Quarters
                    className={cn("animate-spin", loading ? "block" : "hidden")}
                />
            </Button>
        </div>
    );
};

export default Checkout;
