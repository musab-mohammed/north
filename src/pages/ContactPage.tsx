import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: 'info@mentorlinknexus.com',
      description: 'راسلنا في أي وقت وسنرد عليك خلال 24 ساعة'
    },
    {
      icon: Phone,
      title: 'الهاتف',
      details: '+966 50 123 4567',
      description: 'متاحون للمكالمات من الأحد إلى الخميس'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: 'الرياض، المملكة العربية السعودية',
      description: 'مكتبنا الرئيسي في قلب العاصمة'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: '9:00 ص - 6:00 م',
      description: 'من الأحد إلى الخميس'
    }
  ];

  const faqs = [
    {
      question: 'كيف يمكنني العثور على المرشد المناسب؟',
      answer: 'يمكنك استخدام نظام البحث المتقدم لدينا للعثور على المرشدين حسب المجال والخبرة والتقييمات.'
    },
    {
      question: 'ما هي تكلفة جلسات التوجيه؟',
      answer: 'تختلف التكلفة حسب خبرة المرشد وتخصصه، وتتراوح عادة بين 150-500 ريال للساعة الواحدة.'
    },
    {
      question: 'هل يمكنني إلغاء أو إعادة جدولة الجلسة؟',
      answer: 'نعم، يمكنك إلغاء أو إعادة جدولة الجلسة قبل 24 ساعة على الأقل من موعدها المحدد.'
    },
    {
      question: 'كيف يمكنني أن أصبح مرشداً في المنصة؟',
      answer: 'يمكنك التقديم من خلال صفحة "انضم كمرشد" وسيتم مراجعة طلبك من قبل فريقنا المختص.'
    }
  ];

  return (
    <div className="min-h-screen bg-northstar-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-northstar-blue to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              تواصل معنا
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              نحن هنا لمساعدتك! تواصل معنا لأي استفسار أو اقتراح، وسنكون سعداء للرد عليك
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-northstar-blue mb-4">
                أرسل لنا رسالة
              </h2>
              <p className="text-gray-600">
                املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم الكامل *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="أدخل بريدك الإلكتروني"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      الموضوع *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="موضوع الرسالة"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      الرسالة *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-northstar-gold hover:bg-northstar-gold/90 text-northstar-blue font-semibold"
                  >
                    <Send className="w-4 h-4 ml-2" />
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-northstar-blue mb-4">
                معلومات التواصل
              </h2>
              <p className="text-gray-600">
                يمكنك التواصل معنا من خلال الطرق التالية
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-gradient-to-br from-northstar-blue to-northstar-gold rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-northstar-blue">{info.title}</CardTitle>
                        <CardDescription className="text-northstar-gold font-medium">
                          {info.details}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-northstar-blue mb-6">
                الأسئلة الشائعة
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-northstar-blue">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;