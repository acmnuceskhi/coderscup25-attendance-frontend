function BambooPattern() {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bamboo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <line x1="20" y1="0" x2="20" y2="100" stroke="#930000" strokeWidth="3"/>
            <line x1="60" y1="0" x2="60" y2="100" stroke="#930000" strokeWidth="3"/>
            <circle cx="20" cy="25" r="8" fill="none" stroke="#930000" strokeWidth="2"/>
            <circle cx="20" cy="50" r="8" fill="none" stroke="#930000" strokeWidth="2"/>
            <circle cx="20" cy="75" r="8" fill="none" stroke="#930000" strokeWidth="2"/>
            <circle cx="60" cy="25" r="8" fill="none" stroke="#930000" strokeWidth="2"/>
            <circle cx="60" cy="50" r="8" fill="none" stroke="#930000" strokeWidth="2"/>
            <circle cx="60" cy="75" r="8" fill="none" stroke="#930000" strokeWidth="2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bamboo)"/>
      </svg>
    </div>
  );
}

export default BambooPattern