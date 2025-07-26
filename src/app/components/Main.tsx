"use client";

import { useState, useEffect, useMemo } from 'react';
import { Search, TrendingUp, TrendingDown, Eye, MessageCircle, Users, Volume2, VolumeX, Settings, Star, Bell, User, ChevronDown, Zap, Globe, ChevronUp } from 'lucide-react';

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
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4 hover:bg-gray-800 transition-all">
      <div className="flex items-start gap-4">
        <div className="relative">
          <img
            src={token.image}
            alt={token.name}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="absolute -bottom-1 -right-1 bg-orange-500 rounded-full w-5 h-5 flex items-center justify-center">
            <span className="text-white text-xs">🔥</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white font-semibold text-lg">{token.name}</h3>
                <span className="text-gray-400 text-sm">{token.symbol}</span>
                <span className="bg-gray-700 text-gray-300 px-1 py-0.5 rounded text-xs">📋</span>
              </div>
              <div className="text-green-400 text-sm">{token.age}s</div>
            </div>
            <div className="text-right">
              <div className="text-blue-400 font-bold text-lg">MC ${token.mcValue}</div>
              <div className="text-white text-lg">v ${token.priceValue}</div>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <span>🪶</span>
              <span>👑</span>
              <Search className="w-4 h-4" />
              <Users className="w-4 h-4" />
              <span>{stats.users}</span>
              <span>📈 {stats.upvotes}</span>
              <span>📉 {stats.downvotes}</span>
              <span>👑 {stats.crown}</span>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-2 mb-3">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-red-400 text-sm">{token.priceChange24h}%</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-green-400 text-sm">{Math.abs(token.change1h)}%</span>
              <span className="text-gray-400 text-xs">1mo</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-red-400 text-sm">{Math.abs(token.change5m)}%</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-green-400 text-sm">0%</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-green-400 text-sm">0%</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="text-gray-400">{token.creator}</div>
            <div className="flex items-center gap-4 text-gray-400">
              <span className="flex items-center gap-1">
                <span>F</span>
                <div className="w-8 h-1 bg-gray-600 rounded">
                  <div className="w-1/3 h-full bg-blue-400 rounded"></div>
                </div>
                <span>{stats.f}</span>
              </span>
              <span>TX {stats.tx}</span>
              <div className="w-8 h-1 bg-gray-600 rounded">
                <div className="w-2/3 h-full bg-green-400 rounded"></div>
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
    <div className="flex-1 border-r border-gray-800 last:border-r-0 h-[calc(100vh-280px)] flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900/30 border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h3 className="text-white font-medium text-sm">{title}</h3>
          <span className="bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded text-xs">{count}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 text-xs text-gray-400">
            <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-xs">P1</span>
            <span>P2</span>
            <span>P3</span>
          </div>
          <ChevronUp className="w-3 h-3 text-gray-400" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <div className="p-3">
          {tokens.map((token) => (
            isNewPairs ?
              <NewPairsTokenCard key={token.id} token={token} /> :
              <TokenCard key={token.id} token={token} />
          ))}
          {tokens.length === 0 && (
            <div className="text-center py-8 text-gray-500">
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
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-[72px] pb-[56px]">
      {/* Stats Overview */}
      <div className="px-6 py-4 border-b border-gray-800">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-900/50 rounded-lg p-3">
            <div className="text-sm text-gray-400">Total Tokens</div>
            <div className="text-xl font-bold text-white">{enhancedTokens.length}</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-3">
            <div className="text-sm text-gray-400">New Pairs</div>
            <div className="text-xl font-bold text-yellow-400">{categorizedTokens.new.length}</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-3">
            <div className="text-sm text-gray-400">Final Stretch</div>
            <div className="text-xl font-bold text-orange-400">{categorizedTokens.final.length}</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-3">
            <div className="text-sm text-gray-400">Migrated</div>
            <div className="text-xl font-bold text-blue-400">{categorizedTokens.migrated.length}</div>
          </div>
        </div>
      </div>
      {/* Three Column Layout */}
      <div className="flex min-h-[calc(100vh-280px)]">
        <ColumnSection
          title="New Pairs"
          tokens={categorizedTokens.new}
          count={categorizedTokens.new.length}
          icon={TrendingUp}
          isNewPairs={true}
        />
        <ColumnSection
          title="Final Stretch"
          tokens={categorizedTokens.final}
          count={categorizedTokens.final.length}
          icon={TrendingUp}
        />
        <ColumnSection
          title="Migrated"
          tokens={categorizedTokens.migrated}
          count={categorizedTokens.migrated.length}
          icon={TrendingUp}
        />
      </div>
    </div>
  );
};

export default Main; 