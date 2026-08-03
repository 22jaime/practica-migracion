"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
    value?: string;
    onValueChange?: (value: string) => void;
}>({});

interface AccordionProps {
    children: React.ReactNode;
    type?: "single" | "multiple";
    collapsible?: boolean;
    value?: string;
    onValueChange?: (value: string) => void;
    className?: string;
}

export function Accordion({
    children,
    type = "single",
    collapsible = false,
    value: valueProp,
    onValueChange,
    className,
}: AccordionProps) {
    const [value, setValue] = React.useState<string>(valueProp || "");

    const handleValueChange = (newValue: string) => {
        const updatedValue = newValue === value && collapsible ? "" : newValue;
        setValue(updatedValue);
        onValueChange?.(updatedValue);
    };

    return (
        <AccordionContext.Provider value={{ value: valueProp !== undefined ? valueProp : value, onValueChange: handleValueChange }}>
            <div className={cn("space-y-2", className)}>{children}</div>
        </AccordionContext.Provider>
    );
}

interface AccordionItemProps {
    children: React.ReactNode;
    value: string;
    className?: string;
}

export function AccordionItem({ children, value, className }: AccordionItemProps) {
    return (
        <div className={cn("border-b", className)} data-value={value}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { value });
                }
                return child;
            })}
        </div>
    );
}

interface AccordionTriggerProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    value?: string;
}

export function AccordionTrigger({ children, className, onClick, value, ...props }: AccordionTriggerProps) {
    const { value: selectedValue, onValueChange } = React.useContext(AccordionContext);
    const isOpen = selectedValue === value;

    return (
        <h3 className="flex">
            <button
                type="button"
                onClick={() => {
                    if (value) onValueChange?.(value);
                    onClick?.();
                }}
                className={cn(
                    "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                    className
                )}
                data-state={isOpen ? "open" : "closed"}
                {...props}
            >
                {children}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
        </h3>
    );
}

interface AccordionContentProps {
    children: React.ReactNode;
    className?: string;
    value?: string;
}

export function AccordionContent({ children, className, value, ...props }: AccordionContentProps) {
    const { value: selectedValue } = React.useContext(AccordionContext);
    const isOpen = selectedValue === value;

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className={cn("pb-4 pt-0", className)} {...props}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
