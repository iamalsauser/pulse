"use client"

import { memo } from "react"
import { Star, TrendingUp } from "lucide-react"
import { Button } from "./ui/button"

export const SecondaryNav = memo(() => {
  return (
    <div className="flex items-center px-4 py-0.5 bg-[#0a0a0a] border-b border-gray-800">
      <div className="flex items-center space-x-0.5">
        <Button
          variant="ghost"
          size="icon"
          className="w-5 h-5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 rounded"
        >
          <Star className="w-2.5 h-2.5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-5 h-5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 rounded"
        >
          <TrendingUp className="w-2.5 h-2.5" />
        </Button>
      </div>
    </div>
  )
})

SecondaryNav.displayName = "SecondaryNav" 