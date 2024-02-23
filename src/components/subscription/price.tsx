import { CheckCircle2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Checkout from "@/app/subscription/Checkout";

const Price = () => {
    const prices = [
        {
            title: "Hobby",
            description: "Start your side project",
            benefits: [
                "Improved productivity",
                "Enhanced Performance",
                "Cost savings",
                "Improved communication",
                "Enhanced Collaboration"
            ],
            amount: 10,
            priceId: "price_1OmpdMF0VaBw48XtWFUfyjKb"
        },
        {
            title: "Pro",
            description: "Start your side project",
            benefits: [
                "Improved productivity",
                "Enhanced Performance",
                "Cost savings",
                "Improved communication",
                "Enhanced Collaboration"
            ],
            amount: 20,
            priceId: "price_1OmpdnF0VaBw48XtMKayiDzH"
        },
        {
            title: "Enterprise",
            description: "Start your side project",
            benefits: [
                "Improved productivity",
                "Enhanced Performance",
                "Cost savings",
                "Improved communication",
                "Enhanced Collaboration"
            ],
            amount: 100,
            priceId: "price_1OmpeJF0VaBw48XtlprcqIXG"
        }
    ];
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {prices.map((price, index) => {
                    const isPopular = index === 1;
                    return (
                        <div
                            key={index}
                            className={cn("border rounded-md p-5 space-y-5", {
                                "ring-2 ring-green-500": isPopular
                            })}
                        >
                            {isPopular && (
                                <div className="inline-block">
                                    <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-blue-400">
                                        Most Popular
                                    </h1>
                                </div>
                            )}
                            <div className="space-y-3">
                                <h1 className="text-2xl font-bold">
                                    {price.title}
                                </h1>
                                <h1 className="text-3xl font-bold">
                                    {price.amount}$
                                </h1>
                                <h1 className="text-sm text-gray-400 mt-2">
                                    {price.description}
                                </h1>
                            </div>
                            <div className="space-y-3">
                                {price.benefits.map((benefit, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2"
                                        >
                                            <CheckCircle2 />
                                            <h1 className="text-sm text-gray-400">
                                                {benefit}
                                            </h1>
                                        </div>
                                    );
                                })}
                            </div>
                            <Checkout priceId={price.priceId} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Price;
