import Image from "next/image";
import { testimonialsData } from "@/data/landing";

// Define the Testimonial type
interface Testimonial {
  image: string;
  name: string;
  role: string;
  quote: string;
}

const TestimonialSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          What Our Users Say
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          See how Welth is helping people take control of their finances.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {testimonialsData.map((testimonial: Testimonial, index: number) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              {/* Fix: Escape double quotes properly */}
              <p className="mt-4 text-gray-700 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
