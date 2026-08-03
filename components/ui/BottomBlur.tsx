export function BottomBlur() {
    return (
        <div
            className="fixed bottom-0 left-0 right-0 h-8 z-50 pointer-events-none"
            style={{
                backdropFilter: "blur(2px)",
                maskImage: "linear-gradient(to bottom, transparent, black 80%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 80%)",
                background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.1))"
            }}
        />
    );
}
