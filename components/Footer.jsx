"use client";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark_red text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-on-scroll fade-in-up delay-100">
            <Image src="/images/white-logo.png" alt="Logo" width={80} height={80} className="pb-2" />
            <p className="text-white mb-4">
             Shree Shyam Concreto – Authorized Godrej Dealer for lockers, cash safes, strong room doors, and advanced security solutions
            </p>
            {/* <div className="flex space-x-4">
              {[
                { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>, href: '#' },
                { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919 .058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.849 -.149 3.225-1.664 4.771-4.919 4.919 -1.266.058-1.645.07-4.849.07 -3.204 0-3.584-.012-4.849-.07 -3.26-.149-4.771-1.699-4.919-4.92 -.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.584.07-4.849 .149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0 C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052 .014 8.333 0 8.741 0 12s.014 3.667.072 4.947 c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072 c4.354-.2 6.782-2.618 6.979-6.98 .059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947 c-.196-4.354-2.617-6.78-6.979-6.98 C15.667.014 15.259 0 12 0zm0 5.838 A6.162 6.162 0 1012 18.162 6.162 6.162 0 0012 5.838zm0 10.162 A4 4 0 1112 8a4 4 0 010 8zm6.406-11.845 a1.44 1.44 0 11-2.879 0 1.44 1.44 0 012.879 0z" /></svg>, href: '#' },
                { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zm-1.5-12.268 c-.966 0-1.75-.79-1.75-1.764S5.534 3.204 6.5 3.204s1.75.79 1.75 1.764S7.466 6.732 6.5 6.732zM20 19h-3v-5.604 c0-3.368-4-3.113-4 0V19h-3V8h3v1.765 c1.396-2.586 7-2.777 7 2.476V19z" /></svg>, href: '#' },
              ].map((social, index) => (
                <a key={index} href={social.href} className="text-white hover:text-white transition">
                  {social.icon}
                </a>
              ))}
            </div> */}
          </div>
          <div className="animate-on-scroll fade-in-up delay-200">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              {[
                { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243 a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, text: 'Keranichotti near Agarwal Marble, Abash, Barua, West Bengal 721102' },
                { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493 a1 1 0 01-.502 1.21l-2.257 1.13 a11.042 11.042 0 005.516 5.516l1.13-2.257 a1 1 0 011.21-.502l4.493 1.498 a1 1 0 01.684.949V19a2 2 0 01-2 2h-1 C9.716 21 3 14.284 3 6V5z" /></svg>, text: 'Ph- 9475540692' },
                { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8 M5 19h14a2 2 0 002-2V7 a2 2 0 00-2-2H5a2 2 0 00-2 2v10 a2 2 0 002 2z" /></svg>, text: 'Email:-shyamconcreto@gmail.com' },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                 <div>{item.icon}</div> 
                  <span className="text-white">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-on-scroll fade-in-up delay-300">
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Our Services', 'Our Products', 'Contact Us', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white hover:text-white transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-on-scroll fade-in-up delay-400">
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <div className="space-y-4">
              {['Privacy Policy', 'Terms'].map((link) => (
                <div key={link}>
                  <h4 className="font-semibold">{link}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white mt-8 pt-8 text-center text-white animate-on-scroll fade-in-up delay-500">
          <p>&copy;2025 Shree Shyam - All Rights Reserved.</p>
          <a href="#" className="text-center text-white">Powered by BlueHorse</a>
        </div>
      </div>
    </footer>
  );
}