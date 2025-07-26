"use client";
import { Star, ChevronDown, Bell, Settings } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  // You may want to pass these as props or use context for real data
  const totalTokens = 40;
  const totalVolume = 123.45;
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-6 py-2 flex items-center justify-between text-sm z-50">
      <div className="flex items-center space-x-4">
        <span className="bg-blue-600 text-white px-3 py-1 rounded flex items-center space-x-1">
          <Star className="w-3 h-3" />
          <span>PRESET 1</span>
        </span>
        <div className="flex items-center space-x-2">
          <span>1</span>
          <span>=</span>
          <span>0</span>
        </div>
        <span className="text-gray-400">📊 Wallet Tracker</span>
        <span className="text-gray-400">🐦 Twitter Tracker</span>
        <span className="text-gray-400">⚡ Pulse Tracker</span>
        <span className="text-gray-400">📈 PnL Tracker</span>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>🏆 {totalTokens}</span>
          </div>
          <span className="text-green-400 font-mono">💰 ${totalVolume}K</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Connection is stable</span>
        </div>
        <div className="flex items-center space-x-1">
          <span>GLOBAL</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <Bell className="w-4 h-4 cursor-pointer" />
        <Settings className="w-4 h-4 cursor-pointer" />
        <span>🐦</span>
        <span>📋 Docs</span>
      </div>
    </div>
  );
};

export default Footer; 