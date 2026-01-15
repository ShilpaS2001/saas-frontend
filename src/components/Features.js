const features = [
  {
    title: "Fast Development",
    description:
      "Build and ship your SaaS product faster with a modern and scalable frontend stack.",
    icon: "⚡",
  },
  {
    title: "Secure by Design",
    description:
      "Best practices and clean architecture to keep your application secure and reliable.",
    icon: "🔒",
  },
  {
    title: "Easy Integration",
    description:
      "Seamlessly integrate APIs and third-party services with minimal effort.",
    icon: "🔗",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900">
            Everything you need to launch
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you build, launch, and scale your SaaS product.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-200 hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h4>
              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
