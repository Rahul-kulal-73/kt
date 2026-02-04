import Link from "next/link";
import { Check, Sparkles, Star, Shield } from "lucide-react";

const plans = {
  free: {
    name: "Heritage Starter",
    description: "Begin your family discovery",
    price: "Free",
    period: "Forever",
    features: [
      "25 family members limit",
      "Basic family profiles",
      "Cultural festival calendar",
      "Mobile access",
      "Watermarked PDF downloads"
    ],
    highlight: false,
    cta: "Start Free",
    href: "/register"
  },
  premium: {
    name: "Heritage Explorer",
    description: "For the dedicated family historian",
    price: "₹999",
    period: "/year",
    features: [
      "Unlimited family members",
      "Rich profiles with photos & stories",
      "Advanced cultural integration",
      "Premium PDF exports (No watermark)",
      "WhatsApp & social sharing",
      "Priority priority support",
      "50GB Secure photo storage"
    ],
    highlight: true,
    cta: "Start 7-Day Free Trial",
    href: "/register?plan=premium"
  },
};

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10 w-full max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[#64303A] font-semibold tracking-wider text-sm uppercase mb-2 block">Membership Plans</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Invest in Your <span className="text-[#64303A]">Family Legacy</span>
          </h2>
          <p className="text-xl text-gray-600">
            Choose a plan that fits your journey. Upgrading supports the ongoing development of cultural tools for Indian families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plans.free.name}</h3>
            <p className="text-gray-500 mb-6 min-h-[50px]">{plans.free.description}</p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold text-gray-900">{plans.free.price}</span>
              <span className="text-gray-500">{plans.free.period}</span>
            </div>

            <Link href={plans.free.href} className="flex justify-center w-full py-3.5 rounded-xl border-2 border-gray-200 text-gray-700 font-bold hover:border-[#64303A] hover:text-[#64303A] transition-all mb-8">
              {plans.free.cta}
            </Link>

            <ul className="space-y-4">
              {plans.free.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <div className="p-1 rounded-full bg-gray-100">
                    <Check className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#64303A] shadow-2xl shadow-[#64303A]/10 relative scale-100 md:scale-105 transform">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#64303A] text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
              <Sparkles className="h-4 w-4 text-amber-300" />
              Most Popular
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plans.premium.name}</h3>
            <p className="text-gray-500 mb-6 min-h-[50px]">{plans.premium.description}</p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold text-[#64303A]">{plans.premium.price}</span>
              <span className="text-gray-500">{plans.premium.period}</span>
            </div>

            <Link href={plans.premium.href} className="flex justify-center w-full py-4 rounded-xl bg-gradient-to-r from-[#64303A] to-[#8B4250] text-white font-bold shadow-lg shadow-[#64303A]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all mb-8">
              {plans.premium.cta}
            </Link>

            <ul className="space-y-4">
              {plans.premium.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="p-1 rounded-full bg-amber-100">
                    <Check className="h-4 w-4 text-[#64303A]" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          <div className="p-6">
            <div className="w-12 h-12 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4 text-amber-700">
              <Shield className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Secure & Private</h4>
            <p className="text-sm text-gray-500">Your family data is encrypted and never shared without permission.</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4 text-teal-700">
              <Star className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Money-Back Guarantee</h4>
            <p className="text-sm text-gray-500">Try Premium risk-free with our 30-day refund policy.</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 mx-auto bg-rose-100 rounded-full flex items-center justify-center mb-4 text-rose-700">
              <Sparkles className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Cultural Respect</h4>
            <p className="text-sm text-gray-500">Designed with deep understanding of Indian traditions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
