import { Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20 bg-white">
      <div className="container px-4">
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">IDEA Digital Creative</h3>
              <p className="text-sm text-muted-foreground">
                Jasa Pembuatan Website Makassar Profesional dan Terpercaya
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>JL. Batua Raya Komp rayhan Town House Makassar </p>
                <p>WA: 0852-4276-6676</p>
                <p>Email: info@ideadigital.id</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Layanan</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Website Company Profile
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Website E-Commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Website Sekolah
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    SEO Lokal Makassar
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Tentang Kami</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Portofolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Testimoni
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Kontak</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://wa.me/6285242766676" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/6285242766676?text=Halo!%20Saya%20ingin%20konsultasi%20gratis%20untuk%20pembuatan%20website%20di%20Makassar." target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Konsultasi Gratis
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} IDEA Digital Creative. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;