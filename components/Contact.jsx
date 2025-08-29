
"use client";
export default function Contact() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 animate-on-scroll zoom-in">
        <div className="md:mb-12 mb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to discuss a project? Reach out to us and our team will get back to you as soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 animate-on-scroll fade-in-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h3>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 md:mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300" placeholder="Your first name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-300" placeholder="Your last name" />
                </div>
              </div>
              <div className="mb-4 md:mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300" placeholder="you@example.com" />
              </div>
              {/* <div className="mb-4 md:mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300" placeholder="What is this regarding?" />
              </div> */}
              <div className="mb-4 md:mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300" placeholder="Type your message here..."></textarea>
              </div>
              <button className="w-full bg-dark_red text-white py-3 px-6 rounded-lg transition duration-300 font-medium">Send Message</button>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-on-scroll fade-in-up delay-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-dark_red h-12 w-12 flex justify-center items-center rounded-full mr-4">
                    <i className="ri-map-pin-2-fill text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Address</h4>
                    <p className="text-gray-600">Keranichotti near Agarwal Marble, Abash, Barua, West Bengal 721102</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-dark_red h-12 w-12 flex justify-center items-center rounded-full mr-4">
                    <i className="ri-phone-fill text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 9475540692</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-dark_red h-12 w-12 flex justify-center items-center rounded-full mr-4">
                    <i className="ri-mail-fill text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">shyamconcreto@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 animate-on-scroll fade-in-up delay-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Find Us</h3>
              <div className="bg-gray-200 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26700.71687266707!2d87.3136128!3d22.42313185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1755764072107!5m2!1sen!2sin"
                  width="100%"
                  height="250px"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}