"use client";
import { ChevronDown, Bell, Wallet, Twitter, Zap, TrendingUp, X } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-[#2A2A2A] px-2 sm:px-4 lg:px-8 py-2 lg:py-3 flex items-center justify-between text-xs lg:text-sm z-50 min-h-[50px] max-h-[70px] overflow-hidden" style={{
      width: '100%',
      maxWidth: '100vw'
    }}>
      {/* Left Side - Responsive with better zoom handling */}
      <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-6 min-w-0 flex-1">
        {/* PRESET 1 Button */}
        <button className="flex items-center bg-[#232C5B] hover:bg-[#1a255e] text-[#6C8CFF] font-semibold px-1.5 sm:px-2 lg:px-4 py-1 rounded-lg text-xs lg:text-sm space-x-1 lg:space-x-2 shadow-none border-none flex-shrink-0">
          <span className="flex items-center mr-1">
            <svg width="12" height="12" className="sm:w-[14px] sm:h-[14px] lg:w-[18px] lg:h-[18px]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="8" height="1.2" rx="0.6" fill="#6C8CFF"/>
              <rect x="3" y="8.4" width="12" height="1.2" rx="0.6" fill="#6C8CFF"/>
              <rect x="3" y="11.8" width="6" height="1.2" rx="0.6" fill="#6C8CFF"/>
              <g>
                <circle cx="13.5" cy="6.1" r="1.1" fill="#232C5B" stroke="#6C8CFF" strokeWidth="0.8"/>
                <path d="M13.5 5.3v1.6M12.7 6.1h1.6" stroke="#6C8CFF" strokeWidth="0.6" strokeLinecap="round"/>
              </g>
            </svg>
          </span>
          <span className="hidden sm:inline">PRESET 1</span>
          <span className="sm:hidden">P1</span>
        </button>
        
        {/* 1 = 0 Dropdown */}
        <div className="flex items-center space-x-0.5 sm:space-x-1 lg:space-x-2 text-[#9CA3AF] cursor-pointer hover:text-white transition-colors flex-shrink-0">
          <span>1</span>
          <span>=</span>
          <span>0</span>
          <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4" />
        </div>
        
        {/* Trackers - Responsive with better text handling */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4 text-[#9CA3AF] min-w-0">
          <span className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer flex-shrink-0">
            <Wallet className="w-3 h-3 lg:w-4 lg:h-4" />
            <span className="text-xs lg:text-sm whitespace-nowrap">Wallet Tracker</span>
            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0"></span>
          </span>
          <span className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer flex-shrink-0">
            <Twitter className="w-3 h-3 lg:w-4 lg:h-4" />
            <span className="text-xs lg:text-sm whitespace-nowrap">Twitter Tracker</span>
            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0"></span>
          </span>
          <span className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer flex-shrink-0">
            <Zap className="w-3 h-3 lg:w-4 lg:h-4" />
            <span className="text-xs lg:text-sm whitespace-nowrap">Pulse Tracker</span>
            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0"></span>
          </span>
          <span className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer flex-shrink-0">
            <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4" />
            <span className="text-xs lg:text-sm whitespace-nowrap">PnL Tracker</span>
            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0"></span>
          </span>
        </div>
        
        {/* Mobile Trackers - Icon only */}
        <div className="flex md:hidden items-center space-x-1 sm:space-x-2 text-[#9CA3AF]">
          <span className="hover:text-white transition-colors cursor-pointer">
            <Wallet className="w-3 h-3" />
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            <Twitter className="w-3 h-3" />
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            <Zap className="w-3 h-3" />
          </span>
        </div>
      </div>
      
      {/* Center - Values - Responsive with better spacing */}
      <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4 min-w-0 flex-shrink-0">
        {/* Stats Pill and Amount */}
        <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-6 ml-1 lg:ml-2">
          {/* Pill with icons */}
          <div className="flex items-center bg-[#181A20] border border-[#23262F] rounded-full px-1.5 sm:px-2 lg:px-3 py-1 space-x-1 lg:space-x-2 flex-shrink-0">
            <span className="text-xs lg:text-sm">🔥</span>
            <span className="text-xs lg:text-sm">🐓</span>
            <span className="text-xs lg:text-sm">💊</span>
          </div>
          {/* Solana icon and amount */}
          <div className="flex items-center space-x-1 lg:space-x-2 flex-shrink-0">
            <span className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 flex items-center justify-center">
              <svg width="16" height="16" className="sm:w-[20px] sm:h-[20px] lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <span className="text-[#16FF99] font-semibold text-xs sm:text-sm lg:text-lg whitespace-nowrap">$185.84</span>
          </div>
          {/* Connection badge */}
          <span className="bg-[#163D2F] text-[#16FF99] font-medium rounded-lg px-1.5 sm:px-2 lg:px-4 py-1 flex items-center ml-1 lg:ml-2 flex-shrink-0 text-xs lg:text-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-[#16FF99] rounded-full inline-block mr-1 lg:mr-2"></span>
            <span className="hidden sm:inline whitespace-nowrap">Connection is stable</span>
            <span className="sm:hidden">Connected</span>
          </span>
        </div>
      </div>
      
      {/* Right Section - Responsive with better spacing */}
      <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4 text-[#A3A9B7] min-w-0 flex-shrink-0">
        {/* Global Dropdown */}
        <div className="flex items-center space-x-1 hover:text-white cursor-pointer transition-colors font-medium flex-shrink-0">
          <span className="text-xs lg:text-sm whitespace-nowrap">GLOBAL</span>
          <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4" />
        </div>
        {/* Divider */}
        <span className="h-3 sm:h-4 lg:h-6 border-l border-[#23262F] mx-1 lg:mx-2"></span>
        {/* Action Icons */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 lg:space-x-5">
          {/* Rectangle icon */}
          <span className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" className="sm:w-[18px] sm:h-[18px] lg:w-[22px] lg:h-[22px]" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="16" height="12" rx="2" stroke="#A3A9B7" strokeWidth="1.5"/>
            </svg>
          </span>
          {/* Bell icon */}
          <span className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 flex items-center justify-center flex-shrink-0">
            <Bell className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-5 lg:h-5" />
          </span>
          {/* Palette icon */}
          <span className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" className="sm:w-[16px] sm:h-[16px] lg:w-5 lg:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="8" stroke="#A3A9B7" strokeWidth="1.5"/>
              <circle cx="7" cy="9" r="1" fill="#A3A9B7"/>
              <circle cx="10" cy="7" r="1" fill="#A3A9B7"/>
              <circle cx="13" cy="9" r="1" fill="#A3A9B7"/>
            </svg>
          </span>
          {/* Discord icon */}
          <span className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" className="sm:w-[16px] sm:h-[16px] lg:w-5 lg:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.24 4.75A13.22 13.22 0 0 0 13.13 4c-.14.25-.3.6-.41.87a12.08 12.08 0 0 0-3.44 0c-.11-.27-.27-.62-.41-.87A13.22 13.22 0 0 0 3.76 4.75C1.61 7.88 1.13 10.93 1.32 13.96a13.3 13.3 0 0 0 3.97 1.29c.3-.41.57-.85.8-1.31a8.6 8.6 0 0 1-1.36-.66c.11-.08.22-.16.33-.24 2.7 1.23 5.62 1.23 8.32 0 .11.08.22.16.33.24-.44.25-.89.48-1.36.66.23.46.5.9.8 1.31a13.3 13.3 0 0 0 3.97-1.29c.19-3.03-.29-6.08-2.44-9.21zM7.5 11.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="#A3A9B7"/>
            </svg>
          </span>
          {/* X icon */}
          <span className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 flex items-center justify-center flex-shrink-0">
            <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-5 lg:h-5" />
          </span>
          {/* Docs */}
          <span className="hover:text-white cursor-pointer transition-colors font-medium text-xs lg:text-sm hidden sm:inline flex-shrink-0 whitespace-nowrap">Docs</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;