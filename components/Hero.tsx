import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] bg-gray-100 px-6 pt-10">
      {/* Left Image */}
      <div className="w-full max-w-2xl md:mr-10">
        <Image
          src="/homepage.webp"
          alt="Finance management illustration"
          width={650}
          height={400}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>

      {/* Right Content */}
      <div className="text-center md:text-left max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Manage Your Finances With Intelligence
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Take control of your financial future with smart insights and powerful tools.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <Button className="px-6 py-3 text-lg">Get Started</Button>
          <Button className="px-6 py-3 text-lg bg-white text-gray-900 border border-gray-300 hover:bg-gray-200">
            Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
