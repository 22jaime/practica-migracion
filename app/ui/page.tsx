
import { Hero } from "@/components/sections/Hero";

export default function UIPage() {
    return (
        <div className="bg-background min-h-screen">
            <div className="p-8 border-b border-border">
                <h1 className="text-2xl font-bold mb-4">UI Design System Lab</h1>
                <p className="text-muted-foreground">Preview of key components and sections.</p>
            </div>

            <section className="border-b border-border">
                <div className="bg-neutral-100 p-4 font-mono text-xs uppercase tracking-wider text-neutral-500">
                    Hero Section Preview
                </div>
                <Hero />
            </section>
        </div>
    );
}
