import React from 'react';

interface TokenData {
  name: string;
  subtitle: string;
  timeago: string;
  logo: {
    background: string;
    border?: string;
    emoji: string;
    badge: string;
  };
  stats: {
    users: number;
    charts: number;
    trophies: number;
    crowns: number;
  };
  address: string;
  marketData: {
    mc: string;
    volume: string;
    f: string;
    tx: string;
  };
  percentages: {
    user: { value: string; color: string };
    ghost: { value: string; time?: string; color: string };
    target: { value: string; color: string };
    lock: { value: string; color: string };
    warning: { value: string; color: string };
  };
  icons: {
    pen: boolean;
    globe: boolean;
    telegram: boolean;
    search: boolean;
  };
  rightIcons: Array<{ icon: string; color: string }>;
  showSolButton: boolean;
}

interface Token {
  id: string;
  name: string;
  symbol: string;
  age: string;
  marketCap: string;
  price: string;
  volume24h: string;
  transactions24h: string;
  priceChange24h: string;
  image: string;
  holders: string;
  buys: string;
  sells: string;
  creator: string;
}

const formatMarketCap = (marketCap: string) => {
  const num = parseFloat(marketCap);
  if (num >= 1e12) return `$${(num / 1e12).toFixed(1)}T`;
  if (num >= 1e9) return `$${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `$${(num / 1e3).toFixed(1)}K`;
  return `$${num.toFixed(0)}`;
};

const formatPrice = (price: string) => {
  const num = parseFloat(price);
  if (num < 0.01) return num.toFixed(4);
  if (num < 1) return num.toFixed(3);
  return num.toFixed(2);
};

const SingleTokenComponent: React.FC<{ tokenData: TokenData }> = ({ tokenData }) => {
  return (
    <div className="bg-gray-950 text-white font-sans" style={{ backgroundColor: 'rgb(16,17,20)' }}>
      <div className="p-3 border-b border-gray-800">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
          <div className="flex items-start space-x-3 min-w-0 flex-1">
            {/* Token Logo */}
            <div className="relative flex-shrink-0">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 ${tokenData.logo.background} rounded-lg ${tokenData.logo.border || ''} flex items-center justify-center`}>
                <span className="text-lg sm:text-2xl">{tokenData.logo.emoji}</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-xs">{tokenData.logo.badge}</span>
              </div>
            </div>
            
            <div className="min-w-0 flex-1">
              {/* Token Name & Subtitle */}
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-bold text-sm sm:text-base truncate">{tokenData.name}</span>
                <span className="text-gray-400 text-xs sm:text-sm truncate">{tokenData.subtitle}</span>
                <span className="text-gray-500 text-xs sm:text-sm flex-shrink-0">📋</span>
              </div>
              
              {/* Action Icons */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm mb-2">
                <span className="text-green-400">{tokenData.timeago}</span>
                {tokenData.icons.pen && <span className="text-gray-400">🖊️</span>}
                {tokenData.icons.globe && <span className="text-gray-400">🌐</span>}
                {tokenData.icons.telegram && <span className="text-gray-400">📢</span>}
                {tokenData.icons.search && <span className="text-gray-400">🔍</span>}
                <span className="text-gray-400">👥{tokenData.stats.users}</span>
                <span className="text-gray-400">📊{tokenData.stats.charts}</span>
                <span className="text-gray-400">🏆{tokenData.stats.trophies}</span>
                <span className="text-gray-400">👑{tokenData.stats.crowns}</span>
              </div>
              
              {/* Bottom Percentages - Responsive */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm">
                <span className={`${tokenData.percentages.user.color} flex items-center space-x-1`}>
                  <span>👤</span>
                  <span>{tokenData.percentages.user.value}</span>
                </span>
                <span className={`${tokenData.percentages.ghost.color} flex items-center space-x-1`}>
                  <span>👻</span>
                  <span>{tokenData.percentages.ghost.value}</span>
                  {tokenData.percentages.ghost.time && <span>{tokenData.percentages.ghost.time}</span>}
                </span>
                <span className={`${tokenData.percentages.target.color} flex items-center space-x-1`}>
                  <span>🎯</span>
                  <span>{tokenData.percentages.target.value}</span>
                </span>
                <span className={`${tokenData.percentages.lock.color} flex items-center space-x-1`}>
                  <span>🔒</span>
                  <span>{tokenData.percentages.lock.value}</span>
                </span>
                <span className={`${tokenData.percentages.warning.color} flex items-center space-x-1`}>
                  <span>⚠️</span>
                  <span>{tokenData.percentages.warning.value}</span>
                </span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Market Data */}
          <div className="text-right flex-shrink-0">
            <div className="text-white text-base sm:text-lg font-bold">MC {tokenData.marketData.mc}</div>
            <div className="text-gray-300 text-sm">V {tokenData.marketData.volume}</div>
            <div className="text-xs text-gray-400">F ≡ {tokenData.marketData.f} TX {tokenData.marketData.tx} ▬</div>
            
            {/* Right Icons or SOL Button */}
            {tokenData.showSolButton ? (
              <button className="bg-blue-600 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm mt-1">⚡ 0 SOL</button>
            ) : (
              <div className="flex items-center space-x-2 mt-1">
                {tokenData.rightIcons.map((iconData, index) => (
                  <span key={index} className={iconData.color}>{iconData.icon}</span>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Wallet Address - Moved to Bottom */}
        <div className="text-gray-300 text-xs mt-3 break-all">{tokenData.address}</div>
      </div>
    </div>
  );
};

const NewPairsTokenCard: React.FC<{ token: Token }> = ({ token }) => {
  // Convert the old token format to the new TokenData format with new pairs styling
  const tokenData: TokenData = {
    name: token.name,
    subtitle: token.symbol,
    timeago: token.age,
    logo: {
      background: "bg-green-400",
      border: "border-2 border-green-500",
      emoji: "🆕",
      badge: "🔥"
    },
    stats: {
      users: parseInt(token.holders) || 0,
      charts: parseInt(token.buys) || 0,
      trophies: 0,
      crowns: 0
    },
    address: token.creator,
    marketData: {
      mc: formatMarketCap(token.marketCap),
      volume: formatMarketCap(token.volume24h),
      f: formatPrice(token.price),
      tx: token.transactions24h
    },
    percentages: {
      user: { value: "8%", color: "text-green-400" },
      ghost: { value: "5%", time: "1d", color: "text-green-400" },
      target: { value: "6%", color: "text-green-400" },
      lock: { value: "0%", color: "text-green-400" },
      warning: { value: "2%", color: "text-green-400" }
    },
    icons: {
      pen: true,
      globe: true,
      telegram: true,
      search: true
    },
    rightIcons: [],
    showSolButton: true
  };

  return <SingleTokenComponent tokenData={tokenData} />;
};

export default NewPairsTokenCard; 