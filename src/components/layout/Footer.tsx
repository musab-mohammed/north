import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-northstar-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-br from-northstar-gold to-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-northstar-blue font-bold text-sm">MN</span>
              </div>
              <span className="text-xl font-bold">MentorLink Nexus</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              منصة رائدة لربط المرشدين المتخصصين بالمتعلمين الطموحين، نساعدك في تحقيق أهدافك المهنية والشخصية من خلال التوجيه المتخصص.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-300 hover:text-northstar-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-northstar-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-northstar-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-northstar-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-northstar-gold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/mentors" className="text-gray-300 hover:text-white transition-colors text-sm">
                  المرشدين
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-northstar-gold">خدماتنا</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">التوجيه المهني</li>
              <li className="text-gray-300 text-sm">التطوير الشخصي</li>
              <li className="text-gray-300 text-sm">استشارات الأعمال</li>
              <li className="text-gray-300 text-sm">التدريب التقني</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-northstar-gold">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-4 h-4 text-northstar-gold" />
                <span className="text-gray-300 text-sm">info@mentorlinknexus.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-4 h-4 text-northstar-gold" />
                <span className="text-gray-300 text-sm">+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="w-4 h-4 text-northstar-gold" />
                <span className="text-gray-300 text-sm">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 MentorLink Nexus. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;