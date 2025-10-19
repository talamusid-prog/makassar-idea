"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Andi Rahman",
    role: "Pemilik Coffee Shop Makassar",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "Kami sangat puas! Website cepat dan tampil profesional. Pelanggan makin mudah menemukan kami di Google. Leads meningkat 3x lipat dalam 1 bulan."
  },
  {
    name: "Sari Dewi",
    role: "Owner, Toko Fashion Makassar",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "Website e-commerce yang dibuat sangat user-friendly. Penjualan online kami naik drastis setelah website live. Tim sangat responsif dan profesional."
  },
  {
    name: "Budi Santoso",
    role: "Direktur, CV Makassar Printing",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "Website company profile yang dibuat sangat memuaskan. Desain modern dan SEO-friendly. Klien baru mudah menemukan layanan kami di Google."
  },
  {
    name: "Dr. Maya Sari",
    role: "Kepala Sekolah, SDN Makassar",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "Website sekolah yang dibuat sangat informatif dan mudah diakses. Orang tua murid bisa dengan mudah melihat informasi sekolah dan prestasi siswa."
  },
  {
    name: "Rizki Pratama",
    role: "Manager, Restoran Makassar",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "Website restoran dengan sistem reservasi online sangat membantu. Pelanggan bisa pesan meja dan lihat menu dengan mudah. Order online meningkat 200%."
  },
  {
    name: "Lisa Wijaya",
    role: "Owner, Salon Kecantikan Makassar",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "Website salon yang dibuat sangat elegan dan mencerminkan brand kami. Booking online sangat memudahkan pelanggan. Highly recommended!"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-20 overflow-hidden bg-gray-50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-4">Dipercaya Klien Lokal Makassar</h2>
          <p className="text-muted-foreground text-lg">
            Bergabung dengan ratusan bisnis di Makassar yang mempercayai layanan kami
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[320px] md:w-[400px] shrink-0 bg-white/80 backdrop-blur-xl border-gray-200 hover:border-gray-300 transition-all duration-300 p-6 md:p-8 shadow-lg">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <Avatar className="h-10 w-10 md:h-12 md:w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[320px] md:w-[400px] shrink-0 bg-white/80 backdrop-blur-xl border-gray-200 hover:border-gray-300 transition-all duration-300 p-6 md:p-8 shadow-lg">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <Avatar className="h-10 w-10 md:h-12 md:w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;