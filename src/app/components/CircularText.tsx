export default function CircularText() {
    const text = " #BUILT_AT_ARAMBH";
  
    return (
      <div className="relative w-40 h-40 flex items-center justify-center ">
        <div className="relative w-full h-full rounded-full ">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="absolute text-sm font-bold uppercase"
              style={{
                transform: `rotate(${index * (360 / text.length)}deg) translate(0, -100%)`,
                transformOrigin: "center 200%",
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    );
  }
  