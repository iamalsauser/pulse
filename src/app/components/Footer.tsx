"use client";
import { Star, ChevronDown, Bell, Settings, Calendar, FileText, Trophy, DollarSign, Wallet, Twitter, Zap, TrendingUp } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  // You may want to pass these as props or use context for real data
  const totalTokens = 40;
  const totalVolume = 185.77;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-[#2A2A2A] px-8 py-3 flex items-center justify-between text-sm z-50">
      {/* Left Side */}
      <div className="flex items-center space-x-6">
        {/* PRESET 1 Button */}
        <span className="bg-[#3B82F6] text-white px-3 py-1.5 rounded-lg flex items-center space-x-2 text-sm font-medium">
          <Star className="w-3 h-3" />
          <span>PRESET 1</span>
        </span>
        
        {/* 1 = 0 Dropdown */}
        <div className="flex items-center space-x-2 text-[#9CA3AF] cursor-pointer hover:text-white transition-colors">
          <span>1</span>
          <span>=</span>
          <span>0</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        
        {/* Trackers */}
        <div className="flex items-center space-x-4 text-[#9CA3AF]">
          <span className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer">
            <Wallet className="w-4 h-4" />
            <span>Wallet Tracker</span>
          </span>
          <span className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer">
            <Twitter className="w-4 h-4" />
            <span>Twitter Tracker</span>
          </span>
          <span className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer">
            <Zap className="w-4 h-4" />
            <span>Pulse Tracker</span>
          </span>
          <span className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer">
            <TrendingUp className="w-4 h-4" />
            <span>PnL Tracker</span>
          </span>
        </div>
      </div>
      
      {/* Center - Values */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-white">
          <Trophy className="w-4 h-4 text-[#F59E0B]" />
          <span className="font-medium">{totalTokens}</span>
        </div>
        <div className="flex items-center space-x-2 text-[#10B981]">
          <DollarSign className="w-4 h-4" />
          <span className="font-medium">${totalVolume}</span>
        </div>
      </div>
      
      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Connection Status */}
        <div className="flex items-center space-x-2 text-[#10B981]">
          <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
          <span className="text-sm">Connection is stable</span>
        </div>
        
        {/* GLOBAL Dropdown */}
        <div className="flex items-center space-x-1 text-[#9CA3AF] cursor-pointer hover:text-white transition-colors">
          <span className="text-sm font-medium">GLOBAL</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        
        {/* Icons */}
        <div className="flex items-center space-x-3">
          <Calendar className="w-4 h-4 text-[#9CA3AF] cursor-pointer hover:text-white transition-colors" />
          <Bell className="w-4 h-4 text-[#9CA3AF] cursor-pointer hover:text-white transition-colors" />
          <Settings className="w-4 h-4 text-[#9CA3AF] cursor-pointer hover:text-white transition-colors" />
          <FileText className="w-4 h-4 text-[#9CA3AF] cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default Footer; 