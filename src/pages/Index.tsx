import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import SimpleCardStack from "@/components/SimpleCardStack";
import BackToTop from "@/components/BackToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FAQSection from "@/components/FAQSection";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full pt-24 md:pt-40 pb-20 min-h-screen"
        style={{
          backgroundImage: "url('/Header-background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Light Overlay for Text Readability */}
        <div 
          className="absolute inset-0 -z-10 bg-white/40"
        />
        
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
            >
              <span className="text-sm font-medium">
                <Command className="w-4 h-4 inline-block mr-2" />
                Jasa Pembuatan Website Makassar
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-normal mb-4 tracking-tight text-left">
              <span className="text-gray-600">
                <TextGenerateEffect words="Jasa Pembuatan Website" />
              </span>
              <br />
              <span className="text-gray-900 font-medium">
                <TextGenerateEffect words="Makassar Profesional dan Terpercaya" />
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl text-left"
            >
              Kami membantu bisnis di Makassar tampil profesional dengan website modern, cepat, dan SEO-friendly.{" "}
              <span className="text-gray-900">Dari konsep hingga launch, kami wujudkan visi digital Anda.</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Button 
                size="lg" 
                className="button-gradient"
                onClick={() => window.open('https://wa.me/6285242766676?text=Halo!%20Saya%20ingin%20konsultasi%20gratis%20untuk%20pembuatan%20website%20di%20Makassar.', '_blank')}
              >
                Konsultasi Gratis Sekarang
              </Button>
              
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative z-10"
          >
            <img
              src="/uploads/jasa-pembuatan-web-makassar.webp"
              alt="IDEA Digital Portfolio Showcase"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Simple Card Stack Section */}
      <SimpleCardStack />

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Features Section */}
      <div id="features" className="bg-gray-50">
        <FeaturesSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-white">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50">
        <TestimonialsSection />
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="container px-4 py-12 md:py-20 relative bg-gradient-to-br from-orange-50 to-white">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 md:p-12 text-center relative z-10 shadow-lg"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Siap Punya Website Profesional untuk Bisnismu di Makassar?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang dan dapatkan penawaran terbaik jasa pembuatan website Makassar!
          </p>
          <Button 
            size="lg" 
            className="button-gradient"
            onClick={() => window.open('https://wa.me/6285242766676?text=Halo!%20Saya%20ingin%20konsultasi%20untuk%20pembuatan%20website%20di%20Makassar.', '_blank')}
          >
            Konsultasi via WhatsApp
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-gray-900">
        <Footer />
      </div>
      
      {/* Floating Elements */}
      <BackToTop />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
