"use client";
import { Search, ChevronDown, Volume2, VolumeX, Settings } from "lucide-react";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 sticky top-0 z-40 bg-gray-950/90 backdrop-blur-sm">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold">Pulse</h1>
        <p className="text-gray-400 text-sm">Real-time token tracking and market pulse</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            placeholder="Search tokens..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 w-64 px-3 py-2 rounded-md"
          />
        </div>
        <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2">
          <span className="text-sm text-gray-400">Display</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        <Volume2 className="w-5 h-5 text-gray-400 cursor-pointer" />
        <VolumeX className="w-5 h-5 text-gray-400 cursor-pointer" />
        <Settings className="w-5 h-5 text-gray-400 cursor-pointer" />
        <div className="flex items-center space-x-2 text-sm">
          <span>1</span>
          <span>=</span>
          <span>0</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Header; 