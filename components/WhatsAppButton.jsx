"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919475540692"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 h-12 w-12 rounded-full right-6 bg-green-600 hover:bg-green-700 text-white  shadow-lg transition-transform transform hover:scale-110 z-50 flex items-center justify-center"
    >
      <i className="ri-whatsapp-line text-2xl"></i>
    </a>
  );
}
