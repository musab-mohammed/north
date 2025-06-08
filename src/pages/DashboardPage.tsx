import React from 'react';
import { Calendar, MessageSquare, Users, BookOpen, TrendingUp, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DashboardPage = () => {
  const upcomingSessions = [
    {
      id: 1,
      mentorName: 'د. أحمد الخالدي',
      topic: 'تطوير تطبيقات React',
      date: '2024-01-15',
      time: '14:00',
      duration: '60 دقيقة',
      status: 'confirmed'
    },
    {
      id: 2,
      mentorName: 'سارة المنصوري',
      topic: 'استراتيجيات الأعمال',
      date: '2024-01-17',
      time: '16:00',
      duration: '45 دقيقة',
      status: 'pending'
    }
  ];

  const recentMessages = [
    {
      id: 1,
      from: 'د. أحمد الخالدي',
      message: 'مرحباً، هل أنت مستعد لجلسة الغد؟',
      time: '10:30 ص',
      unread: true
    },
    {
      id: 2,
      from: 'سارة المنصوري',
      message: 'شكراً لك على الجلسة الرائعة اليوم',
      time: 'أمس',
      unread: false
    }
  ];

  const stats = [
    {
      title: 'الجلسات المكتملة',
      value: '12',
      icon: BookOpen,
      change: '+2 هذا الأسبوع'
    },
    {
      title: 'ساعات التعلم',
      value: '24',
      icon: Clock,
      change: '+4 هذا الأسبوع'
    },
    {
      title: 'المرشدين النشطين',
      value: '3',
      icon: Users,
      change: 'مستقر'
    },
    {
      title: 'معدل التقدم',
      value: '85%',
      icon: TrendingUp,
      change: '+5% هذا الشهر'
    }
  ];

  return (
    <div className="min-h-screen bg-northstar-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-northstar-blue">لوحة التحكم</h1>
          <p className="text-gray-600 mt-2">مرحباً بك، أحمد! إليك ملخص نشاطك اليوم</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-northstar-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-northstar-blue">{stat.value}</div>
                <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Sessions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse text-northstar-blue">
                <Calendar className="w-5 h-5" />
                <span>الجلسات القادمة</span>
              </CardTitle>
              <CardDescription>
                جلساتك المجدولة للأيام القادمة
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>{session.mentorName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-northstar-blue">{session.mentorName}</h4>
                      <p className="text-sm text-gray-600">{session.topic}</p>
                      <p className="text-xs text-gray-500">
                        {session.date} في {session.time} - {session.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge variant={session.status === 'confirmed' ? 'default' : 'secondary'}>
                      {session.status === 'confirmed' ? 'مؤكدة' : 'في الانتظار'}
                    </Badge>
                    <Button size="sm" variant="outline">
                      عرض التفاصيل
                    </Button>
                  </div>
                </div>
              ))}
              <Button className="w-full bg-northstar-gold hover:bg-northstar-gold/90 text-northstar-blue">
                جدولة جلسة جديدة
              </Button>
            </CardContent>
          </Card>

          {/* Recent Messages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse text-northstar-blue">
                <MessageSquare className="w-5 h-5" />
                <span>الرسائل الحديثة</span>
              </CardTitle>
              <CardDescription>
                آخر المحادثات مع مرشديك
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentMessages.map((message) => (
                <div key={message.id} className="flex items-start space-x-3 rtl:space-x-reverse p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>{message.from.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm text-northstar-blue">{message.from}</h4>
                      <span className="text-xs text-gray-500">{message.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 truncate">{message.message}</p>
                    {message.unread && (
                      <div className="w-2 h-2 bg-northstar-gold rounded-full mt-2"></div>
                    )}
                  </div>
                </div>
              ))}
              <Button className="w-full" variant="outline">
                عرض جميع المحادثات
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-northstar-blue">إجراءات سريعة</CardTitle>
            <CardDescription>
              الأدوات والخدمات الأكثر استخداماً
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col space-y-2 bg-northstar-blue hover:bg-northstar-blue/90">
                <BookOpen className="w-6 h-6" />
                <span className="text-sm">البحث عن مرشد</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2" variant="outline">
                <Calendar className="w-6 h-6" />
                <span className="text-sm">جدولة جلسة</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2" variant="outline">
                <MessageSquare className="w-6 h-6" />
                <span className="text-sm">المحادثات</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2" variant="outline">
                <TrendingUp className="w-6 h-6" />
                <span className="text-sm">تقرير التقدم</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;