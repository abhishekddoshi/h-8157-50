import { Link, BarChart, Tags, FolderOpen, Users, Search } from "lucide-react";

const mainFeatures = [
  {
    title: "Create & Manage",
    subtitle: "All Your Links in One Place",
    description: "Effortlessly format UTM parameters—including landing page, campaign, source, medium, term, and content—by starting with a template or landing page link.",
    icon: Link,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Single-click",
    subtitle: "Links with UTM Parameters & QR Codes",
    description: "Instantly generate SVG QR codes for complete UTM-tagged destination links with a single click—ready for email, social media, web, print, and more.",
    icon: BarChart,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
];

const subFeatures = [
  {
    title: "Team Management",
    subtitle: "Stay Organized, Your Way",
    description: "Efficiently organize your links and templates by creating teams for each of your departments, clients, or campaigns. Each team has its own dedicated set of templates and links. Easily invite additional users to collaborate within each team.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    title: "Search & Filter",
    subtitle: "Find What You Need",
    description: "Instantly find any link using search for landing page URL, source, medium, and campaign.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
  },
  {
    title: "Speed & Consistency",
    subtitle: "With Link Templates",
    description: "Use the template builder to define UTM parameters for multiple frequently used channels, ensuring UTM consistency, promoting best practices, and reduce time needed to create bulk links.",
    icon: FolderOpen,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Everything You Need to Master UTM Campaign Tracking
        </h2>
        <p className="text-neutral-600 text-center mb-16 max-w-2xl mx-auto">
          Build, organize, and analyze your marketing campaigns with powerful UTM link management tools designed for modern marketers.
        </p>
        
        {/* Main Features - Two Side-by-Side Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.subtitle}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-accent uppercase tracking-wide">{feature.title}</h3>
                    <h4 className="text-2xl font-bold">{feature.subtitle}</h4>
                  </div>
                </div>
                <p className="text-neutral-600 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sub Features - Three Smaller Panels */}
        <div className="grid md:grid-cols-3 gap-8">
          {subFeatures.map((feature, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.subtitle}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-accent uppercase tracking-wide">{feature.title}</h3>
                    <h4 className="text-lg font-bold">{feature.subtitle}</h4>
                  </div>
                </div>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
