const TickerItems = ({ tickerItems }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="bg-gradient-to-r from-[#FE7F2C] via-[#FF4A3A] via-[#FA293E] to-[#CD0054] py-4">
        <div
          style={{
            display: "flex",
            animation: "marquee 10s linear infinite",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              whiteSpace: "nowrap",
              minWidth: "max-content",
            }}
          >
            {[...tickerItems, ...tickerItems].map((text, i) => (
              <span
                key={i}
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: 500,
                  padding: "0 32px",
                }}
              >
                • {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickerItems;