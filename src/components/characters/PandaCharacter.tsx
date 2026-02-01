import { cn } from "@/lib/utils";

interface PandaCharacterProps {
  className?: string;
  pose?: "default" | "receiving" | "happy" | "hugging" | "kissing" | "blushing";
}

const PandaCharacter = ({ className, pose = "default" }: PandaCharacterProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("w-32 h-32", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Panda ears */}
      <circle cx="55" cy="45" r="25" fill="#1a1a1a" />
      <circle cx="145" cy="45" r="25" fill="#1a1a1a" />

      {/* Panda head */}
      <ellipse cx="100" cy="85" rx="55" ry="50" fill="#FAFAFA" />

      {/* Eye patches */}
      <ellipse cx="70" cy="75" rx="22" ry="18" fill="#1a1a1a" transform="rotate(-10 70 75)" />
      <ellipse cx="130" cy="75" rx="22" ry="18" fill="#1a1a1a" transform="rotate(10 130 75)" />

      {/* Eyes */}
      <ellipse cx="70" cy="75" rx="8" ry="10" fill="white" />
      <ellipse cx="130" cy="75" rx="8" ry="10" fill="white" />
      <ellipse cx="72" cy="75" rx="5" ry="6" fill="#1a1a1a" />
      <ellipse cx="132" cy="75" rx="5" ry="6" fill="#1a1a1a" />
      <circle cx="73" cy="73" r="2" fill="white" />
      <circle cx="133" cy="73" r="2" fill="white" />

      {/* Nose */}
      <ellipse cx="100" cy="95" rx="10" ry="7" fill="#1a1a1a" />
      <ellipse cx="100" cy="93" rx="3" ry="2" fill="#4a4a4a" />

      {/* Mouth */}
      <path
        d="M 88 103 Q 100 113 112 103"
        stroke="#1a1a1a"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Blush - more prominent for certain poses */}
      <ellipse 
        cx="55" 
        cy="90" 
        rx="12" 
        ry="7" 
        fill="#FF69B4" 
        opacity={pose === "blushing" || pose === "kissing" ? "0.8" : "0.5"} 
      />
      <ellipse 
        cx="145" 
        cy="90" 
        rx="12" 
        ry="7" 
        fill="#FF69B4" 
        opacity={pose === "blushing" || pose === "kissing" ? "0.8" : "0.5"} 
      />

      {/* Bow on head */}
      <path
        d="M 85 30 Q 75 20 70 35 Q 75 40 85 35"
        fill="#FF69B4"
      />
      <path
        d="M 85 30 Q 95 20 100 35 Q 95 40 85 35"
        fill="#FF69B4"
      />
      <circle cx="85" cy="35" r="5" fill="#FF1493" />

      {/* Body */}
      <ellipse cx="100" cy="160" rx="45" ry="35" fill="#FAFAFA" />

      {/* Belly pattern */}
      <ellipse cx="100" cy="160" rx="30" ry="25" fill="#f0f0f0" />

      {/* Arms based on pose */}
      {pose === "default" && (
        <>
          <ellipse cx="55" cy="150" rx="15" ry="25" fill="#1a1a1a" transform="rotate(-20 55 150)" />
          <ellipse cx="145" cy="150" rx="15" ry="25" fill="#1a1a1a" transform="rotate(20 145 150)" />
        </>
      )}

      {pose === "receiving" && (
        <>
          <ellipse cx="50" cy="140" rx="15" ry="25" fill="#1a1a1a" transform="rotate(-50 50 140)" />
          <ellipse cx="150" cy="140" rx="15" ry="25" fill="#1a1a1a" transform="rotate(50 150 140)" />
        </>
      )}

      {pose === "happy" && (
        <>
          <ellipse cx="40" cy="130" rx="15" ry="25" fill="#1a1a1a" transform="rotate(-80 40 130)" />
          <ellipse cx="160" cy="130" rx="15" ry="25" fill="#1a1a1a" transform="rotate(80 160 130)" />
        </>
      )}

      {pose === "hugging" && (
        <>
          <ellipse cx="45" cy="135" rx="15" ry="25" fill="#1a1a1a" transform="rotate(-70 45 135)" />
          <ellipse cx="155" cy="135" rx="15" ry="25" fill="#1a1a1a" transform="rotate(70 155 135)" />
        </>
      )}

      {pose === "kissing" && (
        <>
          <ellipse cx="50" cy="140" rx="15" ry="25" fill="#1a1a1a" transform="rotate(-50 50 140)" />
          <ellipse cx="150" cy="140" rx="15" ry="25" fill="#1a1a1a" transform="rotate(50 150 140)" />
        </>
      )}

      {pose === "blushing" && (
        <>
          <ellipse cx="55" cy="145" rx="15" ry="25" fill="#1a1a1a" transform="rotate(-30 55 145)" />
          <ellipse cx="145" cy="145" rx="15" ry="25" fill="#1a1a1a" transform="rotate(30 145 145)" />
        </>
      )}

      {/* Feet */}
      <ellipse cx="75" cy="190" rx="18" ry="10" fill="#1a1a1a" />
      <ellipse cx="125" cy="190" rx="18" ry="10" fill="#1a1a1a" />
    </svg>
  );
};

export default PandaCharacter;
