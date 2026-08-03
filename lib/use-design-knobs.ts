"use client";

import { useEffect, useState } from "react";

export type RadiusOption = "sm" | "md" | "lg" | "xl";
export type ElevationOption = "low" | "medium" | "high";
export type DensityOption = "comfy" | "compact";

interface DesignKnobs {
    radius: RadiusOption;
    elevation: ElevationOption;
    density: DensityOption;
}

interface DesignKnobsReturn extends DesignKnobs {
    setRadius: (radius: RadiusOption) => void;
    setElevation: (elevation: ElevationOption) => void;
    setDensity: (density: DensityOption) => void;
}

const RADIUS_VALUES: Record<RadiusOption, string> = {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
};

const ELEVATION_VALUES: Record<ElevationOption, string> = {
    low: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    medium: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    high: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
};

const DENSITY_VALUES: Record<DensityOption, string> = {
    comfy: "1",
    compact: "0.75",
};

export function useDesignKnobs(): DesignKnobsReturn {
    const [radius, setRadiusState] = useState<RadiusOption>("md");
    const [elevation, setElevationState] = useState<ElevationOption>("medium");
    const [density, setDensityState] = useState<DensityOption>("comfy");

    // Initialize from localStorage
    useEffect(() => {
        const storedRadius = localStorage.getItem("design-radius") as RadiusOption;
        const storedElevation = localStorage.getItem("design-elevation") as ElevationOption;
        const storedDensity = localStorage.getItem("design-density") as DensityOption;

        if (storedRadius && RADIUS_VALUES[storedRadius]) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setRadiusState(storedRadius);
        }
        if (storedElevation && ELEVATION_VALUES[storedElevation]) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setElevationState(storedElevation);
        }
        if (storedDensity && DENSITY_VALUES[storedDensity]) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setDensityState(storedDensity);
        }
    }, []);

    // Apply radius to CSS
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--radius", RADIUS_VALUES[radius]);
    }, [radius]);

    // Apply elevation to CSS
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--elevation", ELEVATION_VALUES[elevation]);
    }, [elevation]);

    // Apply density to CSS
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--density-multiplier", DENSITY_VALUES[density]);
    }, [density]);

    const setRadius = (newRadius: RadiusOption) => {
        setRadiusState(newRadius);
        localStorage.setItem("design-radius", newRadius);
    };

    const setElevation = (newElevation: ElevationOption) => {
        setElevationState(newElevation);
        localStorage.setItem("design-elevation", newElevation);
    };

    const setDensity = (newDensity: DensityOption) => {
        setDensityState(newDensity);
        localStorage.setItem("design-density", newDensity);
    };

    return {
        radius,
        elevation,
        density,
        setRadius,
        setElevation,
        setDensity,
    };
}
