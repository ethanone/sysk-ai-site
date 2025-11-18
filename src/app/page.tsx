"use client";

import { memo, useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Sparkles,
  Cpu,
  HeartPulse,
  Zap,
  PenTool,
  FileText,
  Stethoscope,
  Home,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Lightbulb,
  Shield,
  Languages,
} from "lucide-react";
import companyDataZh from "@/data/companyData.json";
import companyDataEn from "@/data/companyData.en.json";
import uiTextZh from "@/data/uiText.json";
import uiTextEn from "@/data/uiText.en.json";

// 定义类型
type CompanyData = typeof companyDataZh;
type UIText = typeof uiTextZh;

// 图标映射
const iconMap = {
  Sparkles, Cpu, HeartPulse, Zap, PenTool, FileText, 
  Stethoscope, Home, TrendingUp, Shield, CheckCircle2,
  Users, Target, Lightbulb,
};

// 优化的动画配置 - 更流畅自然
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] // 自定义缓动函数
  },
  viewport: { once: true, margin: "-100px" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// 优化的淡入动画
const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { 
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1]
  },
  viewport: { once: true },
};

// 响应式 Section 组件 - 参考 Supima 和 Foundry 的大留白设计，移动端优化
const Section = memo(({ children, className = "", id }: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <section id={id} className={`py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 px-4 sm:px-6 md:px-6 lg:px-8 ${className}`}>
    <div className="container mx-auto max-w-6xl">
      {children}
    </div>
  </section>
));
Section.displayName = "Section";

// Logo 组件 - 使用真实的 SCXSL logo 图片，移动端优化
const SCXSLLogo = memo(({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={className}>
    <Image
      src="/scxsl-logo.png"
      alt="SCXSL Logo"
      width={48}
      height={48}
      className="w-full h-full object-contain"
      priority
      sizes="(max-width: 768px) 40px, 48px"
      loading="eager"
    />
  </div>
));
SCXSLLogo.displayName = "SCXSLLogo";

// 导航栏组件
const Navigation = memo(({ uiText }: { uiText: UIText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const navItems = [
    { label: uiText.navigation.home, href: "#home" },
    { label: uiText.navigation.about, href: "#about" },
    { label: uiText.navigation.team, href: "#team" },
    { label: uiText.navigation.services, href: "#services" },
    { label: uiText.navigation.cases, href: "#cases" },
    { label: uiText.navigation.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300 supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo - 参考 Supima 和 Foundry 的简洁设计 */}
          <a 
            href="#home" 
            className="flex items-center space-x-3 group focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 rounded"
            aria-label="返回首页"
          >
            <SCXSLLogo className="w-10 h-10 transition-opacity duration-300 group-hover:opacity-80 group-focus-visible:opacity-80" />
            <h1 className="text-xl md:text-2xl font-light tracking-tight text-black">
              New Shi Long
            </h1>
          </a>

          {/* Desktop Navigation - 更简洁的设计 */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-normal text-gray-900 hover:text-black transition-colors tracking-wide relative group focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 rounded px-1"
              >
                {item.label}
                <span className="absolute -bottom-1 left-1 right-1 h-0.5 bg-black transition-all duration-300 group-hover:w-full w-0 group-focus-visible:w-full"></span>
              </a>
            ))}
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm font-normal text-gray-900 hover:text-black transition-colors focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 rounded px-2 py-1"
              title={uiText.navigation.switchLanguage}
              aria-label={uiText.navigation.switchLanguage}
            >
              <Languages className="w-4 h-4" />
              <span className="text-xs">{language === 'zh' ? 'EN' : '中文'}</span>
            </button>
            <Button className="tech-button bg-black text-white hover:bg-gray-900 px-6 py-2.5 text-sm font-normal tracking-wide focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2" asChild>
              <a href={`mailto:uj.zhou@foxmail.com?subject=${encodeURIComponent(language === 'zh' ? '咨询羊肚菌产品,并获取样品' : 'Inquiry about Morel Mushrooms and Request Sample')}`}>
                {uiText.navigation.requestSample}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button - 优化触摸区域 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
            aria-label={isOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - 优化的移动端体验 */}
        {isOpen && (
          <>
            {/* 背景遮罩 - 点击关闭 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden py-4 border-t border-gray-200 bg-white relative z-50"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3.5 text-base text-gray-900 hover:text-black hover:bg-gray-50 rounded-lg px-4 mx-2 mb-1 transition-colors active:bg-gray-100 touch-manipulation min-h-[44px] flex items-center focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
                >
                  {item.label}
                </a>
              ))}
              {/* Mobile Language Toggle */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="flex items-center space-x-2 py-3.5 px-4 text-base text-gray-900 hover:text-black hover:bg-gray-50 rounded-lg transition-colors w-full active:bg-gray-100 touch-manipulation min-h-[44px] mx-2 focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
                aria-label={uiText.navigation.switchLanguage}
              >
                <Languages className="w-5 h-5" />
                <span>{uiText.navigation.switchToEnglish}</span>
              </button>
              <Button className="w-full mt-4 mx-2 tech-button bg-black text-white min-h-[48px] text-base" asChild>
                <a href={`mailto:uj.zhou@foxmail.com?subject=${encodeURIComponent(language === 'zh' ? '咨询羊肚菌产品,并获取样品' : 'Inquiry about Morel Mushrooms and Request Sample')}`}>
                  {uiText.navigation.requestSample}
                </a>
              </Button>
            </motion.div>
          </>
        )}
      </div>
    </nav>
  );
});
Navigation.displayName = "Navigation";

// Hero Section
const HeroSection = memo(({ companyData, uiText }: { companyData: CompanyData; uiText: UIText }) => {
  const { language } = useLanguage();
  return (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-20 lg:pt-24 bg-white">
    <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 md:px-6 lg:px-8 text-center">
      <motion.div {...fadeInUp}>
        {/* 参考 Supima 和 Foundry 的大标题设计 */}
        <p className="mb-6 text-gray-600 font-light text-sm md:text-base tracking-wider uppercase">
          {companyData.companyInfo.founded && `${language === 'zh' ? '成立于' : 'Founded in'} ${companyData.companyInfo.founded} · `}{companyData.companyInfo.tagline}
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-10 md:mb-12 lg:mb-16 leading-[1.05] tracking-tight text-black">
          <span className="tech-text-animated inline-block">{companyData.companyInfo.slogan}</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          {companyData.companyInfo.name}{language === 'zh' ? '专注于' : ' focuses on '}{companyData.companyInfo.focus}
        </p>
        
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-12 md:mb-16 max-w-xl mx-auto font-light leading-relaxed">
          {companyData.aboutUs.mission}
        </p>
        
        {/* 参考 Foundry 的按钮设计 - 移动端优化 */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
          <Button 
            size="lg" 
            className="tech-button bg-black text-white hover:bg-gray-900 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-normal tracking-wide focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 w-full sm:w-auto min-h-[48px] touch-manipulation" 
            asChild
          >
            <a href="#services" aria-label={uiText.hero.learnMore}>
              {uiText.hero.learnMore}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-gray-400 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-normal tracking-wide focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 transition-all w-full sm:w-auto min-h-[48px] touch-manipulation" 
            asChild
          >
            <a href="#contact" aria-label={uiText.hero.contactUs}>
              <Phone className="mr-2 w-4 h-4 transition-transform group-hover:scale-110" />
              {uiText.hero.contactUs}
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
    
    {/* 简洁的滚动指示器 */}
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
      <ChevronRight className="w-5 h-5 text-gray-400 rotate-90 animate-bounce" />
    </div>
  </section>
  );
});
HeroSection.displayName = "HeroSection";

// Focus Areas Section
const FocusAreasSection = memo(({ companyData, uiText }: { companyData: CompanyData; uiText: UIText }) => (
  <Section className="bg-white">
    <motion.div {...fadeInUp} className="text-center mb-12 md:mb-16 lg:mb-20">
      <p className="mb-3 md:mb-4 text-gray-600 font-light text-xs sm:text-sm tracking-wider uppercase">
        {uiText.focusAreas.badge}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 tracking-tight text-black">
        {uiText.focusAreas.title}<span className="text-black">{uiText.focusAreas.titleHighlight}</span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed px-4">
        {uiText.focusAreas.subtitle}
      </p>
    </motion.div>

    <motion.div 
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
    >
      {companyData.focusAreas.map((area, index) => {
        const Icon = iconMap[area.icon as keyof typeof iconMap] || Sparkles;
        return (
          <motion.div key={index} variants={fadeInUp}>
            <Card className="tech-card group h-full bg-white border border-gray-200 focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2">
              <CardHeader className="pb-4">
                <div 
                  className="w-12 h-12 mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-focus-visible:scale-110"
                >
                  <Icon className="w-6 h-6 text-gray-900 transition-colors group-hover:text-black" />
                </div>
                <CardTitle className="text-lg font-normal text-black mb-3 transition-colors group-hover:text-black">
                  {area.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed font-light text-sm transition-colors group-hover:text-gray-700">{area.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  </Section>
));
FocusAreasSection.displayName = "FocusAreasSection";

// About Section - 参考 Supima 的简洁设计
const AboutSection = memo(({ companyData, uiText }: { companyData: CompanyData; uiText: UIText }) => (
  <Section id="about" className="bg-white">
    <div className="max-w-4xl mx-auto">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <p className="mb-4 text-gray-600 font-light text-sm tracking-wider uppercase">
          {uiText.about.badge}
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12 tracking-tight text-black">
          {uiText.about.title}<span className="text-black">{companyData.companyInfo.focus}</span>
        </h2>
        <div className="space-y-8 text-gray-700 leading-relaxed text-left text-base md:text-lg font-light">
          {companyData.aboutUs.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <div className="mt-16 space-y-8">
          <div className="flex items-start space-x-6 text-left">
            <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-normal text-black mb-3 text-base tracking-wide">{uiText.about.coreGoal}</h4>
              <p className="text-gray-600 font-light text-sm leading-relaxed">{companyData.aboutUs.mission}</p>
            </div>
          </div>
          <div className="flex items-start space-x-6 text-left">
            <Target className="w-5 h-5 text-black flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-normal text-black mb-3 text-base tracking-wide">{uiText.about.vision}</h4>
              <p className="text-gray-600 font-light text-sm leading-relaxed">{companyData.aboutUs.vision}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </Section>
));
AboutSection.displayName = "AboutSection";

// Core Advantages Section - 参考 Foundry 的优雅设计
const AdvantagesSection = memo(({ companyData, uiText }: { companyData: CompanyData; uiText: UIText }) => (
  <Section id="services" className="bg-white">
    <motion.div {...fadeInUp} className="text-center mb-20">
      <p className="mb-4 text-gray-600 font-light text-sm tracking-wider uppercase">
        {uiText.advantages.badge}
      </p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight text-black">
        {uiText.advantages.title}<span className="text-black">{uiText.advantages.titleHighlight}</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {companyData.coreAdvantages.map((advantage, index) => {
        const Icon = iconMap[advantage.icon as keyof typeof iconMap] || Sparkles;
        return (
          <motion.div
            key={index}
            {...fadeInUp}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="tech-card h-full bg-white border border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle className="text-xl font-normal text-black">{advantage.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6 font-light text-sm">{advantage.description}</p>
                <div className="flex flex-wrap gap-2">
                  {advantage.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="outline" className="border-gray-300 text-gray-700 text-xs font-light">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  </Section>
));
AdvantagesSection.displayName = "AdvantagesSection";

// Team Section - 参考 Supima 的简洁团队展示
const TeamSection = memo(({ companyData, uiText }: { companyData: CompanyData; uiText: UIText }) => (
  <Section id="team" className="bg-white">
    <motion.div {...fadeInUp} className="text-center mb-20">
      <p className="mb-4 text-gray-600 font-light text-sm tracking-wider uppercase">
        {uiText.team.badge}
      </p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight text-black">
        {uiText.team.title}<span className="text-black">{uiText.team.titleHighlight}</span>
      </h2>
      <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
        {companyData.team.intro}
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {companyData.team.leadership.map((member, index) => (
        <motion.div
          key={index}
          {...fadeInUp}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="tech-card group text-center h-full bg-white border border-gray-200">
            <CardHeader>
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-black" />
              </div>
              <CardTitle className="text-lg font-normal mb-2 text-black">{member.name}</CardTitle>
              <CardDescription className="text-gray-600 font-light text-sm">
                {member.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed font-light">{member.background}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {member.expertise.slice(0, 3).map((skill, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs font-light border-gray-300 text-gray-600">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
));
TeamSection.displayName = "TeamSection";

// Case Studies Section - 参考 Foundry 的案例展示
const CaseStudiesSection = memo(({ companyData, uiText }: { companyData: CompanyData; uiText: UIText }) => (
  <Section id="cases" className="bg-white">
    <motion.div {...fadeInUp} className="text-center mb-20">
      <p className="mb-4 text-gray-600 font-light text-sm tracking-wider uppercase">
        {uiText.cases.badge}
      </p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight text-black">
        <span className="text-black">{uiText.cases.title}</span>{uiText.cases.titleHighlight}
      </h2>
      <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
        {uiText.cases.subtitle}
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      {companyData.caseStudies.map((caseStudy, index) => {
        const Icon = iconMap[caseStudy.icon as keyof typeof iconMap] || FileText;
        return (
          <motion.div
            key={caseStudy.id}
            {...fadeInUp}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="tech-card group h-full overflow-hidden bg-white border border-gray-200">
              <CardHeader>
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-3 text-xs font-light border-gray-300 text-gray-600">
                      {caseStudy.category}
                    </Badge>
                    <CardTitle className="text-xl font-normal mb-3 text-black">
                      {caseStudy.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm font-light">
                      {caseStudy.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-normal text-sm text-gray-900 mb-3 tracking-wide">{uiText.cases.technologies}</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs font-light border-gray-300 text-gray-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Pain Point (if exists) */}
                {caseStudy.painPoint && (
                  <div className="bg-gray-50 border border-gray-200 rounded p-4">
                    <p className="text-sm text-gray-700 font-light leading-relaxed">
                      <span className="font-normal">{uiText.cases.painPoint}</span>{caseStudy.painPoint}
                    </p>
                  </div>
                )}

                {/* Features */}
                <div>
                  <h4 className="font-normal text-sm text-gray-900 mb-3 tracking-wide">{uiText.cases.features}</h4>
                  <Accordion type="single" collapsible>
                    {caseStudy.features.map((feature, idx) => (
                      <AccordionItem key={idx} value={`feature-${idx}`}>
                        <AccordionTrigger className="text-sm font-normal">
                          {feature.name}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-gray-600 leading-relaxed font-light">
                          {feature.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Outcome */}
                <div className="bg-gray-50 border border-gray-200 rounded p-5">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-normal text-sm text-black mb-2 tracking-wide">{uiText.cases.outcome}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed font-light">{caseStudy.outcome}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  </Section>
));
CaseStudiesSection.displayName = "CaseStudiesSection";

// Contact Section
const ContactSection = memo(({ companyData, uiText }: { companyData: CompanyData; uiText: UIText }) => {
  const { language } = useLanguage();
  
  return (
  <Section id="contact" className="bg-white">
    <motion.div {...fadeInUp} className="text-center mb-20">
      <p className="mb-4 text-gray-600 font-light text-sm tracking-wider uppercase">
        {uiText.contact.badge}
      </p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight text-black">
        {uiText.contact.title}<span className="text-black">{uiText.contact.titleHighlight}</span>{uiText.contact.titleSuffix}
      </h2>
      <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
        {uiText.contact.subtitle}
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <motion.div {...fadeInUp} className="space-y-6">
        <Card className="border border-gray-200 hover:shadow-lg transition-shadow bg-white">
          <CardContent className="pt-6">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-normal text-sm text-gray-900 mb-2 tracking-wide">{uiText.contact.phoneLabel}</h4>
                  <a href={`tel:${companyData.contact.phone}`} className="text-gray-700 hover:text-black font-light text-sm">
                    {companyData.contact.phone}
                  </a>
                  <p className="text-xs text-gray-500 mt-1 font-light">{companyData.contact.workingHours}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-normal text-sm text-gray-900 mb-2 tracking-wide">{uiText.contact.emailLabel}</h4>
                  <a href={`mailto:${companyData.contact.email}?subject=${encodeURIComponent(language === 'zh' ? '咨询羊肚菌产品' : 'Inquiry about Morel Mushrooms')}`} className="text-gray-700 hover:text-black font-light text-sm">
                    {companyData.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-normal text-sm text-gray-900 mb-2 tracking-wide">{uiText.contact.addressLabel}</h4>
                  <p className="text-gray-600 text-sm font-light">
                    {companyData.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black text-white border-0">
          <CardContent className="pt-6">
            <h3 className="text-xl font-light mb-4">{companyData.companyInfo.slogan}</h3>
            <p className="mb-6 opacity-80 text-sm font-light leading-relaxed">
              {companyData.aboutUs.vision}
            </p>
            <Button size="lg" className="w-full tech-button bg-white text-black hover:bg-gray-100" asChild>
              <a href={`mailto:${companyData.contact.email}?subject=${encodeURIComponent(language === 'zh' ? '咨询羊肚菌产品与合作' : 'Inquiry about Morel Mushrooms & Cooperation')}`}>
                {uiText.contact.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Company Values */}
      <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
        <h3 className="text-2xl font-bold mb-6">{uiText.contact.values}</h3>
        <div className="space-y-4">
          {companyData.aboutUs.values.map((value, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{value}</h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6 bg-green-50 border-2 border-green-200">
          <CardContent className="pt-6">
            <h4 className="font-semibold text-gray-900 mb-4">{uiText.contact.advisors}</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-700">{companyData.team.teamSize.advisors.medical}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-700">{companyData.team.teamSize.advisors.power}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-700">{companyData.team.teamSize.advisors.design}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </Section>
  );
});
ContactSection.displayName = "ContactSection";

// Footer - 参考 Supima 和 Foundry 的简洁 Footer
const Footer = memo(({ companyData, uiText }: { companyData: CompanyData; uiText: UIText }) => (
  <footer className="bg-white border-t border-gray-200 py-16">
    <div className="container mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <Image
              src="/scxsl-logo.png"
              alt="New Shi Long Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div>
              <h3 className="text-lg font-light tracking-tight text-black">New Shi Long</h3>
            </div>
          </div>
          <p className="text-gray-600 text-sm font-light leading-relaxed">
            {companyData.companyInfo.slogan}
          </p>
        </div>

        <div>
          <h4 className="font-normal text-sm text-black mb-6 tracking-wide">{uiText.footer.quickLinks}</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#about" className="hover:text-black transition-colors font-light">{uiText.footer.about}</a></li>
            <li><a href="#team" className="hover:text-black transition-colors font-light">{uiText.footer.team}</a></li>
            <li><a href="#services" className="hover:text-black transition-colors font-light">{uiText.footer.services}</a></li>
            <li><a href="#cases" className="hover:text-black transition-colors font-light">{uiText.footer.cases}</a></li>
            <li><a href="#contact" className="hover:text-black transition-colors font-light">{uiText.footer.contact}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-normal text-sm text-black mb-6 tracking-wide">{uiText.footer.contactInfo}</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center space-x-3 font-light">
              <Phone className="w-4 h-4" />
              <span>{companyData.contact.phone}</span>
            </li>
            <li className="flex items-center space-x-3 font-light">
              <Mail className="w-4 h-4" />
              <span>{companyData.contact.email}</span>
            </li>
            <li className="flex items-start space-x-3 font-light">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
              <span>{companyData.contact.addressShort}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8 text-center text-xs text-gray-500 font-light">
        <p>© {new Date().getFullYear()} {companyData.companyInfo.name}. {uiText.footer.allRightsReserved}</p>
        <p className="mt-2">{uiText.footer.foundedIn} {companyData.companyInfo.founded} · {uiText.footer.focusOn}</p>
      </div>
    </div>
  </footer>
));
Footer.displayName = "Footer";

// Main Page Component
export default function HomePage() {
  const { language } = useLanguage();
  const [companyData, setCompanyData] = useState<CompanyData>(companyDataZh);
  const [uiText, setUiText] = useState<UIText>(uiTextZh);

  useEffect(() => {
    setCompanyData(language === 'zh' ? companyDataZh : (companyDataEn as unknown as CompanyData));
    setUiText(language === 'zh' ? uiTextZh : (uiTextEn as unknown as UIText));
  }, [language]);

  return (
    <main className="min-h-screen">
      <Navigation uiText={uiText} />
      <HeroSection companyData={companyData} uiText={uiText} />
      <FocusAreasSection companyData={companyData} uiText={uiText} />
      <AboutSection companyData={companyData} uiText={uiText} />
      <AdvantagesSection companyData={companyData} uiText={uiText} />
      <TeamSection companyData={companyData} uiText={uiText} />
      <CaseStudiesSection companyData={companyData} uiText={uiText} />
      <ContactSection companyData={companyData} uiText={uiText} />
      <Footer companyData={companyData} uiText={uiText} />
    </main>
  );
}

