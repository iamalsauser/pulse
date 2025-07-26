"use client";
import { Search, ChevronDown, Volume2, VolumeX, Settings, Star, Bell, User } from "lucide-react";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b border-[#2A2A2A] sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-sm">
      {/* Left Side - Logo and Navigation */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-white">AXIOM Pro</h1>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors text-sm font-medium">
            Discover
          </a>
          <a href="#" className="text-[#3B82F6] border-b-2 border-[#3B82F6] pb-1 text-sm font-medium">
            Pulse
          </a>
          <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors text-sm font-medium">
            Trackers
          </a>
          <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors text-sm font-medium">
            Perpetuals
          </a>
          <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors text-sm font-medium">
            Yield
          </a>
          <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors text-sm font-medium">
            Portfolio
          </a>
          <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors text-sm font-medium">
            Rewards
          </a>
        </nav>
      </div>
      
      {/* Right Side - Actions and Controls */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] w-4 h-4" />
          <input
            placeholder="Search tokens..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-[#1A1A1A] border border-[#2A2A2A] text-white placeholder:text-[#9CA3AF] w-64 px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-[#3B82F6]"
          />
        </div>
        
        {/* Deposit Button */}
        <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Deposit
        </button>
        
        {/* Icons */}
        <div className="flex items-center space-x-3">
          <Star className="w-5 h-5 text-[#9CA3AF] cursor-pointer hover:text-white transition-colors" />
          <Bell className="w-5 h-5 text-[#9CA3AF] cursor-pointer hover:text-white transition-colors" />
          
          {/* Display Dropdown */}
          <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors">
            <span className="text-sm text-[#9CA3AF]">Display</span>
            <ChevronDown className="w-4 h-4 text-[#9CA3AF]" />
          </div>
          
          {/* Volume Controls */}
          <Volume2 className="w-5 h-5 text-[#9CA3AF] cursor-pointer hover:text-white transition-colors" />
          <VolumeX className="w-5 h-5 text-[#9CA3AF] cursor-pointer hover:text-white transition-colors" />
          
          {/* User Icon */}
          <User className="w-5 h-5 text-[#9CA3AF] cursor-pointer hover:text-white transition-colors" />
          
          {/* Numerical Display */}
          <div className="flex items-center space-x-2 text-sm text-[#9CA3AF]">
            <span>1</span>
            <span>=</span>
            <span>0</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 