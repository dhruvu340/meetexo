"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import locationOption from "@/app/utils/locationOption";
import Image from "next/image";
import Link from "next/link";
type FormData = {
  eventName: string;
  duration: string;
  location: string;
  locationUrl: string;
  themeColor: string;
};
type Props = {
    setFormValue: React.Dispatch<React.SetStateAction<FormData>>;
}


const MeetingForm = ({setFormValue}: Props) => {
  const [eventName, setEventName] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [locationUrl, setLocationUrl] = useState("");
  const [themeColor, setThemeColor] = useState("#FF555D");

  const durationOptions = ["15", "30", "45", "60"];

  
  const isFormValid =
    eventName.trim() !== "" &&
    duration !== "" &&
    location !== "" &&
    locationUrl.trim() !== "" &&
    themeColor !== "";


    useEffect(() => {
  setFormValue({
    eventName,
    duration,
    location,
    locationUrl,
    themeColor,
  });
}, [location, eventName, locationUrl, themeColor, duration, setFormValue]);
  const handleCreate = () => {
    if (!isFormValid) return;

    console.log({
      eventName,
      duration,
      location,
      locationUrl,
      themeColor,
    });

    // Your create logic here
  };

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-600/20 transition-all duration-300 border border-red-600/20 hover:border-red-600/50 text-red-400 hover:text-red-300 mb-8 w-fit"
        >
          <ChevronLeft className="w-5 h-5" />
          Cancel
        </Link>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
          Create New Event
        </h1>

        <hr className="border-red-600/20" />
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-red-600/20 backdrop-blur-xl p-8 sm:p-10 lg:p-12">
        <div className="space-y-8">
          {/* Event Name */}
          <div>
            <label className="block text-white font-bold text-lg mb-4">
              Event Name *
            </label>

            <Input
              required
              placeholder="Name of Your Meeting Event"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="h-14 text-base sm:text-lg px-4 bg-gray-800/50 border-red-600/20 text-white placeholder:text-gray-500 focus:border-red-600/50"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-white font-bold text-lg mb-4">
              Duration *
            </label>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  className="w-full h-14 text-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold cursor-pointer shadow-lg shadow-red-600/50 hover:shadow-red-600/70 transition-all"
                >
                  {duration ? `${duration} Mins` : "Select Duration"}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-red-600/20 backdrop-blur-xl"
              >
                <DropdownMenuGroup>
                  {durationOptions.map((option) => (
                    <DropdownMenuItem
                      key={option}
                      onClick={() => setDuration(option)}
                      className="cursor-pointer hover:bg-red-600/20 text-gray-300 hover:text-red-400 py-3 px-4 text-base"
                    >
                      {option} Min
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {!duration && (
              <p className="text-sm text-red-400 mt-2">
                Please select duration
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block text-white font-bold text-lg mb-4">
              Location *
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {locationOption.map((option, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setLocation(option.name)}
                  className={`p-6 cursor-pointer rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-3 group ${
                    location === option.name
                      ? "border-red-600 bg-slate-500"
                      : "border-gray-700 bg-white hover:border-red-600 hover:bg-slate-500"
                  }`}
                >
                  <Image
                    src={option.icon}
                    alt={option.name}
                    width={50}
                    height={50}
                    className="group-hover:scale-110 transition-transform"
                  />

                  <h2 className="text-md font-semibold text-black group-hover:text-white transition-colors">
                    {option.name}
                  </h2>
                </button>
              ))}
            </div>

            {!location && (
              <p className="text-sm text-red-400 mt-2">
                Please select location
              </p>
            )}
          </div>

          {/* URL */}
          {location && (
            <div>
              <label className="block text-white font-bold text-lg mb-4">
                Add {location} URL *
              </label>

              <Input
                required
                placeholder="Add Url"
                value={locationUrl}
                onChange={(e) => setLocationUrl(e.target.value)}
                className="h-14 text-base sm:text-lg px-4 bg-gray-800/50 border-red-600/20 text-white placeholder:text-gray-500 focus:border-red-600/50"
              />

              {!locationUrl && (
                <p className="text-sm text-red-400 mt-2">
                  Please enter meeting URL
                </p>
              )}
            </div>
          )}

          {/* Theme Color */}
          <div>
            <label className="block text-white font-bold text-lg mb-4">
              Select Theme Color *
            </label>

            <div className="flex gap-4 items-center">
              <input
                type="color"
                value={themeColor}
                onChange={(e) => setThemeColor(e.target.value)}
                className="w-20 h-16 rounded-lg cursor-pointer border-2 border-red-600/30 hover:border-red-600 transition-all"
              />

              <span className="text-gray-300 text-lg font-mono font-bold">
                {themeColor}
              </span>
            </div>
          </div>

          {/* Create Button */}
          <Button
            onClick={handleCreate}
            disabled={!isFormValid}
            className={`w-full h-14 text-lg text-white font-bold transition-all ${
              isFormValid
                ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 cursor-pointer shadow-lg shadow-red-600/50 hover:shadow-red-600/70 active:scale-95"
                : "bg-gray-700 cursor-not-allowed opacity-50"
            }`}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingForm;
