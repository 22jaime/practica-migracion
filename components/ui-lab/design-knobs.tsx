"use client";

import {
    useDesignKnobs,
    type RadiusOption,
    type ElevationOption,
    type DensityOption,
} from "@/lib/use-design-knobs";

export function DesignKnobs() {
    const { radius, elevation, density, setRadius, setElevation, setDensity } =
        useDesignKnobs();

    const radiusOptions: RadiusOption[] = ["sm", "md", "lg", "xl"];
    const elevationOptions: ElevationOption[] = ["low", "medium", "high"];
    const densityOptions: DensityOption[] = ["comfy", "compact"];

    return (
        <div className="space-y-6 p-6 rounded-[var(--radius)] border bg-card">
            <h3 className="text-lg font-semibold">Design Customization</h3>

            {/* Radius Control */}
            <div>
                <label className="block text-sm font-medium mb-3">
                    Border Radius
                </label>
                <div className="flex gap-2">
                    {radiusOptions.map((option) => (
                        <button
                            key={option}
                            onClick={() => setRadius(option)}
                            className={`px-4 py-2 text-sm rounded-[var(--radius)] border-2 transition-all ${radius === option
                                    ? "border-brand bg-brand text-brand-foreground font-medium"
                                    : "border-border hover:border-ring"
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            {/* Elevation Control */}
            <div>
                <label className="block text-sm font-medium mb-3">
                    Elevation (Shadow)
                </label>
                <div className="flex gap-2">
                    {elevationOptions.map((option) => (
                        <button
                            key={option}
                            onClick={() => setElevation(option)}
                            className={`px-4 py-2 text-sm rounded-[var(--radius)] border-2 transition-all ${elevation === option
                                    ? "border-brand bg-brand text-brand-foreground font-medium"
                                    : "border-border hover:border-ring"
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            {/* Density Control */}
            <div>
                <label className="block text-sm font-medium mb-3">
                    Density
                </label>
                <div className="flex gap-2">
                    {densityOptions.map((option) => (
                        <button
                            key={option}
                            onClick={() => setDensity(option)}
                            className={`px-4 py-2 text-sm rounded-[var(--radius)] border-2 transition-all ${density === option
                                    ? "border-brand bg-brand text-brand-foreground font-medium"
                                    : "border-border hover:border-ring"
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            <p className="text-xs text-muted-foreground pt-2 border-t">
                Changes are applied in real-time and saved to localStorage
            </p>
        </div>
    );
}
