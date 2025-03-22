import { useState, useRef, lazy, Suspense } from "react";
import LibraryDefinition from "./LibraryDefinition"
import LibraryVisual from "./LibraryVisual"
import Notebook from "../../assets/lottie/Notebook.json"


const Lottie = lazy(() => import("lottie-react"));

export default function LibraryHero(){
    return (
        <div className="flex flex-col md:flex-row h-screen bg-white">
            <div className="flex-1 flex justify-center items-center bg-gray-800">
                <LibraryDefinition />
            </div>

            <div className="flex-1 flex justify-center items-center bg-white">
                <LibraryVisual />
            </div>
        </div>
    );
}