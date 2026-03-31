'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Heart, Shield, Star, Phone, MapPin } from 'lucide-react';

const slideDurationSeconds = 6;

const heroImages = [
  {
    src: '/images/hero-gate.jpg',
    alt: 'Grand wrought iron gate',
  },
  {
    src: '/images/wrought-iron-1.png',
    alt: 'Detailed wrought iron scrollwork',
  },
  {
    src: '/images/wrought-iron-2.png',
    alt: 'Curving wrought iron balusters',
  },
  {
    src: '/images/wrought-iron-3.png',
    alt: 'Handcrafted wrought iron railing',
  },
  {
    src: '/images/wrought-iron-4.png',
    alt: 'Polished wrought iron entry',
  },
  {
    src: '/images/wrought-iron-5.png',
    alt: 'Artistic wrought iron accent',
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const galleryImages = heroImages.slice(0, 4);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowWhatsApp(!entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-16 sm:py-24 relative overflow-hidden"
      >
        {/* Background slideshow */}
        <div className="absolute inset-0 hero-slideshow">
          {heroImages.map((image, index) => (
            <div
              key={image.src}
              className="hero-slide"
              style={{
                backgroundImage: `url(${image.src})`,
                animationDuration: `${heroImages.length * slideDurationSeconds}s`,
                animationDelay: `${index * slideDurationSeconds}s`,
              }}
            />
          ))}
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-2xl text-center space-y-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide text-balance">
            Smart Art Link Metals
          </h1>
          <p className="text-lg sm:text-xl text-white text-balance">
            Premium Wrought Iron Craftsmanship for Your Home
          </p>
          <a
            href="https://wa.me/2348068889460?text=Hello%20Smart%20Art%20Link%20Metals%2C%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#d4a574] hover:bg-[#c49564] text-black font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16 sm:mb-20">
            Our <span className="text-[#d4a574]">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <ServiceCard
              title="Custom Gates"
              description="Bespoke gate designs tailored to your property's unique style and security needs."
            />
            <ServiceCard
              title="Security Fences"
              description="Durable fencing solutions that combine beauty with maximum security and protection."
            />
            <ServiceCard
              title="Burglary Proof"
              description="Professional burglary proof installations designed to protect your home and valuables."
            />
            <ServiceCard
              title="Staircases"
              description="Elegant wrought iron staircases that add architectural interest and value to your space."
            />
            <ServiceCard
              title="Decorative Ironwork"
              description="Artistic metalwork pieces that enhance your home's aesthetic appeal and character."
            />
            <ServiceCard
              title="Custom Fabrication"
              description="Any custom wrought iron project - we bring your vision to life with precision and artistry."
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-[#15110d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16 sm:mb-20">
            Our <span className="text-[#d4a574]">Gallery</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {galleryImages.map((image) => (
              <GalleryImage key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16 sm:mb-20">
            Why <span className="text-[#d4a574]">Choose</span> Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            <TrustCard
              icon={<Shield size={40} className="text-[#d4a574]" />}
              title="Quality Craftsmanship"
              description="Expert metalworking with attention to every detail. We build to last for generations."
            />
            <TrustCard
              icon={<Heart size={40} className="text-[#d4a574]" />}
              title="Custom Design"
              description="Every project is uniquely designed to match your vision and complement your property."
            />
            <TrustCard
              icon={<Star size={40} className="text-[#d4a574]" />}
              title="Years of Experience"
              description="Trusted by Port Harcourt residents for premium wrought iron solutions."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-linear-to from-black to-gray-900">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <h2 className="text-3xl sm:text-5xl font-bold">
            Get in <span className="text-[#d4a574]">Touch</span>
          </h2>
          <div className="space-y-6 sm:space-y-8">
            <ContactMethod
              icon={<Phone size={28} />}
              label="Phone"
              value="+234 806 888 9460"
              href="tel:+2348068889460"
            />
            <ContactMethod
              icon={<MapPin size={28} />}
              label="Service Area"
              value="Onitsha, Anambra State, Nigeria"
              href="#"
            />
          </div>
          <div className="pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              Available for consultations and custom quotes. Contact us today to discuss your wrought iron needs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; 2026 Smart Art Link Metals. All rights reserved. | Onitsha, Nigeria</p>
        </div>
      </footer>

      {/* Sticky WhatsApp */}
      {showWhatsApp && (
        <a
          href="https://wa.me/2348068889460?text=Hello%20Smart%20Art%20Link%20Metals%2C%20I%20am%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hover:scale-105 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <Image
            src="/images/whatsapp-logo.png"
            alt=""
            width={56}
            height={56}
            className="h-14 w-14"
          />
        </a>
      )}
    </main>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
}

function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="p-6 sm:p-8 bg-gray-900 border border-gray-800 hover:border-[#d4a574] transition-colors duration-300">
      <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#d4a574]">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

interface TrustCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function TrustCard({ icon, title, description }: TrustCardProps) {
  return (
    <div className="space-y-4 text-center">
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

interface GalleryImageProps {
  src: string;
  alt: string;
}

function GalleryImage({ src, alt }: GalleryImageProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-800 bg-gray-800 group">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
      <div className="absolute left-0 bottom-0 w-full px-4 pb-4">
        <p className="text-sm font-semibold text-white drop-shadow-lg">{alt}</p>
      </div>
    </div>
  );
}

interface ContactMethodProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

function ContactMethod({ icon, label, value, href }: ContactMethodProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 sm:p-8 bg-gray-900 border border-gray-800 hover:border-[#d4a574] hover:bg-gray-800 transition-all duration-300"
    >
      <div className="text-[#d4a574]">{icon}</div>
      <div className="text-center sm:text-left">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg sm:text-xl font-semibold">{value}</p>
      </div>
    </a>
  );
}
