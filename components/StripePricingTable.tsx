"use client";

import Script from "next/script";
import React from "react";

export default function StripePricingTable() {
    return (
        <>
            <Script src="https://js.stripe.com/v3/pricing-table.js" async />
            {/* @ts-ignore */}
            <stripe-pricing-table
                pricing-table-id="prctbl_1QbTkPFxVqqpKakgRelTIA0M"
                publishable-key={process.env
                    .NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""}
            />
        </>
    );
}
