"use client";

const features = [
  {
    title: "Fast Development",
    description:
      "Build and ship your SaaS product faster with a modern and scalable frontend stack.",
    icon: "⚡",
    color: "bg-yellow-100 dark:bg-yellow-900/30",
  },
  {
    title: "Secure by Design",
    description:
      "Best practices and clean architecture to keep your application secure and reliable.",
    icon: "🔒",
    color: "bg-green-100 dark:bg-green-900/30",
  },
  {
    title: "Easy Integration",
    description:
      "Seamlessly integrate APIs and third-party services with minimal effort.",
    icon: "🔗",
    color: "bg-blue-100 dark:bg-blue-900/30",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white dark:bg-gray-950 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Everything you need to launch
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Powerful features designed to help you build, launch, and scale your SaaS product with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 flex items-center justify-center text-3xl rounded-xl mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h4>
              
              <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}