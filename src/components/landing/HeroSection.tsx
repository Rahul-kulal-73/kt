import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Shield, Users, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#8B4250] via-[#753640] to-[#50222C] text-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/kutumba-tree-logo.jpg"
          alt="Pattern"
          fill
          className="object-cover mix-blend-overlay opacity-30 blur-3xl scale-150"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#50222C]/30 to-[#50222C]" />

        {/* Decorative Circles */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-amber-100 text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Shield className="h-4 w-4" />
              <span>Trusted by 50,000+ Families</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Discover Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">Ancestral Story</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Preserve your family heritage, connect with relatives, and build a lasting legacy for future generations. The #1 family tree platform for Indian families.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm shadow-sm transition-transform hover:scale-105">
                <Users className="h-5 w-5 text-amber-200" />
                <span className="font-medium">Unlimited Members</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm shadow-sm transition-transform hover:scale-105">
                <Globe className="h-5 w-5 text-teal-200" />
                <span className="font-medium">10+ Languages</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-400">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#6F333E] bg-white rounded-xl shadow-xl shadow-[#50222C]/20 hover:bg-amber-50 hover:scale-105 transition-all duration-300"
              >
                Start Your Tree, It's Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>

            <p className="text-sm text-white/60 animate-in fade-in duration-1000 delay-700">
              No credit card required · Free 25 member limit · Secure data
            </p>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Create Your Account</h3>
                <p className="text-white/80 text-sm">Join thousands of families preserving their history.</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/90 ml-1">First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/90 ml-1">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-white/90 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  />
                </div>

                <Link href="/register" className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold rounded-xl shadow-lg shadow-amber-900/20 transform transition-all duration-200 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2">
                  Get Started Now
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <div className="pt-2 text-center text-xs text-white/70">
                  By signing up, you agree to our Terms & Conditions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
