import Link from "next/link";
import { Globe, Mail, Phone, TreePine, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

const footerSections = {
  tools: {
    title: "Family Tools",
    links: [
      "Family Tree Builder",
      "Cultural Integration",
      "Name Search",
      "PDF Exports",
      "WhatsApp Sharing",
      "Multi-Language Support",
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", url: "#about" },
      { label: "Pricing", url: "#pricing" },
      { label: "Privacy Policy", url: "#" },
      { label: "Terms of Service", url: "#" },
      { label: "Security", url: "#" },
      { label: "Contact", url: "#" },
    ],
  },
  help: {
    title: "Support",
    links: ["Help Center", "Getting Started", "Video Tutorials", "FAQ", "Contact Us"],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a0f12] text-white/80 border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#64303A] to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-900/20">
                <TreePine className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">KutumbaTree</span>
            </div>

            <p className="text-white/60 leading-relaxed max-w-sm">
              Helping Indian families preserve their rich heritage, connect with relatives, and pass down their legacy to future generations.
            </p>

            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#64303A] hover:text-white transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#64303A] hover:text-white transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#64303A] hover:text-white transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#64303A] hover:text-white transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid md:grid-cols-3 gap-8">
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-white font-bold text-lg mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link, i) => {
                    const label = typeof link === 'string' ? link : link.label;
                    const href = typeof link === 'string' ? '#' : link.url;
                    return (
                      <li key={i}>
                        <Link href={href} className="text-white/60 hover:text-amber-400 transition-colors text-sm font-medium">
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-white/50 flex flex-col sm:flex-row items-center gap-4">
            <span>© {currentYear} KutumbaTree Inc.</span>
            <span className="hidden sm:inline">•</span>
            <span>Made with <Heart className="h-3 w-3 inline text-rose-500 mx-1" /> in India</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-white/70 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <Globe className="h-4 w-4" />
              <span>English (US)</span>
            </div>
            <div className="hidden flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span>All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
