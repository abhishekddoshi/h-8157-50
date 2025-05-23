
import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    discount: null,
    features: [
      { name: "50 generations", included: true },
      { name: "4 generations at once", included: true },
      { name: "Link management", included: true },
      { name: "Link shortening", included: false },
      { name: "QR code generation", included: false },
      { name: "Analytics", included: false },
      { name: "Custom URL", included: false },
      { name: "Team Management", included: false },
    ],
    cta: "Get Started",
    popular: false,
    comingSoon: false,
  },
  {
    name: "Pro",
    monthlyPrice: 2,
    yearlyPrice: 20,
    discount: "20% Discount",
    features: [
      { name: "Unlimited generations", included: true },
      { name: "16 generations at once", included: true },
      { name: "Link management", included: true },
      { name: "Link shortening", included: true },
      { name: "QR code generation", included: true },
      { name: "Analytics", included: false },
      { name: "Custom URL", included: false },
      { name: "Team Management", included: false },
    ],
    cta: "Start Pro Trial",
    popular: true,
    comingSoon: false,
  },
  {
    name: "Premium",
    monthlyPrice: 5,
    yearlyPrice: 40,
    discount: "33% Discount",
    features: [
      { name: "Unlimited generations", included: true },
      { name: "16 generations at once", included: true },
      { name: "Link management", included: true },
      { name: "Link shortening", included: true },
      { name: "QR code generation", included: true },
      { name: "Analytics", included: true },
      { name: "Custom URL", included: true },
      { name: "Team Management", included: false },
    ],
    cta: "Start Premium Trial",
    popular: false,
    comingSoon: true,
  },
  {
    name: "Teams",
    monthlyPrice: null,
    yearlyPrice: null,
    discount: null,
    features: [
      { name: "Unlimited generations", included: true },
      { name: "16 generations at once", included: true },
      { name: "Link management", included: true },
      { name: "Link shortening", included: true },
      { name: "QR code generation", included: true },
      { name: "Analytics", included: true },
      { name: "Custom URL", included: true },
      { name: "Team Management", included: true },
    ],
    cta: "Custom Pricing",
    popular: false,
    comingSoon: true,
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-16 container-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your UTM Management Plan
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Start building better campaigns today. Upgrade or downgrade at any time.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-accent' : 'text-neutral-600'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-accent"
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-accent' : 'text-neutral-600'}`}>
              Annual
            </span>
            <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full ml-2">
              Save up to 33%
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl p-6 relative ${
                plan.popular ? 'ring-2 ring-accent' : ''
              } ${plan.comingSoon ? 'opacity-75' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {plan.comingSoon && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-neutral-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Coming Soon
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  {plan.name === "Teams" ? (
                    <div className="text-2xl font-bold text-neutral-900">Contact Sales</div>
                  ) : (
                    <div>
                      <span className="text-3xl font-bold text-neutral-900">
                        ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-neutral-600">
                        /{isAnnual ? "year" : "month"}
                      </span>
                    </div>
                  )}
                </div>
                {plan.discount && isAnnual && (
                  <div className="text-sm text-accent font-medium">
                    {plan.discount}
                  </div>
                )}
                {!isAnnual && plan.name !== "Teams" && plan.name !== "Free" && (
                  <div className="text-sm text-neutral-600">
                    billed monthly
                  </div>
                )}
                {isAnnual && plan.name !== "Teams" && plan.name !== "Free" && (
                  <div className="text-sm text-neutral-600">
                    billed yearly
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? 'text-neutral-900' : 'text-neutral-500'
                      }`}
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-accent hover:bg-accent/90 text-white'
                    : 'bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200'
                }`}
                variant={plan.popular ? "default" : "outline"}
                disabled={plan.comingSoon}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
