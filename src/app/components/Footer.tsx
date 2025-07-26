"use client";
import { Star, ChevronDown, Bell, Settings, Calendar, FileText, Trophy, DollarSign, Wallet, Twitter, Zap, TrendingUp, X } from "lucide-react";
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
        <button className="flex items-center bg-[#232C5B] hover:bg-[#1a255e] text-[#6C8CFF] font-semibold px-4 py-1 rounded-lg text-sm space-x-2 shadow-none border-none">
          <span className="flex items-center mr-1">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="8" height="1.2" rx="0.6" fill="#6C8CFF"/>
              <rect x="3" y="8.4" width="12" height="1.2" rx="0.6" fill="#6C8CFF"/>
              <rect x="3" y="11.8" width="6" height="1.2" rx="0.6" fill="#6C8CFF"/>
              <g>
                <circle cx="13.5" cy="6.1" r="1.1" fill="#232C5B" stroke="#6C8CFF" stroke-width="0.8"/>
                <path d="M13.5 5.3v1.6M12.7 6.1h1.6" stroke="#6C8CFF" stroke-width="0.6" strokeLinecap="round"/>
              </g>
            </svg>
          </span>
          <span>PRESET 1</span>
        </button>
        
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
        {/* Stats Pill and Amount (new design) */}
        <div className="flex items-center space-x-6 ml-2">
          {/* Pill with icons */}
          <div className="flex items-center bg-[#181A20] border border-[#23262F] rounded-full px-3 py-1 space-x-2">
            <span>🔥</span>
            <span>🐓</span>
            <span>💊</span>
          </div>
          {/* Solana icon and amount */}
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="solana-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9945FF"/>
                    <stop offset="1" stopColor="#14F195"/>
                  </linearGradient>
                </defs>
                <rect x="4" y="7" width="16" height="2" rx="1" fill="url(#solana-gradient)"/>
                <rect x="4" y="11" width="16" height="2" rx="1" fill="url(#solana-gradient)"/>
                <rect x="4" y="15" width="16" height="2" rx="1" fill="url(#solana-gradient)"/>
              </svg>
            </span>
            <span className="text-[#16FF99] font-semibold text-lg">$186.11</span>
          </div>
          {/* Connection badge */}
          <span className="bg-[#163D2F] text-[#16FF99] font-medium rounded-lg px-4 py-1 flex items-center ml-2" style={{fontSize:'1rem'}}>
            <span className="w-3 h-3 bg-[#16FF99] rounded-full inline-block mr-2"></span>
            Connection is stable
          </span>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center space-x-4 text-[#A3A9B7]">
        {/* Global Dropdown */}
        <div className="flex items-center space-x-1 hover:text-white cursor-pointer transition-colors font-medium">
          <span>GLOBAL</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        {/* Divider */}
        <span className="h-6 border-l border-[#23262F] mx-2"></span>
        {/* Action Icons */}
        <div className="flex items-center space-x-5">
          {/* Rectangle icon */}
          <span className="w-6 h-6 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="16" height="12" rx="2" stroke="#A3A9B7" stroke-width="1.5"/>
            </svg>
          </span>
          {/* Bell icon */}
          <span className="w-6 h-6 flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </span>
          {/* Palette icon */}
          <span className="w-6 h-6 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="8" stroke="#A3A9B7" stroke-width="1.5"/>
              <circle cx="7" cy="9" r="1" fill="#A3A9B7"/>
              <circle cx="10" cy="7" r="1" fill="#A3A9B7"/>
              <circle cx="13" cy="9" r="1" fill="#A3A9B7"/>
            </svg>
          </span>
          {/* Discord icon */}
          <span className="w-6 h-6 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.24 4.75A13.22 13.22 0 0 0 13.13 4c-.14.25-.3.6-.41.87a12.08 12.08 0 0 0-3.44 0c-.11-.27-.27-.62-.41-.87A13.22 13.22 0 0 0 3.76 4.75C1.61 7.88 1.13 10.93 1.32 13.96a13.3 13.3 0 0 0 3.97 1.29c.3-.41.57-.85.8-1.31a8.6 8.6 0 0 1-1.36-.66c.11-.08.22-.16.33-.24 2.7 1.23 5.62 1.23 8.32 0 .11.08.22.16.33.24-.44.25-.89.48-1.36.66.23.46.5.9.8 1.31a13.3 13.3 0 0 0 3.97-1.29c.19-3.03-.29-6.08-2.44-9.21zM7.5 11.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="#A3A9B7"/>
            </svg>
          </span>
          {/* X icon */}
          <span className="w-6 h-6 flex items-center justify-center">
            <X className="w-5 h-5" />
          </span>
          {/* Docs */}
          <span className="hover:text-white cursor-pointer transition-colors font-medium">Docs</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;