import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl skew-y-1 transform transition-all hover:skew-y-0 duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-[#64303A]/80 to-transparent z-10" />
              <Image
                src="/kutumba-tree-logo.jpg"
                alt="Community"
                width={600}
                height={600}
                className="w-full h-[500px] object-cover bg-gray-100"
              />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <p className="text-sm font-medium uppercase tracking-wider mb-1">Our Mission</p>
                <p className="text-2xl font-bold">Connecting Generations</p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-10 -right-10 hidden lg:block bg-white p-6 rounded-2xl shadow-xl animate-bounce duration-3000">
              <p className="text-4xl font-bold text-[#64303A]">50k+</p>
              <p className="text-sm text-gray-500 font-medium">Families Connected</p>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-[#64303A] font-semibold tracking-wider text-sm uppercase mb-2 block">About Us</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Preserving Indian Heritage in the Digital Age
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                KutumbaTree helps Indian families preserve their heritage by organizing family connections,
                cultural traditions, and memories in one place. We bridge the gap between ancient lineage and modern technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Build your tree, share it with loved ones, and keep your story alive for future generations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h4 className="text-3xl font-bold text-[#64303A] mb-1">200+</h4>
                <p className="text-gray-600 font-medium">Cultural Traditions</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h4 className="text-3xl font-bold text-teal-600 mb-1">12</h4>
                <p className="text-gray-600 font-medium">Indian Languages</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-amber-50 text-amber-800 text-sm font-semibold">Privacy First</span>
              <span className="px-4 py-2 rounded-full bg-rose-50 text-rose-800 text-sm font-semibold">Secure Sharing</span>
              <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-800 text-sm font-semibold">Daily Backups</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
