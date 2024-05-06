'use client'

import React, { useState } from "react";
import { MdWbSunny, MdMyLocation, MdOutlineLocationOn } from "react-icons/md";
import SearchBox from "./SearchBox";
import axios from "axios";
import SuggestionBox from "./SuggestionBox";
import { useAtom } from "jotai";
import { loadingCityAtom, placeAtom } from "@/app/atom";

type Props = { location?: string }

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

export default function Navbar({ location }: Props) {
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const [place, setPlace] = useAtom(placeAtom);
    const [loadingCity, setLoadingCity] = useAtom(loadingCityAtom);

    async function handleInputChange(value: string) {
        setCity(value);
        if(value.length >= 3) {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${API_KEY}`)
                const suggestions = response.data.list.map((item:any) => (item.name));
                setSuggestions(suggestions);
                setError('');
                setShowSuggestions(true);
            } catch (error) {
                setSuggestions([]);
                setShowSuggestions(false);
            }
        }
        else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }

    function handleSuggestionClick(value: string) {
        setCity(value);
        setShowSuggestions(false);
    }

    function handleSubmitSearch(e: React.FormEvent<HTMLFormElement>) {
        setLoadingCity(true);
        e.preventDefault();
        if(suggestions.length===0) {
            setError("Location not found")
            setLoadingCity(false);
        } else {
            setError("");
            setTimeout(() => {
                setLoadingCity(false);
                setPlace(city);
                setShowSuggestions(false);
            }, 500);
        }
    }

    return (
        <nav className="shadow-sm sticky top-0 left-0 z-10 bg-white">
            <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
                <div className="flex items-center justify-center gap-2">
                    <p className="text-gray-500 text-3xl">Weather</p>
                    <MdWbSunny className="text-3xl mt-1 text-yellow-300" />
                </div>
                {/*  */}
                <section className="flex gap-2 items-center">
                    <MdMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer"/>
                    <MdOutlineLocationOn className="text-3xl" />
                    <p className="text-slate-900/80 text-sm">{location}</p>
                <div className="relative">
                    <SearchBox 
                        value={city}
                        onSubmit={handleSubmitSearch}
                        onChange={e => handleInputChange(e.target.value)}
                    />
                    <SuggestionBox 
                        {...{
                            showSuggestions,
                            suggestions,
                            handleSuggestionClick,
                            error,
                        }}
                    />
                </div>
                </section>
            </div>
        </nav>
    )
}