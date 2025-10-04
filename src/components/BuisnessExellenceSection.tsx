import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Users, Zap, MapPin, Shield } from "lucide-react";
import { BarPatternChart } from "@/components/ui/bar-pattern-chart";

const BusinessExcellenceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const section = document.getElementById("business-excellence");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: TrendingUp,
      title: "Instant Setup",
      description: "Get your business address activated in less than 24 hours with our streamlined onboarding process.",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Establish your presence in India's most prestigious business districts across 100+ cities.",
      bgColor: "bg-purple-50",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: Shield,
      title: "Complete Compliance",
      description: "GST ready addresses with full legal documentation and compliance support included.",
      bgColor: "bg-emerald-50",
      image: "https://plus.unsplash.com/premium_photo-1664475876634-246925214655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2lnbmF0dXJlJTVDfGVufDB8fDB8fHww"
    },
    {
      icon: Users,
      title: "98% Satisfaction",
      description: "Join thousands of happy businesses who trust FlashSpace for their virtual office needs.",
      bgColor: "bg-[#EDB003]/10",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop&auto=format"
    }
  ];

  return (
    <section id="business-excellence" className="py-20 px-4 relative overflow-hidden bg-[#ffffff]">
      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#172A3A]" style={{ fontFamily: 'instrument-serif' }}>
            Why Choose <span className="text-[#CE7A17]">FlashSpace</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            India's most trusted workspace solution with premium quality and service
          </p>
        </div>

        {/* Cards Grid - 4 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card
                key={index}
                className={`
                  group relative overflow-hidden cursor-pointer
                  ${reason.bgColor} border-0 rounded-3xl
                  transition-all duration-500
                  hover:shadow-xl hover:-translate-y-1
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
                  ${activeCard === index ? 'shadow-xl -translate-y-1' : 'shadow-md'}
                `}
                style={{
                  transitionDelay: `${index * 80}ms`
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Content */}
                <div className="flex flex-col h-full">
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden rounded-t-3xl mb-6">
                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <div className="px-8 pb-8 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#172A3A] mb-4" style={{ fontFamily: 'instrument-serif' }}>
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6 text-base">
                      {reason.description}
                    </p>

                    {/* Learn More Link */}
                    <button className="text-[#172A3A] text-left underline hover:text-[#CE7A17] transition-colors duration-300 mt-auto">
                      Learn More →
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Interactive Stats Visualization Section - Orange Theme */}
        <div className="mt-20 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Beautiful Bar Graph with Orange Theme */}
            <div className="space-y-8">
              {/* Section Title */}
              <div className="mb-10">
                <h3 className="text-4xl font-bold text-[#172A3A] mb-4" style={{ fontFamily: 'Poppins' }}>
                  Performance <span className="text-[#CE7A17]">Analytics</span>
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Data-driven insights showcasing our commitment to excellence and continuous growth across all metrics.
                </p>
              </div>

              {/* Attractive Visual Banner */}
              <div className="relative mb-8 overflow-hidden rounded-2xl shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#172A3A]/85 to-[#CE7A17]/85 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="FlashSpace Office" 
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-between px-8">
                  <div className="text-white">
                    <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Poppins' }}>10,000+</div>
                    <div className="text-sm opacity-90">Happy Clients Nationwide</div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <TrendingUp className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold text-sm">Growing Fast</span>
                  </div>
                </div>
              </div>

              {/* Professional Bar Chart replaced with BarPatternChart */}
              <BarPatternChart />
            </div>

            {/* Right: Beautiful Pie Chart & Stats */}
            <div className="space-y-8">
              {/* Pie Chart Visualization */}
              <div className="bg-gradient-to-br from-[#CE7A17]/5 via-white to-[#CE7A17]/10 p-8 rounded-3xl border-2 border-[#CE7A17]/20 shadow-lg">
                <h4 className="text-lg font-semibold text-[#172A3A] mb-6 text-center" style={{ fontFamily: 'Poppins' }}>
                  Service Distribution
                </h4>
                
                {/* Pie Chart (CSS-based) */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative w-48 h-48">
                    {/* Pie Chart Circle */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Virtual Office - 35% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#CE7A17"
                        strokeWidth="20"
                        strokeDasharray="87.96 251.2"
                        strokeDashoffset="0"
                        className="transition-all duration-500 hover:stroke-[#CE7A17]/80"
                      />
                      {/* Coworking - 30% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#CE7A17"
                        strokeWidth="20"
                        strokeDasharray="75.36 251.2"
                        strokeDashoffset="-87.96"
                        opacity="0.75"
                        className="transition-all duration-500 hover:opacity-90"
                      />
                      {/* On Demand - 25% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#CE7A17"
                        strokeWidth="20"
                        strokeDasharray="62.8 251.2"
                        strokeDashoffset="-163.32"
                        opacity="0.5"
                        className="transition-all duration-500 hover:opacity-70"
                      />
                      {/* Business Setup - 10% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#CE7A17"
                        strokeWidth="20"
                        strokeDasharray="25.12 251.2"
                        strokeDashoffset="-226.12"
                        opacity="0.25"
                        className="transition-all duration-500 hover:opacity-40"
                      />
                    </svg>
                    
                    {/* Center Label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-3xl font-bold text-[#172A3A]" style={{ fontFamily: 'Poppins' }}>100%</div>
                      <div className="text-xs text-gray-600">Coverage</div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#CE7A17]"></div>
                      <span className="text-sm font-medium text-[#172A3A]">Virtual Office</span>
                    </div>
                    <span className="text-sm font-bold text-[#CE7A17]">35%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#CE7A17] opacity-75"></div>
                      <span className="text-sm font-medium text-[#172A3A]">Coworking Space</span>
                    </div>
                    <span className="text-sm font-bold text-[#CE7A17]">30%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#CE7A17] opacity-50"></div>
                      <span className="text-sm font-medium text-[#172A3A]">On Demand</span>
                    </div>
                    <span className="text-sm font-bold text-[#CE7A17]">25%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#CE7A17] opacity-25"></div>
                      <span className="text-sm font-medium text-[#172A3A]">Business Setup</span>
                    </div>
                    <span className="text-sm font-bold text-[#CE7A17]">10%</span>
                  </div>
                </div>
              </div>

              {/* Key Stats Cards - Compact with Background Images */}
              <div className="grid grid-cols-2 gap-3">
                {/* Workspaces Card */}
                <div className="relative overflow-hidden bg-white p-4 rounded-xl border-2 border-[#CE7A17]/20 hover:border-[#CE7A17] transition-all duration-300 hover:shadow-lg group">
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <MapPin className="w-full h-full text-[#CE7A17]" />
                  </div>
                  <div className="relative z-10">
                    <MapPin className="w-7 h-7 text-[#CE7A17] mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl font-bold text-[#172A3A] mb-1" style={{ fontFamily: 'Poppins' }}>1,200+</div>
                    <div className="text-xs text-gray-600">Workspaces</div>
                  </div>
                </div>

                {/* Locations Card */}
                <div className="relative overflow-hidden bg-white p-4 rounded-xl border-2 border-[#CE7A17]/20 hover:border-[#CE7A17] transition-all duration-300 hover:shadow-lg group">
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Users className="w-full h-full text-[#CE7A17]" />
                  </div>
                  <div className="relative z-10">
                    <Users className="w-7 h-7 text-[#CE7A17] mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl font-bold text-[#172A3A] mb-1" style={{ fontFamily: 'Poppins' }}>48</div>
                    <div className="text-xs text-gray-600">Locations</div>
                  </div>
                </div>

                {/* Satisfaction Card */}
                <div className="relative overflow-hidden bg-white p-4 rounded-xl border-2 border-[#CE7A17]/20 hover:border-[#CE7A17] transition-all duration-300 hover:shadow-lg group">
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <CheckCircle className="w-full h-full text-[#CE7A17]" />
                  </div>
                  <div className="relative z-10">
                    <CheckCircle className="w-7 h-7 text-[#CE7A17] mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl font-bold text-[#172A3A] mb-1" style={{ fontFamily: 'Poppins' }}>98%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="relative overflow-hidden bg-white p-4 rounded-xl border-2 border-[#CE7A17]/20 hover:border-[#CE7A17] transition-all duration-300 hover:shadow-lg group">
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Zap className="w-full h-full text-[#CE7A17]" />
                  </div>
                  <div className="relative z-10">
                    <Zap className="w-7 h-7 text-[#CE7A17] mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl font-bold text-[#172A3A] mb-1" style={{ fontFamily: 'Poppins' }}>&lt;2min</div>
                    <div className="text-xs text-gray-600">Response</div>
                  </div>
                </div>
              </div>

              {/* Attractive Photo Section */}
              <div className="relative mt-6 overflow-hidden rounded-2xl shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#CE7A17]/90 to-[#CE7A17]/70 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Modern Workspace" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-6">
                  <Shield className="w-12 h-12 mb-3 opacity-90" />
                  <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins' }}>
                    Premium Facilities
                  </h4>
                  <p className="text-sm text-center opacity-90">
                    Experience world-class workspaces designed for success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg border-2 border-gray-200">
            <CheckCircle className="w-5 h-5 text-[#CE7A17]" />
            <span className="text-[#172A3A] font-semibold text-xl" style={{ fontFamily: 'instrument-serif' }}>
              Trusted by <span className="text-[#CE7A17]">10,000+</span> businesses across India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessExcellenceSection;