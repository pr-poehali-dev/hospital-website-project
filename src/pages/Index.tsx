import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const examinations = [
    {
      title: "Основные обследования",
      items: [
        "Общий клинический анализ крови",
        "Исследование глюкозы и холестерина", 
        "Регистрация электрокардиограммы",
        "Флюорография",
        "Измерение внутриглазного давления",
        "Исследование крови на ВИЧ"
      ]
    },
    {
      title: "Для граждан старше 40 лет",
      items: [
        "Маммография для женщин",
        "Исследование простатспецифического антигена для мужчин",
        "Исследование кала на скрытую кровь для всех, вне зависимости от пола"
      ]
    },
    {
      title: "Для всех женщин",
      items: [
        "Исследование гинекологического мазка на микрофлору и онкоцитологию"
      ]
    }
  ];

  const priceComparison = [
    { name: "ОАК", price: 450 },
    { name: "Глюкоза крови", price: 190 },
    { name: "Общий холестерин", price: 260 },
    { name: "Регистрация электрокардиограммы с расшифровкой", price: 815 },
    { name: "Измерение внутриглазного давления", price: 390 },
    { name: "Исследование кала на скрытую кровь", price: 1170 },
    { name: "Маммография с описанием", price: 1700 },
    { name: "Простатспецифический антиген", price: 500 },
    { name: "ВИЧ", price: 1500 },
    { name: "Мазок на онкоцитологию", price: 1780 }
  ];

  const diseases = [
    "анемии", "паразитарные инвазии", "сахарный диабет", "гипертоническая болезнь",
    "аритмии", "туберкулез", "ВИЧ", "заболевания кишечника", "молочных желез",
    "злокачественные новообразования и многие другие"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % examinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + examinations.length) % examinations.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-white via-medical-gray to-medical-lightBlue">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-medical-blue mb-6">
              Check-up
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Комплексное обследование в государственной поликлинике №2 — 
              бесплатно и информативно для вашего здоровья
            </p>
            <div className="flex justify-center space-x-8 mb-12">
              <div className="text-center animate-pulse-medical">
                <Icon name="Heart" size={48} className="mx-auto mb-2 text-medical-blue" />
                <p className="text-sm text-gray-600">Кабинет 215</p>
              </div>
              <div className="text-center animate-pulse-medical">
                <Icon name="Stethoscope" size={48} className="mx-auto mb-2 text-medical-blue" />
                <p className="text-sm text-gray-600">Кабинет 221</p>
              </div>
              <div className="text-center animate-pulse-medical">
                <Icon name="Activity" size={48} className="mx-auto mb-2 text-medical-blue" />
                <p className="text-sm text-gray-600">Кабинет 227</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Important Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-medical-blue mb-12 animate-fade-in">
            Что важно знать?
          </h2>
          
          {/* Slider */}
          <div className="relative max-w-4xl mx-auto">
            <Card className="p-8 shadow-lg border-2 border-medical-lightBlue animate-slide-in">
              <h3 className="text-2xl font-semibold text-medical-blue mb-6 text-center">
                {examinations[currentSlide].title}
              </h3>
              <ul className="space-y-4">
                {examinations[currentSlide].items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 animate-fade-in" 
                      style={{ animationDelay: `${index * 0.1}s` }}>
                    <Icon name="CheckCircle" size={20} className="text-medical-blue mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            {/* Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button 
                onClick={prevSlide}
                variant="outline" 
                size="icon"
                className="rounded-full border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white"
              >
                <Icon name="ChevronLeft" size={20} />
              </Button>
              <div className="flex space-x-2 items-center">
                {examinations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-medical-blue' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <Button 
                onClick={nextSlide}
                variant="outline" 
                size="icon"
                className="rounded-full border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white"
              >
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-medical-lightBlue to-medical-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-medical-blue mb-8 animate-fade-in">
            Почему лучше прийти к нам?
          </h2>
          <p className="text-xl text-center text-gray-700 mb-12 animate-fade-in">
            Это бесплатно и информативно!
          </p>

          {/* Price Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 shadow-lg animate-fade-in">
              <h3 className="text-xl font-semibold text-medical-blue mb-4">
                Средняя цена в частных клиниках:
              </h3>
              <div className="space-y-3">
                {priceComparison.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-700">{item.name}</span>
                    <span className="font-semibold text-red-600">{item.price} ₽</span>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 shadow-lg bg-gradient-to-br from-green-50 to-green-100 border-green-200 animate-fade-in">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                У нас — бесплатно!
              </h3>
              <div className="text-center py-12">
                <div className="text-4xl font-bold text-green-600 mb-4">
                  6 805 ₽
                </div>
                <p className="text-lg text-green-800 font-semibold">
                  Вы экономите!
                </p>
                <Icon name="TrendingUp" size={48} className="mx-auto mt-4 text-green-600" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Diseases Detection Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-medical-blue mb-8 animate-fade-in">
            Выявляемые заболевания
          </h2>
          <Card className="p-8 shadow-lg animate-fade-in">
            <p className="text-gray-700 mb-6 text-center">
              Пройдя Check-up в нашей поликлинике, у вас появляется возможность выявить ряд заболеваний, таких как:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {diseases.map((disease, index) => (
                <div key={index} className="flex items-center space-x-3 animate-fade-in"
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  <Icon name="AlertCircle" size={16} className="text-medical-blue flex-shrink-0" />
                  <span className="text-gray-700">{disease}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-medical-blue to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-8 animate-fade-in">
            Как записаться
          </h2>
          <Card className="p-8 shadow-lg bg-white/95 backdrop-blur animate-fade-in">
            <Icon name="MapPin" size={48} className="mx-auto mb-6 text-medical-blue" />
            <p className="text-lg text-gray-700 mb-4">
              Чтобы записаться на исследования обращайтесь в
            </p>
            <p className="text-xl font-semibold text-medical-blue mb-6">
              Поликлинику №2 по адресу г. Екатеринбург, ул. Братьев Быковых 16
            </p>
            <div className="flex justify-center space-x-8 mb-6">
              <div className="text-center">
                <Icon name="Calendar" size={24} className="mx-auto mb-2 text-medical-blue" />
                <p className="text-sm text-gray-600">Кабинет 215</p>
              </div>
              <div className="text-center">
                <Icon name="Clock" size={24} className="mx-auto mb-2 text-medical-blue" />
                <p className="text-sm text-gray-600">Кабинет 221</p>
              </div>
              <div className="text-center">
                <Icon name="Users" size={24} className="mx-auto mb-2 text-medical-blue" />
                <p className="text-sm text-gray-600">Кабинет 227</p>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <Icon name="AlertTriangle" size={20} className="inline mr-2 text-yellow-600" />
              <span className="text-yellow-800 font-medium">
                Не забудьте паспорт и полис ОМС
              </span>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;