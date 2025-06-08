import React from 'react';
import { Users, Target, Award, Heart, Lightbulb, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'الشغف',
      description: 'نؤمن بقوة الشغف في تحقيق النجاح والتميز في كل ما نقوم به'
    },
    {
      icon: Target,
      title: 'التركيز على الهدف',
      description: 'نساعد كل متعلم في تحديد أهدافه بوضوح ووضع خطة عملية لتحقيقها'
    },
    {
      icon: Award,
      title: 'التميز',
      description: 'نسعى دائماً لتقديم أعلى مستوى من الجودة في خدمات التوجيه والإرشاد'
    },
    {
      icon: Lightbulb,
      title: 'الابتكار',
      description: 'نستخدم أحدث الطرق والتقنيات لتطوير تجربة التعلم والتوجيه'
    },
    {
      icon: Users,
      title: 'المجتمع',
      description: 'نبني مجتمعاً قوياً من المتعلمين والمرشدين يدعم بعضهم البعض'
    },
    {
      icon: Globe,
      title: 'الشمولية',
      description: 'نرحب بالجميع ونقدم فرصاً متساوية للتعلم والنمو المهني'
    }
  ];

  const team = [
    {
      name: 'د. عبدالرحمن الأحمد',
      role: 'المؤسس والرئيس التنفيذي',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'خبير في التطوير المهني مع أكثر من 20 عاماً من الخبرة في مجال التعليم والتدريب'
    },
    {
      name: 'أ. مريم الخالد',
      role: 'مديرة العمليات',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'متخصصة في إدارة المنصات التعليمية مع خلفية قوية في تطوير الأعمال'
    },
    {
      name: 'م. سعد المطيري',
      role: 'مدير التقنية',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'مطور برمجيات متخصص في بناء منصات تعليمية متطورة وسهلة الاستخدام'
    }
  ];

  const stats = [
    { number: '500+', label: 'مرشد متخصص' },
    { number: '2000+', label: 'متعلم نشط' },
    { number: '50+', label: 'مجال تخصص' },
    { number: '95%', label: 'معدل الرضا' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-northstar-blue to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              من نحن
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              نحن منصة رائدة في مجال التوجيه المهني، نربط بين المتعلمين الطموحين والمرشدين المتخصصين 
              لبناء مستقبل مهني ناجح ومزدهر
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-northstar-blue">
                رسالتنا
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                نسعى إلى تمكين الأفراد من تحقيق إمكاناتهم الكاملة من خلال توفير منصة متطورة تربط 
                بين المتعلمين والمرشدين المتخصصين. نؤمن بأن كل شخص يستحق الحصول على التوجيه المناسب 
                لتحقيق أهدافه المهنية والشخصية.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                من خلال تقنياتنا المتقدمة وشبكتنا الواسعة من الخبراء، نقدم تجربة تعلم شخصية ومؤثرة 
                تساعد في بناء جيل من القادة والمبدعين في مختلف المجالات.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="فريق العمل" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-northstar-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-northstar-blue">
              قيمنا الأساسية
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              القيم التي توجه عملنا وتشكل هويتنا كمنصة رائدة في التوجيه المهني
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-northstar-blue to-northstar-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-northstar-blue">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-northstar-blue to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              إنجازاتنا بالأرقام
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              نفخر بما حققناه من نجاحات وما قدمناه لمجتمعنا من خدمات متميزة
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-northstar-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-northstar-blue">
              فريق القيادة
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              تعرف على الفريق الذي يقود رؤيتنا ويعمل على تحقيق أهدافنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-northstar-blue">{member.name}</CardTitle>
                  <CardDescription className="text-northstar-gold font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-northstar-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-northstar-blue">
              رؤيتنا للمستقبل
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              نتطلع إلى أن نكون المنصة الأولى عالمياً في مجال التوجيه المهني، حيث نساهم في بناء 
              جيل من القادة والمبدعين الذين يشكلون مستقبل أفضل للجميع. نسعى لتوسيع نطاق خدماتنا 
              لتشمل المزيد من المجالات والتخصصات، مع الحفاظ على أعلى معايير الجودة والتميز.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;