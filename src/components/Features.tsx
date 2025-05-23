
import { Link, BarChart, Tags, FolderOpen } from "lucide-react";

const features = [
  {
    title: "Smart Link Builder",
    description: "Generate clean, trackable UTM links with our intuitive builder and campaign presets.",
    icon: Link,
  },
  {
    title: "Campaign Organization",
    description: "Organize your campaigns with folders, tags, and custom naming conventions.",
    icon: FolderOpen,
  },
  {
    title: "Performance Analytics",
    description: "Track click-through rates, conversions, and campaign performance in real-time.",
    icon: BarChart,
  },
  {
    title: "Bulk Management",
    description: "Create, edit, and manage hundreds of campaign links with bulk operations.",
    icon: Tags,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Everything You Need to Master UTM Campaign Tracking
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Build, organize, and analyze your marketing campaigns with powerful UTM link management tools designed for modern marketers.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
              </div>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
