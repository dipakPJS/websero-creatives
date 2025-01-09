"use client"
export default function CurveComponent() {
    return (
        <div className="curve z-[2] overflow-hidden m-0 p-0 pb-10 h-[200px]">
        <div className="curve-inner h-full w-full" style={{
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          backgroundColor: "black",
          transform: "scale(1.5)"
        }}></div>
      </div>
    )
}