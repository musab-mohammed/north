import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HomePage = () => {
  const features = [
    {
      icon: Users,
      title: 'مرشدين متخصصين',
      description: 'فريق من المرشدين ذوي الخبرة في مختلف المجالات المهنية والتقنية'
    },
    {
      icon: Target,
      title: 'أهداف واضحة',
      description: 'نساعدك في تحديد وتحقيق أهدافك المهنية والشخصية بطريقة منهجية'
    },
    {
      icon: Award,
      title: 'نتائج مضمونة',
      description: 'برامج توجيه مثبتة الفعالية مع متابعة مستمرة لضمان تحقيق النتائج'
    }
  ];

  const testimonials = [
    {
      name: 'أحمد محمد',
      role: 'مطور برمجيات',
      content: 'ساعدني المرشد في تطوير مهاراتي التقنية والحصول على وظيفة أحلامي في شركة تقنية رائدة.',
      rating: 5
    },
    {
      name: 'فاطمة العلي',
      role: 'رائدة أعمال',
      content: 'التوجيه الذي حصلت عليه كان مفتاح نجاح مشروعي التجاري. أنصح الجميع بهذه المنصة.',
      rating: 5
    },
    {
      name: 'خالد السعد',
      role: 'مدير مشاريع',
      content: 'منصة رائعة ومرشدين محترفين. تطورت مهاراتي القيادية بشكل ملحوظ.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-northstar-blue via-blue-900 to-northstar-blue overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                ابدأ رحلتك نحو
                <span className="block text-northstar-gold">النجاح المهني</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                انضم إلى آلاف المتعلمين الذين حققوا أهدافهم المهنية من خلال التوجيه المتخصص من خبراء في مختلف المجالات
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/mentors">
                <Button size="lg" className="bg-northstar-gold hover:bg-northstar-gold/90 text-northstar-blue font-semibold px-8 py-3 text-lg">
                  ابحث عن مرشد
                  <ArrowRight className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-northstar-blue px-8 py-3 text-lg">
                  انضم كمرشد
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-northstar-gold">500+</div>
                <div className="text-gray-200">مرشد متخصص</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-northstar-gold">2000+</div>
                <div className="text-gray-200">متعلم نشط</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-northstar-gold">95%</div>
                <div className="text-gray-200">معدل الرضا</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-northstar-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-northstar-blue">
              لماذا تختار MentorLink Nexus؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم لك أفضل تجربة توجيه مهني من خلال منصة متطورة ومرشدين متخصصين
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-northstar-blue to-northstar-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-northstar-blue">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-northstar-blue">
              ماذا يقول عملاؤنا؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              اكتشف كيف غيرت منصتنا حياة المتعلمين المهنية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 rtl:space-x-reverse mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-northstar-gold text-northstar-gold" />
                    ))}
                  </div>
                  <CardTitle className="text-lg text-northstar-blue">{testimonial.name}</CardTitle>
                  <CardDescription className="text-northstar-gold font-medium">
                    {testimonial.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-northstar-blue to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              هل أنت مستعد لبدء رحلتك؟
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              انضم إلى مجتمعنا اليوم واحصل على التوجيه الذي تحتاجه لتحقيق أهدافك المهنية
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-northstar-gold hover:bg-northstar-gold/90 text-northstar-blue font-semibold px-8 py-3 text-lg">
                ابدأ الآن مجاناً
                <ChevronRight className="w-5 h-5 mr-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;