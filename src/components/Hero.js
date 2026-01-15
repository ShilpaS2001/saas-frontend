export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 text-center">
      
      <h2 className="text-5xl font-bold text-gray-900 leading-tight">
        Build Your SaaS Faster
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Launch your product with a modern, scalable frontend built using Next.js and Tailwind CSS.
      </p>

      <div className="mt-10 flex justify-center gap-5">
       <button className="px-7 py-3 rounded-md bg-blue-600 text-white font-medium transition hover:bg-blue-700">
           Start Free Trial
       </button>

       <button className="px-7 py-3 rounded-md border border-gray-300 text-gray-900 hover:bg-gray-100">
           Learn More
       </button>
      </div>

    </section>
  );
}
