import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex items-center mt-32 gap-5 flex-col">
      <h2 className="text-primary text-center text-5xl font-bold">
        Rekomedasi mobil dengan ai
      </h2>
      <h2 className="text-center text-3xl font-bold">Hero Sub</h2>
      <p className="text-gray-600 text-lg text-center">Hero Desc</p>

      <div className="flex w-full max-w-2xl items-center justify-center gap-6 mt-10">
        <Link href={"/create"}>
          <Button className="w-full p-6">Get Started</Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
