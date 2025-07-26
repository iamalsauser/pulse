"use client"

import { memo } from "react"
import { Search, Star, Bell, ChevronDown, User } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const navigationItems = [
  { name: "Discover", active: false },
  { name: "Pulse", active: true },
  { name: "Trackers", active: false },
  { name: "Perpetuals", active: false },
  { name: "Yield", active: false },
  { name: "Portfolio", active: false },
  { name: "Rewards", active: false },
]

export const Header = memo(() => {
  return (
    <header className="flex items-center justify-between px-4 py-2.5 bg-[#0a0a0a] border-b border-gray-800">
      {/* Left Side - Logo and Navigation */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-white triangle-logo" />
          <span className="text-lg font-bold text-white">AXIOM</span>
          <span className="text-xs text-gray-400 font-medium">Pro</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-1">
          {navigationItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              className={`text-sm font-medium px-3 py-1.5 h-8 rounded-full transition-all duration-200 ${
                item.active
                  ? "bg-gray-800 text-blue-400 hover:text-blue-400 hover:bg-blue-500/10"
                  : "text-gray-300 hover:text-blue-400 hover:bg-blue-500/10"
              }`}
            >
              {item.name}
            </Button>
          ))}
        </nav>
      </div>

      {/* Right Side - Search, Actions, User */}
      <div className="flex items-center space-x-3">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search by token or CA..."
            className="pl-10 pr-8 py-2 w-64 text-sm bg-gray-900 border-gray-700 text-white placeholder-gray-400 h-9 rounded-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 font-mono">/</span>
        </div>

        {/* Deposit Button */}
        <Button
          variant="default"
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 border-0 text-white text-sm font-medium px-4 py-2 h-9 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Deposit
        </Button>

        {/* Action Icons */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 rounded-full bg-gray-800"
          >
            <Star className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 rounded-full bg-gray-800"
          >
            <Bell className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 rounded-full bg-gray-800 flex items-center justify-center"
          >
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 border border-gray-400 rounded-sm" />
              <span className="text-xs">0</span>
            </div>
          </Button>
        </div>

        {/* Wallet/Balance Section */}
        <div className="flex items-center space-x-2 bg-gray-800 rounded-full px-3 py-1">
          {/* Balance Display */}
          <div className="flex items-center space-x-2 text-sm">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-white font-medium">0</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span className="text-white font-medium">0</span>
            </div>
          </div>

          {/* Dropdown Button */}
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 px-1 py-1 h-6 rounded"
          >
            <ChevronDown className="w-3 h-3" />
          </Button>
        </div>

        {/* User Profile */}
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 rounded-full bg-gray-800"
        >
          <User className="w-4 h-4" />
        </Button>
      </div>
    </header>
  )
})

Header.displayName = "Header"

export default Header 