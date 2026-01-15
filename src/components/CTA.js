export default function CTA() {
  return (
    <section className="bg-blue-600 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white">
          Ready to build your SaaS product?
        </h3>

        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Start building today with a modern frontend stack designed for speed and scalability.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-8 py-3 rounded-md bg-white text-blue-600 font-medium hover:bg-gray-100">
            Get Started
          </button>

          <button className="px-8 py-3 rounded-md border border-white text-white hover:bg-blue-700">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
