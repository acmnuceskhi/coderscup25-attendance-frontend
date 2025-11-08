// Trophy Watermark Component
function TrophyWatermark() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <svg width="400" height="500" viewBox="0 0 200 250" className="opacity-5">
        {/* Dragon */}
        <path d="M150 80 Q170 60 180 50 Q185 45 190 50 Q195 55 185 65 L170 80 Q175 90 170 100 L155 95 Z" fill="#930000"/>
        <ellipse cx="185" cy="52" rx="2" ry="2" fill="#000"/>
        
        {/* Trophy Cup */}
        <path d="M70 90 L60 70 Q58 65 62 65 L138 65 Q142 65 140 70 L130 90 Q128 100 125 110 L115 140 Q112 145 100 145 Q88 145 85 140 L75 110 Q72 100 70 90 Z" fill="#930000" stroke="#7a0000" strokeWidth="2"/>
        
        {/* Trophy Handles */}
        <path d="M60 70 Q45 70 40 80 Q38 90 45 95 L55 90 Z" fill="#930000" stroke="#7a0000" strokeWidth="1"/>
        <path d="M140 70 Q155 70 160 80 Q162 90 155 95 L145 90 Z" fill="#930000" stroke="#7a0000" strokeWidth="1"/>
        
        {/* Trophy Base */}
        <rect x="85" y="145" width="30" height="8" fill="#930000" rx="2"/>
        <rect x="75" y="153" width="50" height="15" fill="#930000" rx="3"/>
        <rect x="70" y="168" width="60" height="8" fill="#7a0000" rx="2"/>
        
        {/* Scroll/Paper inside trophy */}
        <rect x="75" y="75" width="50" height="55" fill="#FEFEEA" opacity="0.8" rx="2"/>
        <line x1="80" y1="85" x2="120" y2="85" stroke="#930000" strokeWidth="1" opacity="0.5"/>
        <line x1="80" y1="95" x2="120" y2="95" stroke="#930000" strokeWidth="1" opacity="0.5"/>
        <line x1="80" y1="105" x2="120" y2="105" stroke="#930000" strokeWidth="1" opacity="0.5"/>
        <line x1="80" y1="115" x2="120" y2="115" stroke="#930000" strokeWidth="1" opacity="0.5"/>
        
        {/* Dragon tail wrapping around */}
        <path d="M150 95 Q145 110 140 125 Q135 140 130 150" stroke="#930000" strokeWidth="4" fill="none" opacity="0.8"/>
        <path d="M50 95 Q55 110 60 125 Q65 140 70 150" stroke="#930000" strokeWidth="4" fill="none" opacity="0.8"/>
      </svg>
      
      {/* 2025 Watermark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[180px] font-black text-[#930000] opacity-[0.03] select-none" style={{ fontFamily: 'serif' }}>
          2025
        </span>
      </div>
    </div>
  );
}
export default TrophyWatermark