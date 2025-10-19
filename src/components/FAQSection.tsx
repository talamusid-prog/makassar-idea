import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Berapa lama pembuatan website di Makassar?",
    answer: "Waktu pengerjaan website bervariasi tergantung kompleksitas. Website company profile biasanya 3-5 hari, sedangkan e-commerce membutuhkan 4-6 minggu. Kami selalu memberikan timeline yang jelas sejak awal."
  },
  {
    id: 2,
    question: "Apakah harga sudah termasuk domain dan hosting?",
    answer: "Ya, semua paket kami sudah termasuk domain dan hosting gratis untuk tahun pertama. Setelah itu, Anda bisa memperpanjang sendiri atau menggunakan layanan hosting kami."
  },
  {
    id: 3,
    question: "Apakah website bisa muncul di Google Maps?",
    answer: "Tentu! Kami melakukan optimasi SEO lokal khusus untuk Google Maps Makassar. Website Anda akan mudah ditemukan ketika orang mencari layanan di area Makassar."
  },
  {
    id: 4,
    question: "Bagaimana cara optimasi SEO lokal untuk bisnis saya?",
    answer: "Kami melakukan optimasi lengkap termasuk Google My Business, keyword lokal Makassar, dan struktur website yang SEO-friendly. Hasilnya bisnis Anda akan muncul di halaman pertama Google."
  },
  {
    id: 5,
    question: "Apakah ada garansi untuk website yang dibuat?",
    answer: "Ya, kami memberikan garansi 1 tahun untuk maintenance dan update website. Jika ada bug atau masalah teknis, kami akan memperbaikinya tanpa biaya tambahan."
  },
  {
    id: 6,
    question: "Bisakah website diubah setelah selesai dibuat?",
    answer: "Tentu! Kami memberikan 3 kali revisi gratis untuk setiap proyek. Setelah itu, perubahan tambahan akan dikenakan biaya sesuai kompleksitas yang diminta."
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="container px-4 py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Pertanyaan yang <span className="text-gradient">Sering Diajukan</span>
        </h2>
        
        <div className="space-y-4">
          {faqData.map((item) => (
            <motion.div
              key={item.id}
              className="glass glass-hover rounded-xl overflow-hidden border border-gray-200 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: item.id * 0.1 }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
