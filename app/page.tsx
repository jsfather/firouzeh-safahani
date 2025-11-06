"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Sparkles,
  Award,
  Heart,
  Star,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    {
      name: "مانیکور و پدیکور",
      icon: "💅",
      description: "مراقبت حرفه‌ای از ناخن و لاک",
    },
    {
      name: "ناخن ژل",
      icon: "✨",
      description: "مانیکور ژل با دوام طولانی",
    },
    {
      name: "طراحی ناخن",
      icon: "🎨",
      description: "طراحی‌های سفارشی و خلاقانه",
    },
    {
      name: "کاشت ناخن",
      icon: "💎",
      description: "اکستنشن اکریلیک و ژل",
    },
  ];

  // Your actual nail art images
  const nailImages = [
    "photo_1_2025-11-07_00-13-14.jpg",
    "photo_2_2025-11-07_00-13-14.jpg",
    "photo_3_2025-11-07_00-13-14.jpg",
    "photo_4_2025-11-07_00-13-14.jpg",
    "photo_5_2025-11-07_00-13-14.jpg",
    "photo_6_2025-11-07_00-13-14.jpg",
    "photo_7_2025-11-07_00-13-14.jpg",
    "photo_8_2025-11-07_00-13-14.jpg",
    "photo_9_2025-11-07_00-13-14.jpg",
    "photo_10_2025-11-07_00-13-14.jpg",
    "photo_11_2025-11-07_00-13-14.jpg",
    "photo_12_2025-11-07_00-13-14.jpg",
    "photo_13_2025-11-07_00-13-14.jpg",
    "photo_14_2025-11-07_00-13-14.jpg",
    "photo_15_2025-11-07_00-13-14.jpg",
    "photo_16_2025-11-07_00-13-14.jpg",
    "photo_17_2025-11-07_00-13-14.jpg",
    "photo_18_2025-11-07_00-13-14.jpg",
    "photo_19_2025-11-07_00-13-14.jpg",
    "photo_20_2025-11-07_00-13-14.jpg",
    "photo_21_2025-11-07_00-13-14.jpg",
    "photo_22_2025-11-07_00-13-14.jpg",
    "photo_1_2025-11-07_00-13-50.jpg",
    "photo_2_2025-11-07_00-13-50.jpg",
    "photo_3_2025-11-07_00-13-50.jpg",
    "photo_4_2025-11-07_00-13-50.jpg",
  ];

  const portfolio = nailImages.map((image, index) => ({
    id: index + 1,
    image: `/nails/${image}`,
    alt: `نمونه کار طراحی ناخن ${index + 1}`,
  }));

  return (
    <div
      className="min-h-screen bg-linear-to-br from-rose-50 via-white to-pink-50"
      dir="rtl"
    >
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-rose-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-playfair font-bold bg-linear-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            فیروزه صفاهانی
          </motion.h1>
          <motion.a
            href="#contact"
            className="flex items-center gap-2 bg-linear-to-r from-rose-500 to-pink-600 text-white px-6 py-2 rounded-full font-inter font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={20} />
            رزرو نوبت
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full mb-6 font-inter"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={20} />
                هنرمند حرفه‌ای ناخن
              </motion.div>

              <h2 className="text-5xl sm:text-7xl font-playfair font-bold mb-6 bg-linear-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                با ناخن های زیبا
                <br />
                <span className="text-4xl sm:text-6xl">
                  سبک خود را ارتقا دهید
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-inter">
                ناخن‌های خود را به آثار هنری تبدیل کنید. تخصص در طراحی‌های
                سفارشی، مانیکور ژل و کاشت ناخن با دقت و توجه استثنایی به جزئیات.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="#portfolio"
                  className="bg-linear-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(244, 63, 94, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  مشاهده نمونه کارها
                </motion.a>
                <motion.a
                  href="#services"
                  className="bg-white border-2 border-rose-300 text-rose-600 px-8 py-4 rounded-full font-inter font-semibold text-lg"
                  whileHover={{ scale: 1.05, borderColor: "#e11d48" }}
                  whileTap={{ scale: 0.95 }}
                >
                  خدمات ما
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-linear-to-r from-rose-500 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "۵۰۰+", label: "مشتری راضی", icon: Heart },
              { number: "۱۰۰۰+", label: "طراحی انجام شده", icon: Sparkles },
              { number: "۵+", label: "سال تجربه", icon: Award },
              { number: "۵.۰", label: "رتبه مشتریان", icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="mx-auto mb-2" size={32} />
                <div className="text-4xl font-bold font-playfair mb-2">
                  {stat.number}
                </div>
                <div className="text-rose-100 font-inter">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-playfair font-bold mb-4 bg-linear-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              نمونه کارهای من
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              مجموعه‌ای از طراحی‌های زیبا و خلاقانه ناخن
            </p>
          </motion.div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="text-white text-sm font-inter font-semibold bg-rose-500/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      مشاهده
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 font-inter mb-4">
              🌟 نمونه کارهای بیشتر را در اینستاگرام ببینید
            </p>
            <motion.a
              href="https://instagram.com/Firouzeh_pedicure_nail"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              <Instagram size={20} />
              @Firouzeh_pedicure_nail
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-rose-400 text-4xl font-bold transition-colors"
            >
              ✕
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage}
                alt="نمایش بزرگ نمونه کار"
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white to-rose-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-playfair font-bold mb-4 bg-linear-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              خدمات ارائه شده
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              مراقبت حرفه‌ای از ناخن متناسب با سبک شما
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-rose-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-playfair font-bold mb-2 text-gray-800">
                  {service.name}
                </h3>
                <p className="text-gray-600 font-inter">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-playfair font-bold mb-12 text-center bg-linear-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              درباره من
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/firouzeh-safahani.jpg"
                    alt="فیروزه صفاهانی"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 font-inter leading-relaxed">
                  سلام، من{" "}
                  <span className="font-bold text-rose-600">
                    فیروزه صفاهانی
                  </span>
                  ، یک هنرمند ناخن با اشتیاق و سال‌ها تجربه در خلق طراحی‌های
                  زیبا و منحصر به فرد ناخن هستم. هر مشتری شایسته احساس اعتماد به
                  نفس و زیبایی است و من به ارائه نتایج استثنایی با دقت و توجه به
                  جزئیات افتخار می‌کنم.
                </p>
                <p className="text-lg text-gray-700 font-inter leading-relaxed">
                  از ظرافت کلاسیک تا بیانیه‌های هنری جسورانه، من با هر مشتری به
                  صورت نزدیک همکاری می‌کنم تا دیدگاه‌شان را به واقعیت تبدیل کنم.
                </p>

                {/* Credentials */}
                <div className="bg-rose-50 rounded-xl p-6 space-y-4 mt-8">
                  <div className="flex items-start gap-3">
                    <Award className="text-rose-600 mt-1 shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        مدرک فنی حرفه‌ای
                      </h3>
                      <p className="text-gray-600 text-sm">
                        دارای گواهینامه معتبر فنی و حرفه‌ای در زمینه ناخن
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap
                      className="text-rose-600 mt-1 shrink-0"
                      size={24}
                    />
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        مهارت آموزش
                      </h3>
                      <p className="text-gray-600 text-sm">
                        آموزش تخصصی هنر ناخن و تکنیک‌های پیشرفته
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-rose-500 to-pink-600"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-playfair font-bold mb-6 text-white">
              بیایید در ارتباط باشیم
            </h2>
            <p className="text-xl text-rose-100 mb-12 font-inter">
              آماده تبدیل ناخن‌های خود هستید؟ من را در اینستاگرام دنبال کنید تا
              آخرین کارهای من را ببینید و همین امروز نوبت خود را رزرو کنید!
            </p>

            <motion.a
              href="https://instagram.com/Firouzeh_pedicure_nail"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-rose-600 px-10 py-5 rounded-full font-inter font-bold text-xl shadow-2xl"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={28} />
              دنبال کنید در اینستاگرام
            </motion.a>

            <motion.div
              className="mt-12 text-white/80 font-inter"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p>📍 در قلب شهر واقع شده</p>
              <p className="mt-2">📧 برای رزرو و سوالات با من تماس بگیرید</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-playfair text-2xl mb-2">فیروزه صفاهانی</p>
          <p className="text-gray-400 font-inter mb-3">
            هنرمند حرفه‌ای ناخن © ۱۴۰۴
          </p>
          <a
            href="https://instagram.com/Firouzeh_pedicure_nail"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors"
          >
            <Instagram size={20} />
            @Firouzeh_pedicure_nail
          </a>
        </div>
      </footer>
    </div>
  );
}
