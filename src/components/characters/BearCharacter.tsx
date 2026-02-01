import { cn } from "@/lib/utils";

interface BearCharacterProps {
  className?: string;
  pose?: "default" | "giving" | "proposing" | "hugging" | "kissing" | "waving";
}

const BearCharacter = ({ className, pose = "default" }: BearCharacterProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("w-32 h-32", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bear ears */}
      <circle cx="55" cy="45" r="25" fill="#8B6914" />
      <circle cx="55" cy="45" r="15" fill="#D4A574" />
      <circle cx="145" cy="45" r="25" fill="#8B6914" />
      <circle cx="145" cy="45" r="15" fill="#D4A574" />

      {/* Bear head */}
      <ellipse cx="100" cy="85" rx="55" ry="50" fill="#C4915C" />

      {/* Bear face (lighter area) */}
      <ellipse cx="100" cy="95" rx="35" ry="30" fill="#E8D4B8" />

      {/* Eyes */}
      <ellipse cx="75" cy="75" rx="8" ry="10" fill="#2C1810" />
      <ellipse cx="125" cy="75" rx="8" ry="10" fill="#2C1810" />
      <circle cx="77" cy="73" r="3" fill="white" />
      <circle cx="127" cy="73" r="3" fill="white" />

      {/* Nose */}
      <ellipse cx="100" cy="95" rx="12" ry="8" fill="#2C1810" />
      <ellipse cx="100" cy="93" rx="4" ry="2" fill="#5C4033" />

      {/* Mouth */}
      <path
        d="M 88 105 Q 100 115 112 105"
        stroke="#2C1810"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Blush */}
      <ellipse cx="60" cy="90" rx="10" ry="6" fill="#FFB6C1" opacity="0.6" />
      <ellipse cx="140" cy="90" rx="10" ry="6" fill="#FFB6C1" opacity="0.6" />

      {/* Body */}
      <ellipse cx="100" cy="160" rx="45" ry="35" fill="#C4915C" />

      {/* Belly */}
      <ellipse cx="100" cy="160" rx="30" ry="25" fill="#E8D4B8" />

      {/* Arms based on pose */}
      {pose === "default" && (
        <>
          <ellipse cx="55" cy="150" rx="15" ry="25" fill="#C4915C" transform="rotate(-20 55 150)" />
          <ellipse cx="145" cy="150" rx="15" ry="25" fill="#C4915C" transform="rotate(20 145 150)" />
        </>
      )}

      {pose === "giving" && (
        <>
          <ellipse cx="55" cy="145" rx="15" ry="25" fill="#C4915C" transform="rotate(-45 55 145)" />
          <ellipse cx="150" cy="130" rx="15" ry="25" fill="#C4915C" transform="rotate(60 150 130)" />
        </>
      )}

      {pose === "proposing" && (
        <>
          <ellipse cx="60" cy="155" rx="15" ry="25" fill="#C4915C" transform="rotate(-10 60 155)" />
          <ellipse cx="145" cy="145" rx="15" ry="25" fill="#C4915C" transform="rotate(45 145 145)" />
        </>
      )}

      {pose === "hugging" && (
        <>
          <ellipse cx="45" cy="135" rx="15" ry="25" fill="#C4915C" transform="rotate(-70 45 135)" />
          <ellipse cx="155" cy="135" rx="15" ry="25" fill="#C4915C" transform="rotate(70 155 135)" />
        </>
      )}

      {pose === "kissing" && (
        <>
          <ellipse cx="50" cy="140" rx="15" ry="25" fill="#C4915C" transform="rotate(-50 50 140)" />
          <ellipse cx="150" cy="140" rx="15" ry="25" fill="#C4915C" transform="rotate(50 150 140)" />
        </>
      )}

      {pose === "waving" && (
        <>
          <ellipse cx="55" cy="150" rx="15" ry="25" fill="#C4915C" transform="rotate(-20 55 150)" />
          <ellipse cx="160" cy="110" rx="15" ry="25" fill="#C4915C" transform="rotate(80 160 110)" />
        </>
      )}

      {/* Feet */}
      <ellipse cx="75" cy="190" rx="18" ry="10" fill="#C4915C" />
      <ellipse cx="125" cy="190" rx="18" ry="10" fill="#C4915C" />
    </svg>
  );
};

export default BearCharacter;
