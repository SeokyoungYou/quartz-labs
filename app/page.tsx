import Galaxy from "@/components/Galaxy/Galaxy";
import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Galaxy
      // mouseRepulsion={true}
      // mouseInteraction={true}
      // density={1.5}
      // glowIntensity={0.5}
      // saturation={0.8}
      // hueShift={240}
      />
      <div>hi</div>
    </div>
  );
}
