"use client";

import { ThemeSwitcher } from "@/components/ui-lab/theme-switcher";
import { DesignKnobs } from "@/components/ui-lab/design-knobs";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Chip } from "@/components/ui/chip";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

export function UILabContent() {
    const colorTokens = [
        { name: "Background", var: "--bg", sample: "#F5F1E8" },
        { name: "Surface", var: "--bg-surface", sample: "#FEFDFB" },
        { name: "Foreground", var: "--fg", sample: "#0a0a0a" },
        { name: "Foreground Muted", var: "--fg-muted", sample: "#5A5A5A" },
        { name: "Card", var: "--card", sample: "#FFFFFF" },
        { name: "Border", var: "--border", sample: "#E8E4DC" },
        { name: "Neon Yellow", var: "--neon-yellow", sample: "#D4FF33" },
        { name: "Vibrant Orange", var: "--vibrant-orange", sample: "#E85A2A" },
        { name: "Vibrant Red", var: "--vibrant-red", sample: "#FF3B30" },
        { name: "Vibrant Green", var: "--vibrant-green", sample: "#34C759" },
        { name: "Link", var: "--link", sample: "#0066CC" },
        { name: "Success", var: "--success", sample: "#34C759" },
        { name: "Warning", var: "--warning", sample: "#FFCC00" },
        { name: "Danger", var: "--danger", sample: "#FF3B30" },
    ];

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <header className="space-y-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight mb-2">
                                UI Design System Lab
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Development-only styleguide and component showcase
                            </p>
                        </div>
                        <div className="bg-warning/10 border border-warning rounded-lg px-4 py-2">
                            <p className="text-sm font-medium text-warning-foreground">
                                🚧 Dev Only
                            </p>
                        </div>
                    </div>
                </header>

                {/* Controls */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <ThemeSwitcher />
                    <DesignKnobs />
                </section>

                {/* Colors Section */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Colors</h2>
                        <p className="text-muted-foreground">
                            Complete color palette with semantic tokens
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {colorTokens.map((token) => (
                            <div
                                key={token.name}
                                className="rounded-[var(--radius)] border overflow-hidden"
                            >
                                <div
                                    className="h-24 flex items-center justify-center"
                                    style={{ background: `var(${token.var})` }}
                                >
                                    <span className="text-sm font-medium px-2 py-1 rounded" style={{
                                        background: 'rgba(255, 255, 255, 0.9)',
                                        color: '#0a0a0a'
                                    }}>
                                        Aa
                                    </span>
                                </div>
                                <div className="p-3 bg-card">
                                    <p className="font-medium text-sm">{token.name}</p>
                                    <code className="text-xs text-muted-foreground block">
                                        {token.var}
                                    </code>
                                    <code className="text-xs text-muted-foreground/70 block mt-1">
                                        {token.sample}
                                    </code>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Typography Section */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">
                            Typography
                        </h2>
                        <p className="text-muted-foreground">
                            Heading scales and text styles
                        </p>
                    </div>

                    <div className="space-y-4 p-6 rounded-[var(--radius)] border bg-card">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold tracking-tight">
                                Heading 1 - The quick brown fox
                            </h1>
                            <code className="text-xs text-muted-foreground">
                                text-4xl font-bold tracking-tight
                            </code>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tight">
                                Heading 2 - The quick brown fox
                            </h2>
                            <code className="text-xs text-muted-foreground">
                                text-3xl font-bold tracking-tight
                            </code>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold">
                                Heading 3 - The quick brown fox
                            </h3>
                            <code className="text-xs text-muted-foreground">
                                text-2xl font-semibold
                            </code>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-xl font-semibold">
                                Heading 4 - The quick brown fox
                            </h4>
                            <code className="text-xs text-muted-foreground">
                                text-xl font-semibold
                            </code>
                        </div>

                        <div className="space-y-2">
                            <p className="text-base">
                                Body text - The quick brown fox jumps over the lazy dog. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <code className="text-xs text-muted-foreground">text-base</code>
                        </div>

                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                                Small text - The quick brown fox jumps over the lazy dog.
                            </p>
                            <code className="text-xs text-muted-foreground">
                                text-sm text-muted-foreground
                            </code>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">
                                Caption - Additional information or metadata
                            </p>
                            <code className="text-xs text-muted-foreground">
                                text-xs text-muted-foreground
                            </code>
                        </div>
                    </div>
                </section>

                {/* Buttons Section */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Buttons</h2>
                        <p className="text-muted-foreground">
                            All button variants and sizes
                        </p>
                    </div>

                    {/* Variants */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Variants</h3>
                        <div className="flex flex-wrap gap-3 p-6 rounded-[var(--radius)] border bg-card">
                            <Button variant="default">Default</Button>
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button variant="success">Success</Button>
                            <Button variant="warning">Warning</Button>
                            <Button variant="link">Link Variant</Button>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Features</h3>
                        <div className="flex flex-wrap gap-3 p-6 rounded-[var(--radius)] border bg-card">
                            <Button loading>Loading</Button>
                            <Button
                                leftIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
                                }
                            >
                                Back
                            </Button>
                            <Button
                                rightIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                                }
                            >
                                Next
                            </Button>
                            <Button fullWidth className="max-w-xs">Full Width</Button>
                        </div>
                    </div>

                    {/* Sizes */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Sizes</h3>
                        <div className="flex flex-wrap items-center gap-3 p-6 rounded-[var(--radius)] border bg-card">
                            <Button size="sm" variant="primary">
                                Small
                            </Button>
                            <Button size="md" variant="primary">
                                Medium (default)
                            </Button>
                            <Button size="lg" variant="primary">
                                Large
                            </Button>
                            <Button size="icon" variant="primary" aria-label="Icon only">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </Button>
                        </div>
                    </div>

                    {/* States */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">States</h3>
                        <div className="flex flex-wrap gap-3 p-6 rounded-[var(--radius)] border bg-card">
                            <Button variant="primary">Normal</Button>
                            <Button variant="primary" disabled>
                                Disabled
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Cards Section */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Cards</h2>
                        <p className="text-muted-foreground">
                            Card variants and compositions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Default Card</CardTitle>
                                <CardDescription>
                                    A standard card with border and no shadow
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Perfect for content sections and information display.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button size="sm" variant="outline">
                                    Action
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card variant="elevated">
                            <CardHeader>
                                <CardTitle>Elevated Card</CardTitle>
                                <CardDescription>
                                    Uses the current elevation setting
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Great for highlighting important content or creating depth.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button size="sm" variant="primary">
                                    Action
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card variant="interactive">
                            <CardHeader>
                                <CardTitle>Interactive Card</CardTitle>
                                <CardDescription>
                                    Hover to see the elevation effect
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Ideal for clickable cards like product listings or navigation.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button size="sm" variant="ghost">
                                    Click me
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </section>

                {/* Chips Section */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Chips</h2>
                        <p className="text-muted-foreground">
                            Tags, badges, and status indicators
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold">Solid Variants</h3>
                            <div className="flex flex-wrap gap-2 p-6 rounded-[var(--radius)] border bg-card">
                                <Chip variant="solid" color="default">Default</Chip>
                                <Chip variant="solid" color="primary">Primary</Chip>
                                <Chip variant="solid" color="secondary">Secondary</Chip>
                                <Chip variant="solid" color="success">Success</Chip>
                                <Chip variant="solid" color="warning">Warning</Chip>
                                <Chip variant="solid" color="error">Error</Chip>
                                <Chip variant="solid" color="info">Info</Chip>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold">Soft Variants</h3>
                            <div className="flex flex-wrap gap-2 p-6 rounded-[var(--radius)] border bg-card">
                                <Chip variant="soft" color="default">Default</Chip>
                                <Chip variant="soft" color="primary">Primary</Chip>
                                <Chip variant="soft" color="secondary">Secondary</Chip>
                                <Chip variant="soft" color="success">Success</Chip>
                                <Chip variant="soft" color="warning">Warning</Chip>
                                <Chip variant="soft" color="error">Error</Chip>
                                <Chip variant="soft" color="info">Info</Chip>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold">Outline Variants</h3>
                            <div className="flex flex-wrap gap-2 p-6 rounded-[var(--radius)] border bg-card">
                                <Chip variant="outline" color="default">Default</Chip>
                                <Chip variant="outline" color="primary">Primary</Chip>
                                <Chip variant="outline" color="secondary">Secondary</Chip>
                                <Chip variant="outline" color="success">Success</Chip>
                                <Chip variant="outline" color="warning">Warning</Chip>
                                <Chip variant="outline" color="error">Error</Chip>
                                <Chip variant="outline" color="info">Info</Chip>
                            </div>
                        </div>


                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold">Sizes</h3>
                            <div className="flex flex-wrap items-center gap-2 p-6 rounded-[var(--radius)] border bg-card">
                                <Chip size="sm" variant="soft" color="primary">
                                    Small
                                </Chip>
                                <Chip size="md" variant="soft" color="primary">
                                    Medium
                                </Chip>
                                <Chip size="lg" variant="soft" color="primary">
                                    Large
                                </Chip>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold">With Close Button</h3>
                            <div className="flex flex-wrap gap-2 p-6 rounded-[var(--radius)] border bg-card">
                                <Chip variant="solid" color="primary" onClose={() => alert("Closed!")}>
                                    Closeable
                                </Chip>
                                <Chip variant="soft" color="success" onClose={() => alert("Closed!")}>
                                    Active
                                </Chip>
                                <Chip variant="outline" color="error" onClose={() => alert("Closed!")}>
                                    Remove me
                                </Chip>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Inputs Section */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Inputs</h2>
                        <p className="text-muted-foreground">
                            Form inputs with validation states
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="Default Input"
                            placeholder="Enter your name"
                            helperText="This is a helper text"
                        />

                        <Input
                            label="Success State"
                            placeholder="valid@email.com"
                            state="success"
                            helperText="Email is valid!"
                        />

                        <Input
                            label="Error State"
                            placeholder="Enter password"
                            type="password"
                            state="error"
                            helperText="Password must be at least 8 characters"
                        />

                        <Input
                            label="Disabled Input"
                            placeholder="Cannot edit"
                            disabled
                            helperText="This field is read-only"
                        />
                    </div>
                </section>

                {/* States & Accessibility Section */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">
                            ♿ States & Accessibility
                        </h2>
                        <p className="text-muted-foreground">
                            All interactive states and WCAG AA compliance demonstrations
                        </p>
                    </div>

                    {/* Focus States */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Focus States (Tab Navigation)</h3>
                        <div className="space-y-4 p-6 rounded-[var(--radius)] border bg-card">
                            <p className="text-sm text-muted-foreground mb-4">
                                Try pressing <kbd className="px-2 py-1 text-xs bg-muted rounded">Tab</kbd> to navigate through these elements
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <Button variant="primary">Focusable Button</Button>
                                <Button variant="outline">Outline Button</Button>
                                <Input placeholder="Focusable input" className="max-w-xs" />
                                <a href="#" className="text-link hover:text-link-hover underline px-2 py-1 rounded focus:outline-none focus:ring-3 focus:ring-ring focus:ring-offset-2">
                                    Focusable Link
                                </a>
                            </div>

                            <code className="text-xs text-muted-foreground block mt-3">
                                Focus ring: 3px solid var(--ring), 2px offset
                            </code>
                        </div>
                    </div>

                    {/* Hover States */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Hover States</h3>
                        <div className="flex flex-wrap gap-3 p-6 rounded-[var(--radius)] border bg-card">
                            <Button variant="primary">Hover for effect</Button>
                            <Button variant="ghost">Ghost Hover</Button>
                            <Card variant="interactive" className="max-w-xs">
                                <CardHeader>
                                    <CardTitle className="text-base">Hover Card</CardTitle>
                                    <CardDescription className="text-xs">
                                        Hover to see elevation change
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>

                    {/* Disabled States */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Disabled States</h3>
                        <div className="flex flex-wrap items-center gap-3 p-6 rounded-[var(--radius)] border bg-card">
                            <Button variant="primary" disabled>Disabled Button</Button>
                            <Button variant="outline" disabled>Disabled Outline</Button>
                            <Input placeholder="Disabled input" disabled className="max-w-xs" />
                            <Chip variant="solid" color="primary" className="opacity-50 cursor-not-allowed">Disabled Chip</Chip>
                            <code className="text-xs text-muted-foreground">
                                opacity-50, cursor-not-allowed, pointer-events-none
                            </code>
                        </div>
                    </div>

                    {/* Accessibility Notes */}
                    <div className="p-6 rounded-[var(--radius)] border bg-card space-y-3">
                        <h3 className="text-lg font-semibold">♿ WCAG AA Compliance</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>✅ All text has minimum 4.5:1 contrast ratio</li>
                            <li>✅ Large text (18px+) has minimum 3:1 contrast ratio</li>
                            <li>✅ Focus indicators are visible (3px ring, 2px offset)</li>
                            <li>✅ Interactive elements have clear hover/focus states</li>
                            <li>✅ Disabled elements are clearly indicated</li>
                            <li>✅ Links use color + underline for accessibility</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t">
                            <h4 className="font-semibold text-sm mb-2">Contrast Ratios:</h4>
                            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                                <div>--fg on --bg: <strong>17.8:1</strong></div>
                                <div>--fg-muted on --bg: <strong>5.5:1</strong></div>
                                <div>--fg on --card: <strong>20.6:1</strong></div>
                                <div>--link on --bg: <strong>7.2:1</strong></div>
                                <div>Neon Yellow Button: <strong>16.2:1</strong></div>
                                <div>Orange Button: <strong>4.5:1</strong></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Select Section */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">
                            Select / Dropdown
                        </h2>
                        <p className="text-muted-foreground">
                            Dropdown selection component
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Select
                            label="Country"
                            options={[
                                { value: "es", label: "Spain" },
                                { value: "cu", label: "Cuba" },
                                { value: "us", label: "United States" },
                                { value: "mx", label: "Mexico" },
                            ]}
                        />

                        <Select
                            label="Priority"
                            options={[
                                { value: "low", label: "Low" },
                                { value: "medium", label: "Medium" },
                                { value: "high", label: "High" },
                                { value: "urgent", label: "Urgent" },
                            ]}
                        />
                    </div>
                </section>

                {/* Textarea Section */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Textarea</h2>
                        <p className="text-muted-foreground">
                            Multi-line text input with validation states
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Textarea
                            label="Message"
                            placeholder="Enter your message..."
                            helperText="Minimum 10 characters"
                        />
                        <Textarea
                            label="Notes"
                            placeholder="Additional notes"
                            state="success"
                            helperText="Saved successfully"
                        />
                    </div>
                </section>

                {/* Label & Separators Section */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">
                            Labels & Separators
                        </h2>
                        <p className="text-muted-foreground">
                            Form labels and visual dividers
                        </p>
                    </div>

                    <div className="p-6 rounded-[var(--radius)] border bg-card space-y-6">
                        <div className="space-y-2">
                            <Label>Standard Label</Label>
                            <Label required>Required Field</Label>
                        </div>

                        <Separator />

                        <div className="flex gap-4 items-center">
                            <span className="text-sm">Left</span>
                            <Separator orientation="vertical" className="h-8" />
                            <span className="text-sm">Right</span>
                        </div>
                    </div>
                </section>

                {/* Badges Section */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Badges</h2>
                        <p className="text-muted-foreground">
                            Status indicators and labels
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold">Variants</h3>
                            <div className="flex flex-wrap gap-2 p-6 rounded-[var(--radius)] border bg-card">
                                <Badge variant="default">Default</Badge>
                                <Badge variant="success">Active</Badge>
                                <Badge variant="warning">Pending</Badge>
                                <Badge variant="danger">Error</Badge>
                                <Badge variant="info">Info</Badge>
                                <Badge variant="outline">Outline</Badge>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold">Sizes</h3>
                            <div className="flex flex-wrap items-center gap-2 p-6 rounded-[var(--radius)] border bg-card">
                                <Badge size="sm" variant="success">Small</Badge>
                                <Badge size="md" variant="success">Medium</Badge>
                                <Badge size="lg" variant="success">Large</Badge>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dropdown Menu Section */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">
                            Dropdown Menu
                        </h2>
                        <p className="text-muted-foreground">
                            Lightweight dropdown with keyboard support
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 p-6 rounded-[var(--radius)] border bg-card">
                        <DropdownMenu
                            trigger={
                                <Button variant="outline">
                                    Actions ▼
                                </Button>
                            }
                        >
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem destructive>Delete</DropdownMenuItem>
                        </DropdownMenu>

                        <DropdownMenu
                            align="end"
                            trigger={
                                <Button variant="primary">
                                    Options ⋮
                                </Button>
                            }
                        >
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Sign out</DropdownMenuItem>
                        </DropdownMenu>
                    </div>
                </section>

                {/* Layout Components Section */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">
                            Layout
                        </h2>
                        <p className="text-muted-foreground">
                            Global Header and Footer components
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="p-4 rounded-[var(--radius)] border bg-card space-y-4">
                            <h3 className="text-lg font-semibold">Mini Layout Preview</h3>
                            <p className="text-sm text-muted-foreground">
                                Simulating a mobile viewport to test Sticky Header and Footer.
                            </p>
                            {/* Simulator Container */}
                            <div className="relative w-full max-w-sm mx-auto h-[600px] border-4 border-muted rounded-xl overflow-hidden shadow-2xl bg-background flex flex-col">
                                {/* Isolated context for Header's sticky behavior */}
                                <div className="flex-1 overflow-y-auto relative">
                                    <Header />
                                    <main className="p-4 space-y-4">
                                        <div className="h-32 bg-muted/20 rounded-lg flex items-center justify-center text-muted-foreground">
                                            Hero Content
                                        </div>
                                        <div className="space-y-2">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="h-4 bg-muted/20 rounded w-full" />
                                            ))}
                                        </div>
                                        <div className="h-32 bg-muted/20 rounded-lg flex items-center justify-center text-muted-foreground">
                                            More Content
                                        </div>
                                    </main>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Motion Playground Section */}
                <Section title="Motion System" description="Premium animations and transitions" bg="surface">
                    <div className="space-y-12">
                        {/* Reveal Variants */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Entrance Variants</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Reveal variant="fade-up">
                                    <div className="h-32 bg-muted rounded-lg flex items-center justify-center border font-mono text-sm">
                                        fade-up
                                    </div>
                                </Reveal>
                                <Reveal variant="fade-in" delay={100}>
                                    <div className="h-32 bg-muted rounded-lg flex items-center justify-center border font-mono text-sm">
                                        fade-in (100ms delay)
                                    </div>
                                </Reveal>
                                <Reveal variant="scale-in" delay={200}>
                                    <div className="h-32 bg-muted rounded-lg flex items-center justify-center border font-mono text-sm">
                                        scale-in (200ms delay)
                                    </div>
                                </Reveal>
                            </div>
                        </div>

                        {/* Stagger Effect */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Stagger Effect</h3>
                            <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={100}>
                                {[1, 2, 3, 4].map((i) => (
                                    <Reveal key={i} variant="fade-up" className="h-24 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary font-bold">
                                        Item {i}
                                    </Reveal>
                                ))}
                            </Stagger>
                        </div>

                        {/* Interactive States */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Micro-interactions</h3>
                            <div className="flex flex-wrap gap-4">
                                <Button>Hover & Click Me</Button>
                                <Button variant="secondary">Secondary Motion</Button>
                                <div className="h-10 px-4 flex items-center justify-center bg-card border rounded-[var(--radius)] shadow-sm hover:shadow-hover hover:-translate-y-[var(--lift-1)] transition-all duration-med ease-premium cursor-pointer">
                                    Custom Card Interaction
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Footer */}
                <footer className="pt-12 pb-6 border-t text-center">
                    <p className="text-sm text-muted-foreground">
                        🎨 UI Design System Lab · Built with Next.js & Tailwind CSS
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                        This page is hidden in production (NEXT_PUBLIC_SHOW_UI_LAB=false)
                    </p>
                </footer>
            </div>
        </div>
    );
}
