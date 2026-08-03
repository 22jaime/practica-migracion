"use client";

import { useState } from "react";

export default function FormulariosPage() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-neutral-50 relative">
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                    <div className="w-10 h-10 rounded-full border-4 border-neutral-200 border-t-neutral-800 animate-spin" />
                    <p className="mt-4 text-neutral-500 font-medium animate-pulse text-sm">
                        Cargando asistente seguro...
                    </p>
                </div>
            )}
            
            <iframe 
                src="https://admin.gestoriahol.com/formularios/solicitud-de-legalizaciones" 
                className="w-full flex-1 border-0 min-h-[calc(100vh-80px)]"
                title="Formulario Público de Legalizaciones"
                allow="camera; microphone; fullscreen"
                onLoad={() => setIsLoading(false)}
            />
        </div>
    );
}
