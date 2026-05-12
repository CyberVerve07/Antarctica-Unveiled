"use client";

import { ClimateChart } from "@/components/climate-chart";
import { StationAccordion } from "@/components/station-accordion";
import { Timeline } from "@/components/timeline";
import { ProseContent } from "@/components/prose-content";

export function ContentBody({ slug, initialContent }: { slug: string, initialContent: string }) {
    if (!initialContent) {
        return <p>An error occurred loading content.</p>;
    }

    return (
        <>
            {slug === "history" && <Timeline />}
            {slug === "climate" && <ClimateChart />}
            <ProseContent content={initialContent} />
            {(slug === "life" || slug === "research") && <StationAccordion />}
        </>
    )
}
