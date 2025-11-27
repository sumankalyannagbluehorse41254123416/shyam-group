"use client";
export default function Newsletter() {
  return (
    <section className="md:py-16 py-8 bg-white">
      <div className="container mx-auto px-4 text-center ">
        <p className="text-xl md:text-3xl font-bold md:mb-4">Subscribe Our Newsletter</p>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Get the latest updates on new products and upcoming sales</p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-l-full sm:rounded-r-none rounded-r-full mb-2 sm:mb-0 flex-grow text-gray-900 focus:outline-none border"
          />
          <button className="bg-dark_red text-white px-6 py-3 rounded-r-full sm:rounded-l-none rounded-l-full font-semibold transition cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}