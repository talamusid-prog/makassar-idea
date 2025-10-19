import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";

const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular,
  whatsappMessage,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  whatsappMessage: string;
}) => (
  <CardSpotlight className={`h-full ${isPopular ? "border-primary ring-2 ring-primary/20 shadow-xl" : "border-gray-200 hover:border-gray-300"} border-2 hover:shadow-lg transition-all duration-300`}>
    <div className={`relative h-full p-6 flex flex-col ${isPopular ? "bg-gradient-to-br from-orange-50/50 to-white" : ""}`}>
      {isPopular && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-medium mb-2 text-gray-900">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        {price !== "Custom" && <span className="text-gray-500"></span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className="button-gradient w-full"
        onClick={() => window.open(`https://wa.me/6285242766676?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
      >
        Konsultasi Sekarang
      </Button>
    </div>
  </CardSpotlight>
);

export const PricingSection = () => {
  return (
    <section className="container px-4 py-12 md:py-24">
      <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-normal mb-6"
        >
          Paket Harga{" "}
          <span className="text-gradient font-medium">Jasa Pembuatan Website Makassar</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-600"
        >
          Pilih paket yang sesuai dengan kebutuhan bisnis Anda
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingTier
          name="Basic"
          price="Rp 1,5 Juta"
          description="Untuk UMKM lokal di Makassar"
          features={[
            "5 halaman website responsif",
            "Desain mobile-friendly",
            "Gratis domain & hosting 1 tahun",
            "Basic SEO optimization",
            "2 kali revisi desain",
            "Support 30 hari"
          ]}
          whatsappMessage="Halo! Saya tertarik dengan paket Basic (Rp 1,5 Juta) untuk UMKM di Makassar. Bisa konsultasi lebih lanjut tentang fitur-fitur yang disediakan?"
        />
        <PricingTier
          name="Professional"
          price="Rp 2,5 Juta"
          description="Untuk company profile bisnis"
          features={[
            "Website company profile lengkap",
            "Sistem manajemen konten",
            "SEO lokal untuk Google Maps",
            "Gratis domain & hosting 1 tahun",
            "Unlimited revisi desain",
            "Support 90 hari"
          ]}
          isPopular
          whatsappMessage="Halo! Saya tertarik dengan paket Professional (Rp 2,5 Juta) untuk company profile bisnis di Makassar. Bisa konsultasi lebih lanjut tentang fitur SEO lokal dan Google Maps?"
        />
        <PricingTier
          name="Premium"
          price="Rp 4 Juta"
          description="Sudah termasuk SEO lokal & Google Bisnisku"
          features={[
            "Website e-commerce lengkap",
            "Sistem pembayaran online",
            "SEO lokal & Google Bisnisku",
            "Gratis domain & hosting 1 tahun",
            "Maintenance 6 bulan",
            "Support 1 tahun"
          ]}
          whatsappMessage="Halo! Saya tertarik dengan paket Premium (Rp 4 Juta) untuk website e-commerce di Makassar. Bisa konsultasi lebih lanjut tentang sistem pembayaran online dan Google Bisnisku?"
        />
      </div>
    </section>
  );
};