import React from "react";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { FiDroplet } from "react-icons/fi";
import { MdAir } from "react-icons/md";
import { ImMeter } from "react-icons/im";


export interface SingleWeatherDetailProps {
    information: string;
    icon: React.ReactNode;
    value: string;
}

export interface WeatherDetailProps {
    visibility: string;
    humidity: string;
    windSpeed: string;
    airPressure: string;
    sunrise: string;
    sunset: string;
}

function SingleWeatherDetailProps(props: SingleWeatherDetailProps) {
    return (
        <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
            <p className="whitespace-nowrap">{props.information}</p>
            <div className="text-3xl">{props.icon}</div>
            <p className="">{props.value}</p>
        </div>
    )
}

export default function WeatherDetails(props: WeatherDetailProps) {
    const {
        visibility = "25km",
        humidity = "61%",
        windSpeed = "7 km/h",
        airPressure = "1012 hPa",
        sunrise = "6:20",
        sunset = "18:48",
    } = props;
    
    return (
        <>
            <SingleWeatherDetailProps 
                information="Visibility"
                icon={<LuEye />}
                value={visibility}
            />
            <SingleWeatherDetailProps 
                information="Humidity"
                icon={<FiDroplet />}
                value={humidity}
            />
            <SingleWeatherDetailProps 
                information="Wind Speed"
                icon={<MdAir />}
                value={windSpeed}
            />
            <SingleWeatherDetailProps 
                information="Air Pressure"
                icon={<ImMeter />}
                value={airPressure}
            />
            <SingleWeatherDetailProps 
                information="Sunrise"
                icon={<LuSunrise />}
                value={sunrise}
            />
            <SingleWeatherDetailProps 
                information="Sunset"
                icon={<LuSunset />}
                value={sunset}
            />
        </>
    )
}