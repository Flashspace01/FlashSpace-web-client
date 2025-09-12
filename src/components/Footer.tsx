import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Building,
  FileText,
  Mail,
  MapPin,
  Users,
  Briefcase,
  Phone,
  Clock,
  Shield,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Send
} from "lucide-react";
import { useScrollAnimation, getAnimationClasses } from "@/hooks/use-scroll-animation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isVisible = useScrollAnimation('footer');

  const services = [
    { name: "Virtual Office Solutions", icon: <Building className="w-4 h-4" /> },
    { name: "Business Registration", icon: <FileText className="w-4 h-4" /> },
    { name: "Mail Management", icon: <Mail className="w-4 h-4" /> },
    { name: "Meeting Rooms", icon: <Users className="w-4 h-4" /> },
    { name: "Coworking Spaces", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Professional Address", icon: <MapPin className="w-4 h-4" /> },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
    { name: "Career Opportunities", href: "#careers" },
    { name: "Partner With Us", href: "#partners" },
    { name: "Success Stories", href: "#testimonials" },
  ];

  const support = [
    { name: "Help Center", href: "#help", icon: <Users className="w-4 h-4" /> },
    { name: "Contact Support", href: "#contact", icon: <Phone className="w-4 h-4" /> },
    { name: "Documentation", href: "#docs", icon: <FileText className="w-4 h-4" /> },
    { name: "Privacy Policy", href: "#privacy", icon: <Shield className="w-4 h-4" /> },
    { name: "Terms of Service", href: "#terms", icon: <FileText className="w-4 h-4" /> },
    { name: "24/7 Support", href: "#support", icon: <Clock className="w-4 h-4" /> },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
    { name: "YouTube", icon: <Youtube className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer id="footer" className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className={`space-y-6 ${getAnimationClasses(isVisible, 'slideUp', 0)}`}>
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/6295cecd-7c61-4f7d-b1eb-3062cb798cce.png" 
                alt="FlashSpace Logo"
                className="h-10 w-auto"
              />
            </div>
            
            <p className="text-gray-600 leading-relaxed font-content text-sm">
              Empowering businesses across India with premium virtual office solutions, 
              professional services, and growth-focused support to accelerate success.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="text-blue-600">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 font-header">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-50 border-gray-200 focus:border-blue-500 flex-1 text-sm"
                />
                <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* VirtuHub Services */}
          <div className={getAnimationClasses(isVisible, 'slideUp', 100)}>
            <h3 className="text-lg font-bold text-blue-600 mb-6 font-header">
              VirtuHub Services
            </h3>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 font-header">Connect</h4>
            <p className="text-xs text-yellow-600 mb-3 font-content">Powered by FlashSpace</p>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm font-content"
                  >
                    <span className="text-blue-500">
                      {service.icon}
                    </span>
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className={getAnimationClasses(isVisible, 'slideUp', 200)}>
            <h3 className="text-lg font-bold text-blue-600 mb-6 font-header">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm font-content"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div className={getAnimationClasses(isVisible, 'slideUp', 300)}>
            <h3 className="text-lg font-bold text-blue-600 mb-6 font-header">
              Support & Legal
            </h3>
            <ul className="space-y-3 mb-6">
              {support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm font-content"
                  >
                    <span className="text-blue-500">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className={`py-6 border-t border-gray-200 ${getAnimationClasses(isVisible, 'fadeIn', 400)}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-600 text-sm font-content">
                © {currentYear} VirtuHub Connect. All rights reserved. 
                <span className="text-blue-600 font-medium"> Powered by FlashSpace Technology.</span>
              </p>
            </div>

            {/* Security Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>SSL Secured</span>
              </div>
              <div className="text-xs">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                  ISO 27001 Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;