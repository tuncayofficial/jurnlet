import React, { useRef, useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { audio } from "framer-motion/client";

export default function LibraryPlayerUS() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [audioLink, setAudioLink] = useState<string[]>([])

    const {word} = useParams()


    useEffect(() => {
        const fetchDefinition = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/definition/${word}`);
                const data = response.data.audioResource

                if(Array.isArray(data) && data.length > 0){
                    setAudioLink(data);               
                } else {
                    setAudioLink([])
                }

            } catch (error) {
                console.error("Error fetching definition:", error);
            }
        };

        fetchDefinition();
    }, []);
    
    const findUK = (audioLink: string[]): string | undefined => {
        return audioLink.find(link => link.includes("-us."));
      };
    
    const result:string = findUK(audioLink) || "No pronunciation found."

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
        setVolume(newVolume);
    };

    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement) {
            const handleEnded = () => {
                setIsPlaying(false);
            };
            audioElement.addEventListener("ended", handleEnded);

            return () => {
                audioElement.removeEventListener("ended", handleEnded);
            };
        }
    }, []);

    return (
        <div className="flex flex-col p-6 mx-6 items-center justify-center bg-gray-100 rounded-lg shadow-md">
            {/* Audio Player Controls */}
            <span className="bg-indigo-500 font-bold rounded-3xl my-2 mb-10 p-2 px-5 uppercase">American</span>
            <div className="flex items-center space-x-4">
                {/* Play/Pause Button */}
                <button
                    onClick={togglePlayPause}
                        className={`p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none ${result === "No pronunciation found." ? "pointer-events-none opacity-50 cursor-not-allowed" : ""}`}                >
                    {isPlaying ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    )}
                </button>

                {/* Volume Control */}
                <div className="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.383 3.076a1 1 0 011.09.217 7.002 7.002 0 010 9.414 1 1 0 01-1.414-1.414 5 5 0 000-7.072 1 1 0 01.217-1.09z"
                            clipRule="evenodd"
                        />
                        <path d="M7 4a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1z" />
                    </svg>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-24 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
            </div>

            {/* Progress Bar 
            <div className="w-full mt-4">
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
            </div>
                */}
            {/* Hidden Audio Element */}
            <audio ref={audioRef} src={result} />
        </div>
    );
}