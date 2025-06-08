import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const MentorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'جميع المجالات' },
    { id: 'tech', name: 'التقنية' },
    { id: 'business', name: 'الأعمال' },
    { id: 'design', name: 'التصميم' },
    { id: 'marketing', name: 'التسويق' },
    { id: 'finance', name: 'المالية' }
  ];

  const mentors = [
    {
      id: 1,
      name: 'د. أحمد الخالدي',
      title: 'خبير تطوير البرمجيات',
      category: 'tech',
      rating: 4.9,
      reviews: 127,
      experience: '15+ سنة',
      location: 'الرياض',
      price: '200 ريال/ساعة',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      description: 'مطور برمجيات متخصص في تطوير تطبيقات الويب والهاتف المحمول مع خبرة واسعة في الشركات التقنية الكبرى.',
      students: 89
    },
    {
      id: 2,
      name: 'سارة المنصوري',
      title: 'استشارية أعمال',
      category: 'business',
      rating: 4.8,
      reviews: 94,
      experience: '12+ سنة',
      location: 'جدة',
      price: '300 ريال/ساعة',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['إدارة المشاريع', 'التخطيط الاستراتيجي', 'ريادة الأعمال'],
      description: 'خبيرة في إدارة الأعمال والاستشارات الإدارية مع سجل حافل في مساعدة الشركات على النمو والتطور.',
      students: 156
    },
    {
      id: 3,
      name: 'محمد العتيبي',
      title: 'مصمم UX/UI',
      category: 'design',
      rating: 4.7,
      reviews: 73,
      experience: '8+ سنوات',
      location: 'الدمام',
      price: '180 ريال/ساعة',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Figma', 'Adobe XD', 'تجربة المستخدم', 'التصميم التفاعلي'],
      description: 'مصمم متخصص في تجربة المستخدم وواجهات التطبيقات مع خبرة في تصميم منتجات رقمية ناجحة.',
      students: 67
    },
    {
      id: 4,
      name: 'فاطمة الزهراني',
      title: 'خبيرة تسويق رقمي',
      category: 'marketing',
      rating: 4.9,
      reviews: 112,
      experience: '10+ سنوات',
      location: 'الرياض',
      price: '250 ريال/ساعة',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['SEO', 'إعلانات جوجل', 'وسائل التواصل', 'تحليل البيانات'],
      description: 'متخصصة في التسويق الرقمي مع خبرة واسعة في إدارة حملات إعلانية ناجحة لشركات مختلفة.',
      students: 203
    },
    {
      id: 5,
      name: 'عبدالله الحربي',
      title: 'مستشار مالي',
      category: 'finance',
      rating: 4.8,
      reviews: 86,
      experience: '14+ سنة',
      location: 'جدة',
      price: '350 ريال/ساعة',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['التخطيط المالي', 'الاستثمار', 'إدارة المخاطر', 'التحليل المالي'],
      description: 'خبير في الاستشارات المالية والاستثمار مع خبرة في البنوك وشركات الاستثمار الكبرى.',
      students: 124
    },
    {
      id: 6,
      name: 'نورا القحطاني',
      title: 'مطورة تطبيقات الهاتف',
      category: 'tech',
      rating: 4.7,
      reviews: 91,
      experience: '9+ سنوات',
      location: 'الخبر',
      price: '220 ريال/ساعة',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Flutter', 'React Native', 'iOS', 'Android'],
      description: 'مطورة متخصصة في تطبيقات الهاتف المحمول مع خبرة في تطوير تطبيقات ناجحة لشركات مختلفة.',
      students: 78
    }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || mentor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-northstar-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-northstar-blue">
            اكتشف مرشدك المثالي
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            تصفح مجموعة واسعة من المرشدين المتخصصين في مختلف المجالات واختر من يناسب احتياجاتك
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="ابحث عن مرشد أو مهارة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-northstar-blue" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            تم العثور على {filteredMentors.length} مرشد
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <Card key={mentor.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={mentor.image} alt={mentor.name} />
                    <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg text-northstar-blue truncate">
                      {mentor.name}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-northstar-gold">
                      {mentor.title}
                    </CardDescription>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse mt-2">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{mentor.rating}</span>
                        <span className="text-sm text-gray-500">({mentor.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {mentor.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {mentor.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {mentor.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{mentor.skills.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Clock className="w-4 h-4" />
                    <span>{mentor.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <MapPin className="w-4 h-4" />
                    <span>{mentor.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Users className="w-4 h-4" />
                    <span>{mentor.students} طالب</span>
                  </div>
                  <div className="font-medium text-northstar-blue">
                    {mentor.price}
                  </div>
                </div>

                <Button className="w-full bg-northstar-gold hover:bg-northstar-gold/90 text-northstar-blue">
                  عرض الملف الشخصي
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              لم يتم العثور على نتائج
            </h3>
            <p className="text-gray-500">
              جرب تغيير كلمات البحث أو الفئة المحددة
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorsPage;