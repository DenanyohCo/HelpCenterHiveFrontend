import Hero from "@/components/hero";
import WebsiteCollection from "@/components/websiteCollection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 min-h-screen">
        <Hero />
        <WebsiteCollection />
    </div>
  );
}
