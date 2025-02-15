import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { featuresData } from "@/data/landing"; // Importing features data

// Define the Feature type
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Powerful Features</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Unlock the full potential of your finances with our smart tools and insights.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {featuresData.map((feature: Feature, index: number) => (
            <Card key={index} className="bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
              <CardHeader className="flex items-center space-x-4">
                {feature.icon}
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
