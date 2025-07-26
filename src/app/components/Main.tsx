"use client";

import { useState, useEffect, useMemo } from 'react';
import { Search, TrendingUp, TrendingDown, Eye, MessageCircle, Users, Volume2, VolumeX, Settings, Star, Bell, User, ChevronDown, Zap, Globe, ChevronUp, BarChart3 } from 'lucide-react';

// Mock data for demonstration
const mockTokens = [
  {
    id: 1,
    name: "TIAGO",
    symbol: "tiago",
    age: "3",
    marketCap: 7000,
    price: 5000,
    volume24h: 7000,
    transactions24h: 7,
    priceChange24h: 16,
    image: "https://images.unsplash.com/photo-1494790108755-2616c40a6e45?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Viper",
    symbol: "Viper",
    age: "8",
    marketCap: 5000,
    price: 0,
    volume24h: 0,
    transactions24h: 0,
    priceChange24h: 7,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "priceless",
    symbol: "Mona Lisa",
    age: "14",
    marketCap: 5000,
    price: 134,
    volume24h: 11000,
    transactions24h: 11,
    priceChange24h: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/100px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  },
  {
    id: 4,
    name: "TRUTHF",
    symbol: "Truth Fiasco",
    age: "14",
    marketCap: 5000,
    price: 1,
    volume24h: 4000,
    transactions24h: 4,
    priceChange24h: 0,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "tiago",
    symbol: "Lofi Girl's friend",
    age: "16",
    marketCap: 5000,
    price: 2000,
    volume24h: 7000,
    transactions24h: 7,
    priceChange24h: -5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

interface Token {
  id: number;
  name: string;
  symbol: string;
  age: string;
  marketCap: number;
  price: number;
  volume24h: number;
  transactions24h: number;
  priceChange24h: number;
  image: string;
}

interface EnhancedToken extends Token {
  category: 'new' | 'final' | 'migrated';
  mcValue: string;
  priceValue: string;
  txValue: string;
  holders: number;
  creator: string;
  buys: number;
  sells: number;
  change5m: number;
  change1h: number;
  change24h: number;
}

const formatMarketCap = (mc: number): string => {
  if (mc >= 1000000) return `$${(mc / 1000000).toFixed(1)}M`;
  if (mc >= 1000) return `$${(mc / 1000).toFixed(0)}K`;
  return `$${mc}`;
};

const formatPrice = (price: number): string => {
  if (price >= 1000000) return `$${(price / 1000000).toFixed(0)}M`;
  if (price >= 1000) return `$${(price / 1000).toFixed(0)}K`;
  return `$${price}`;
};

const formatNumber = (num: number, decimals = 0): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
};

const enhanceTokenData = (tokens: Token[]): EnhancedToken[] => {
  const expandedTokens: Token[] = [];
  for (let i = 0; i < 8; i++) {
    expandedTokens.push(...tokens.map(token => ({
      ...token,
      id: token.id + (i * 100),
      name: `${token.name}_${i + 1}`,
      symbol: `${token.symbol}_${i + 1}`
    })));
  }
  return expandedTokens.map((token, index) => {
    const ageInSeconds = token.age ? parseInt(token.age.replace('s', '')) : 0;
    let category: 'new' | 'final' | 'migrated' = 'migrated';
    const categoryIndex = index % 3;
    if (categoryIndex === 0) {
      category = 'new';
    } else if (categoryIndex === 1) {
      category = 'final';
    } else {
      category = 'migrated';
    }
    return {
      ...token,
      category,
      mcValue: formatMarketCap(token.marketCap),
      priceValue: formatPrice(token.price),
      txValue: formatNumber(token.volume24h / 1000, 2) + 'K',
      holders: Math.floor(Math.random() * 100),
      creator: `Creator_${Math.random().toString(36).substr(2, 6)}`,
      buys: Math.floor(token.transactions24h * 0.6),
      sells: Math.floor(token.transactions24h * 0.4),
      change5m: Math.floor(Math.random() * 20) - 10,
      change1h: Math.floor(Math.random() * 30) - 15,
      change24h: token.priceChange24h + (Math.random() * 10 - 5)
    };
  });
};

const NewPairsTokenCard: React.FC<{ token: EnhancedToken }> = ({ token }) => {
  const getRandomStats = () => ({
    users: Math.floor(Math.random() * 10),
    upvotes: Math.floor(Math.random() * 20),
    downvotes: Math.floor(Math.random() * 5),
    crown: Math.floor(Math.random() * 100),
    f: (Math.random() * 0.5).toFixed(3),
    tx: Math.floor(Math.random() * 10)
  });
  const stats = getRandomStats();
  return (
    <div className="border border-[#3A3A3A] rounded-lg p-3 hover:bg-[#3A3A3A] transition-all duration-200 mb-3 min-w-0" style={{backgroundColor: '#101114'}}>
      <div className="flex items-start gap-3 min-w-0">
        {/* Token Image with Badges - Square Frame */}
        <div className="relative flex-shrink-0">
          <img
            src={`https://picsum.photos/64/64?random=${token.id}`}
            alt={token.name}
            className="w-14 h-14 rounded-lg object-cover border border-[#3A3A3A]"
          />
          {/* Action Badges around token icon */}
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-[#2A2A2A] rounded flex items-center justify-center">
            <span className="text-white text-xs">👁️</span>
          </div>
          <div className="absolute -top-1 left-5 w-4 h-4 bg-[#2A2A2A] rounded flex items-center justify-center">
            <span className="text-white text-xs">👨‍🍳</span>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-[#F97316] rounded-full w-4 h-4 flex items-center justify-center border border-[#2A2A2A]">
            <span className="text-white text-xs">🔥</span>
          </div>
        </div>

        {/* Token Info and Stats */}
        <div className="flex-1 min-w-0">
          {/* Header row */}
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white font-semibold text-base truncate">{token.name}</h3>
                <span className="text-[#9CA3AF] text-sm truncate">{token.symbol}</span>
                <span className="bg-[#3A3A3A] text-[#9CA3AF] px-1 py-0.5 rounded text-xs flex-shrink-0">📋</span>
              </div>
              <div className="text-[#10B981] text-sm font-medium">{token.age}s</div>
            </div>
            
            <div className="text-right flex-shrink-0 ml-2">
              <div className="text-[#3B82F6] font-bold text-sm">MC ${token.mcValue}</div>
              <div className="text-white text-sm font-medium">V ${token.priceValue}</div>
            </div>
          </div>

          {/* Metrics row - Os, cat, search, users, chart, trophy, crown */}
          <div className="flex items-center gap-2 mb-2 text-xs text-[#9CA3AF]">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="text-[#10B981] font-medium">Os</span>
              <span>🐱</span>
              <span>🔍</span>
              <span>👥 {stats.users}</span>
              <span>📊 {stats.upvotes}</span>
              <span>🏆 {stats.downvotes}</span>
              <span>👑 {stats.crown}</span>
            </div>
          </div>

          {/* Percentage indicator cards */}
          <div className="flex items-center gap-1 mb-2 flex-wrap">
            <div className="bg-[#2A2A2A] rounded px-1.5 py-0.5 flex items-center gap-1 border border-[#3A3A3A]">
              <span className="text-[#EF4444] text-xs">👤</span>
              <span className="text-[#EF4444] text-xs">{token.priceChange24h}%</span>
            </div>
            <div className="bg-[#2A2A2A] rounded px-1.5 py-0.5 flex items-center gap-1 border border-[#3A3A3A]">
              <span className="text-[#EF4444] text-xs">👨‍🍳</span>
              <span className="text-[#EF4444] text-xs">{token.priceChange24h}%</span>
              <span className="text-[#9CA3AF] text-xs">10d</span>
            </div>
            <div className="bg-[#2A2A2A] rounded px-1.5 py-0.5 flex items-center gap-1 border border-[#3A3A3A]">
              <span className="text-[#EF4444] text-xs">🎯</span>
              <span className="text-[#EF4444] text-xs">{token.priceChange24h}%</span>
            </div>
            <div className="bg-[#2A2A2A] rounded px-1.5 py-0.5 flex items-center gap-1 border border-[#3A3A3A]">
              <span className="text-[#10B981] text-xs">👻</span>
              <span className="text-[#10B981] text-xs">0%</span>
            </div>
            <div className="bg-[#2A2A2A] rounded px-1.5 py-0.5 flex items-center gap-1 border border-[#3A3A3A]">
              <span className="text-[#10B981] text-xs">🧊</span>
              <span className="text-[#10B981] text-xs">0%</span>
            </div>
          </div>

          {/* Bottom info bar */}
          <div className="flex items-center justify-between text-xs">
            <div className="text-[#9CA3AF] font-medium truncate">{token.creator}</div>
            <div className="flex items-center gap-2 text-[#9CA3AF] flex-shrink-0">
              <span className="flex items-center gap-1">
                <span className="font-medium">F</span>
                <span className="text-purple-400">{stats.f}</span>
                <div className="w-6 h-1 bg-[#4B5563] rounded-full">
                  <div className="w-1/3 h-full bg-[#3B82F6] rounded-full"></div>
                </div>
              </span>
              <span className="font-medium">TX {stats.tx}</span>
              <div className="w-6 h-1 bg-[#4B5563] rounded-full">
                <div className="w-2/3 h-full bg-[#10B981] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TokenCard: React.FC<{ token: EnhancedToken }> = ({ token }) => {
  const [currentPrice, setCurrentPrice] = useState(token.price);
  const [priceDirection, setPriceDirection] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 0.05;
      const newPrice = Math.max(1, currentPrice * (1 + change));
      if (newPrice > currentPrice) {
        setPriceDirection('up');
      } else if (newPrice < currentPrice) {
        setPriceDirection('down');
      }
      setCurrentPrice(newPrice);
      setTimeout(() => setPriceDirection(null), 500);
    }, 3000 + Math.random() * 4000);
    return () => clearInterval(interval);
  }, [currentPrice]);

  const getBadgeColor = (change: number): string => {
    if (change > 0) return 'bg-green-600/20 text-green-400';
    if (change < 0) return 'bg-red-600/20 text-red-400';
    return 'bg-gray-600/20 text-gray-400';
  };

  const getCategoryIcon = (category: string): string => {
    switch (category) {
      case 'new': return '🛡️';
      case 'final': return '🗡️';
      case 'migrated': return '👤';
      default: return '💎';
    }
  };

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 hover:bg-gray-900/70 transition-all hover:border-gray-700 mb-3">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="text-xl">{getCategoryIcon(token.category)}</div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center space-x-1">
              <span className="text-white font-medium text-sm truncate">{token.name}</span>
              <span className="text-gray-400 text-xs truncate">{token.symbol}</span>
              {token.category === 'new' && (
                <span className="bg-yellow-600/20 text-yellow-400 px-1 py-0.5 rounded text-xs">●</span>
              )}
            </div>
            <div className="text-xs text-gray-500">{token.age}s</div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Users className="w-3 h-3 text-gray-500" />
          <Globe className="w-3 h-3 text-gray-500" />
          <MessageCircle className="w-3 h-3 text-gray-500" />
          <Search className="w-3 h-3 text-gray-500" />
        </div>
      </div>
      <div className="flex items-center justify-between text-xs mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">👥 {token.holders}</span>
          <span className="text-gray-400">📈 {token.buys}</span>
          <span className="text-gray-400">📉 {token.sells}</span>
          <span className="text-gray-400">⚡ {token.transactions24h}</span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400">MC</div>
            <div className="text-sm font-medium text-white">{token.mcValue}</div>
          </div>
          <div className="text-right">
            <div className={`text-sm font-mono transition-colors ${
              priceDirection === 'up' ? 'text-green-400' :
              priceDirection === 'down' ? 'text-red-400' : 'text-white'
            }`}>
              v {token.priceValue}
            </div>
            <div className="text-xs text-gray-400">= {token.txValue}</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <span className={`px-1.5 py-0.5 rounded text-xs text-center ${getBadgeColor(token.change5m)}`}>
            {token.change5m > 0 ? '+' : ''}{token.change5m}%
          </span>
          <span className={`px-1.5 py-0.5 rounded text-xs text-center ${getBadgeColor(token.change1h)}`}>
            {token.change1h > 0 ? '+' : ''}{token.change1h}%
          </span>
          <span className={`px-1.5 py-0.5 rounded text-xs text-center ${getBadgeColor(token.change24h)}`}>
            {token.change24h > 0 ? '+' : ''}{token.change24h}%
          </span>
          <span className={`px-1.5 py-0.5 rounded text-xs text-center ${getBadgeColor(token.priceChange24h)}`}>
            {token.priceChange24h > 0 ? '+' : ''}{token.priceChange24h}%
          </span>
        </div>
        <div className="text-xs text-gray-500 pt-1 border-t border-gray-800 truncate">
          {token.creator}
        </div>
      </div>
    </div>
  );
};

interface ColumnSectionProps {
  title: string;
  tokens: EnhancedToken[];
  count: number;
  icon: any;
  isNewPairs?: boolean;
}

const ColumnSection: React.FC<ColumnSectionProps> = ({ title, tokens, count, icon: Icon, isNewPairs = false }) => {
  return (
    <div className="flex-1 h-full flex flex-col overflow-hidden" style={{backgroundColor: '#101114'}}>
      {/* Column Header - Updated to match desired design */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#2A2A2A] flex-shrink-0" style={{backgroundColor: '#101114'}}>
        <div className="flex items-center space-x-2">
          <span className="text-white font-medium text-sm">{title}</span>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Lightning bolt icon */}
          <Zap className="w-4 h-4 text-[#F59E0B]" />
          
          {/* Count */}
          <span className="text-[#9CA3AF] text-sm">{count}</span>
          
          {/* Menu icon */}
          <BarChart3 className="w-4 h-4 text-[#9CA3AF]" />
          
          {/* P1 P2 P3 buttons */}
          <div className="flex items-center space-x-1">
            <span className="bg-[#3B82F6] text-white px-2 py-1 rounded text-xs font-medium">P1</span>
            <span className="text-[#9CA3AF] px-1 py-1 text-xs">P2</span>
            <span className="text-[#9CA3AF] px-1 py-1 text-xs">P3</span>
          </div>
          
          {/* Sort icon */}
          <ChevronUp className="w-4 h-4 text-[#9CA3AF]" />
        </div>
      </div>
      
      {/* Token List - Scrollable content area with responsive sizing */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden" style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#4B5563 #101114',
        maxHeight: 'calc(100% - 60px)' // Account for header height
      }}>
        <div className="p-4 space-y-3 min-w-0">
          {tokens.map((token) => (
            isNewPairs ? 
              <NewPairsTokenCard key={token.id} token={token} /> :
              <TokenCard key={token.id} token={token} />
          ))}
          {tokens.length === 0 && (
            <div className="text-center py-8 text-[#9CA3AF]">
              No tokens in this category
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Main: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);
  const enhancedTokens = useMemo(() => enhanceTokenData(mockTokens), []);
  const categorizedTokens = useMemo(() => {
    const filtered = enhancedTokens.filter(token =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      new: filtered.filter(token => token.category === 'new'),
      final: filtered.filter(token => token.category === 'final'),
      migrated: filtered.filter(token => token.category === 'migrated')
    };
  }, [enhancedTokens, searchTerm]);

  // Detect zoom level changes
  useEffect(() => {
    const updateZoomLevel = () => {
      const zoom = window.visualViewport?.scale || window.devicePixelRatio || 1;
      setZoomLevel(zoom);
    };

    // Initial zoom level
    updateZoomLevel();

    // Listen for zoom changes
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateZoomLevel);
    } else {
      window.addEventListener('resize', updateZoomLevel);
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateZoomLevel);
      } else {
        window.removeEventListener('resize', updateZoomLevel);
      }
    };
  }, []);

  // Calculate inverse scale for internal content
  const contentScale = 1 / zoomLevel;
  
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pb-[56px] flex flex-col items-center">
      {/* Controls Section - Above Card Frame */}
      <div className="w-full max-w-7xl flex justify-start mb-4 px-8 mt-4">
        <div className="flex items-center space-x-3">
          {/* Display Dropdown */}
          <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors">
            <span className="text-sm text-[#9CA3AF]">Display</span>
            <ChevronDown className="w-4 h-4 text-[#9CA3AF]" />
          </div>
          
          {/* Volume Controls */}
          <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors">
            <Volume2 className="w-4 h-4 text-[#9CA3AF] hover:text-white transition-colors" />
          </div>
          <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors">
            <VolumeX className="w-4 h-4 text-[#9CA3AF] hover:text-white transition-colors" />
          </div>
          
          {/* Numerical Display */}
          <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors">
            <span className="text-sm text-[#9CA3AF]">1</span>
            <span className="text-sm text-[#9CA3AF]">=</span>
            <span className="text-sm text-[#9CA3AF]">0</span>
            <ChevronDown className="w-4 h-4 text-[#9CA3AF]" />
          </div>
        </div>
      </div>
      
      {/* Card-like Frame for Columns */}
      <div className="flex justify-center w-full overflow-hidden" style={{marginBottom: '26px', marginTop: '0px'}}>
        <div
          className="rounded-2xl shadow-2xl border border-[#1A1A1A] flex overflow-hidden"
          style={{ 
            width: 'min(95vw, 1752px)',
            height: 'min(85vh, 791px)',
            maxWidth: '95vw',
            maxHeight: '85vh',
            minWidth: '1200px',
            minHeight: '600px',
            position: 'relative', 
            zIndex: 10,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            backgroundColor: '#101114'
          }}
        >
          <div 
            className="flex w-full h-full"
            style={{
              transform: `scale(${contentScale})`,
              transformOrigin: 'top left',
              width: `${100 / contentScale}%`,
              height: `${100 / contentScale}%`
            }}
          >
            <div className="flex-1 h-full" style={{borderRight: '1px solid rgb(34,36,45)'}}>
              <ColumnSection
                title="New Pairs"
                tokens={categorizedTokens.new}
                count={categorizedTokens.new.length}
                icon={TrendingUp}
                isNewPairs={true}
              />
            </div>
            <div className="flex-1 h-full" style={{borderRight: '1px solid rgb(34,36,45)'}}>
              <ColumnSection
                title="Final Stretch"
                tokens={categorizedTokens.final}
                count={categorizedTokens.final.length}
                icon={TrendingUp}
                isNewPairs={true}
              />
            </div>
            <div className="flex-1 h-full">
              <ColumnSection
                title="Migrated"
                tokens={categorizedTokens.migrated}
                count={categorizedTokens.migrated.length}
                icon={TrendingUp}
                isNewPairs={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main; 