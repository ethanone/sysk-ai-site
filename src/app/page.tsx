"use client";

import { memo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "@/components/ProjectModal";
import { motion } from "framer-motion";
import {
  Languages,
  Target,
  Eye,
  Sparkles,
  FileText,
  TrendingUp,
  Search,
  CheckCircle2,
  Zap,
  Heart,
  Users,
  Star,
  Image as ImageIcon,
  Palette,
  Type,
  Layers,
  BookOpen,
  Video,
  Settings,
} from "lucide-react";
import companyDataZh from "@/data/companyData.json";
import companyDataEn from "@/data/companyData.en.json";
import uiTextZh from "@/data/uiText.json";
import uiTextEn from "@/data/uiText.en.json";

// 定义类型
type CompanyData = typeof companyDataZh;
type UIText = typeof uiTextZh;

// 优化的动画配置
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
  },
  viewport: { once: true, margin: "0px" },
};

// 语言切换按钮组件
const LanguageToggle = memo(({ uiText }: { uiText: UIText }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center space-x-2 px-4 py-2 bg-blue-900/80 backdrop-blur-md border border-blue-400/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      title={uiText.navigation.switchLanguage}
    >
      <Languages className="w-4 h-4 text-cyan-300" />
      <span className="text-sm font-medium text-blue-200">{language === 'zh' ? 'EN' : '中文'}</span>
    </button>
  );
});
LanguageToggle.displayName = "LanguageToggle";

// 主页面组件
export default function HomePage() {
  const { language } = useLanguage();
  const companyData = language === 'zh' ? companyDataZh : (companyDataEn as unknown as CompanyData);
  const uiText = language === 'zh' ? uiTextZh : (uiTextEn as unknown as UIText);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // 图标映射
  const iconMap: Record<string, any> = {
    Target, Eye, Sparkles, FileText, TrendingUp, Search, CheckCircle2,
    Zap, Heart, Users, Star, ImageIcon, Palette, Type, Layers, BookOpen, Video, Settings
  };

  return (
    <main className="min-h-screen elegant-gradient relative">
      <LanguageToggle uiText={uiText} />
      
      {/* 项目简介模态框 */}
      <ProjectModal isOpen={isProjectModalOpen} onClose={() => setIsProjectModalOpen(false)} language={language} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* 星空背景 */}
        <div className="absolute inset-0 starfield-bg"></div>
        {/* 流体渐变背景 */}
        <div className="absolute inset-0 fluid-gradient opacity-60"></div>
        {/* 额外的深度效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-transparent to-blue-900/40"></div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div {...fadeInUp}>
            {/* 标签 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 mb-8"
            >
              <span className="text-base sm:text-lg text-blue-300 tracking-wider font-light glow-text">
                {companyData.companyInfo.tagline}
              </span>
            </motion.div>

            {/* 主标题 */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight px-4"
            >
              <span className="inline-block bg-gradient-to-br from-cyan-200 via-blue-100 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] filter brightness-150 contrast-125" style={{
                textShadow: '0 0 40px rgba(34, 211, 238, 0.6), 0 0 80px rgba(96, 165, 250, 0.4), 0 4px 12px rgba(0, 0, 0, 0.9)',
                WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.3)'
              }}>
                {companyData.companyInfo.name}
              </span>
            </motion.h1>

            {/* 副标题 */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl text-blue-200 mb-10 font-medium glow-text"
            >
              {companyData.companyInfo.slogan}
            </motion.p>

            {/* 描述 */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-16 max-w-4xl mx-auto leading-relaxed font-bold"
            >
              {companyData.companyInfo.subtitle}
            </motion.p>

            {/* CTA 按钮 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            >
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setIsProjectModalOpen(true)}
                className="secondary-button px-12 py-7 text-lg font-semibold tracking-wide w-full sm:w-auto min-h-[64px] border-2"
              >
                {language === 'zh' ? '了解更多' : 'Learn More'}
              </Button>
            </motion.div>

            {/* 核心服务卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {companyData.focusAreas.map((area, index) => {
                const Icon = iconMap[area.icon] || Target;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-blue-900/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400/40 tech-card-glow glass-card"
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto bg-blue-500/20 border border-cyan-400/30"
                    >
                      <Icon className="w-8 h-8 text-cyan-300" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-100 mb-3 text-center">
                      {area.name}
                    </h3>
                    <p className="text-blue-200/80 text-sm text-center leading-relaxed">
                      {area.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 市场分析 Section */}
      {companyData.marketAnalysis && (
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 fluid-gradient opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 to-blue-900/60 backdrop-blur-sm"></div>
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="stat-badge mb-4 inline-block">
                {uiText.marketAnalysis.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {uiText.marketAnalysis.title}
                <span className="text-cyan-300"> {uiText.marketAnalysis.titleHighlight}</span>
              </h2>
              <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
                {uiText.marketAnalysis.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                    className="bg-blue-900/30 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-cyan-400/20 tech-card-glow glass-card"
              >
                <h3 className="text-2xl font-bold text-blue-100 mb-4">{companyData.marketAnalysis.current.title}</h3>
                <p className="text-blue-200/80 leading-relaxed">{companyData.marketAnalysis.current.content}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                    className="bg-blue-900/30 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-cyan-400/20 tech-card-glow glass-card"
              >
                <h3 className="text-2xl font-bold text-blue-100 mb-6">{companyData.marketAnalysis.painPoints.title}</h3>
                <div className="space-y-4">
                  {companyData.marketAnalysis.painPoints.points.map((point, index) => {
                    const Icon = iconMap[point.icon] || Target;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 bg-cyan-500/20 border border-cyan-400/30 flex-shrink-0">
                          <Icon className="w-5 h-5 text-cyan-300" />
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-100 mb-1">{point.name}</h4>
                          <p className="text-sm text-blue-200/80">{point.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* 核心技术 Section */}
      {companyData.technology && (
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 fluid-gradient opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-950/60 backdrop-blur-sm"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="stat-badge mb-4 inline-block">
                {uiText.technology.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="inline-block bg-gradient-to-br from-cyan-200 via-blue-100 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] filter brightness-150 contrast-125" style={{
                  textShadow: '0 0 40px rgba(34, 211, 238, 0.6), 0 0 80px rgba(96, 165, 250, 0.4), 0 4px 12px rgba(0, 0, 0, 0.9)',
                  WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.3)'
                }}>
                  {uiText.technology.title}
                </span>
                <span className="text-cyan-300"> {uiText.technology.titleHighlight}</span>
              </h2>
              <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
                {uiText.technology.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyData.technology.features.map((feature, index) => {
                const Icon = iconMap[feature.icon] || Layers;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-blue-900/30 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-cyan-400/20 hover:border-cyan-400/40 tech-card-glow glass-card"
                  >
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: feature.color + '15' }}
                    >
                      <Icon className="w-8 h-8" style={{ color: feature.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-blue-100 mb-3 text-center">{feature.name}</h3>
                    <p className="text-sm text-blue-200/80 leading-relaxed text-center">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 设备参数 Section */}
      {companyData.productSpecs && (
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 fluid-gradient opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 to-blue-900/60 backdrop-blur-sm"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="stat-badge mb-4 inline-block">
                {uiText.productSpecs.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="inline-block bg-gradient-to-br from-cyan-200 via-blue-100 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] filter brightness-150 contrast-125" style={{
                  textShadow: '0 0 40px rgba(34, 211, 238, 0.6), 0 0 80px rgba(96, 165, 250, 0.4), 0 4px 12px rgba(0, 0, 0, 0.9)',
                  WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.3)'
                }}>
                  {uiText.productSpecs.title}
                </span>
                <span className="text-cyan-300"> {uiText.productSpecs.titleHighlight}</span>
              </h2>
              <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
                {uiText.productSpecs.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {companyData.productSpecs.specs.map((spec, index) => {
                const Icon = iconMap[spec.icon] || Target;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-blue-900/30 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-cyan-400/20 hover:border-cyan-400/40 tech-card-glow glass-card text-center"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-cyan-500/20 border border-cyan-400/30">
                      <Icon className="w-6 h-6 text-cyan-300" />
                    </div>
                    <h3 className="text-sm font-semibold text-blue-300 mb-2">{spec.name}</h3>
                    <p className="text-xl font-bold text-blue-100 mb-1">{spec.value}</p>
                    {spec.valueEn && (
                      <p className="text-xs text-blue-300/70">{spec.valueEn}</p>
                    )}
                    {spec.description && (
                      <p className="text-xs text-blue-300/70 mt-2">{spec.description}</p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 竞品分析 Section */}
      {companyData.competitors && (
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 fluid-gradient opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-950/60 backdrop-blur-sm"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="stat-badge mb-4 inline-block">
                {uiText.competitors.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="inline-block bg-gradient-to-br from-cyan-200 via-blue-100 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] filter brightness-150 contrast-125" style={{
                  textShadow: '0 0 40px rgba(34, 211, 238, 0.6), 0 0 80px rgba(96, 165, 250, 0.4), 0 4px 12px rgba(0, 0, 0, 0.9)',
                  WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.3)'
                }}>
                  {uiText.competitors.title}
                </span>
                <span className="text-cyan-300"> {uiText.competitors.titleHighlight}</span>
              </h2>
              <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
                {uiText.competitors.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyData.competitors.comparisons.map((comparison, index) => {
                const Icon = iconMap[comparison.icon] || Eye;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-blue-900/40 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-400/30 hover:border-cyan-400/60 tech-card-glow"
                  >
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-cyan-500/20 border border-cyan-400/30"
                      >
                        <Icon className="w-6 h-6 text-cyan-300" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-100">{comparison.name}</h3>
                    </div>
                    <div className="mb-4 p-4 bg-blue-800/30 rounded-lg border border-blue-500/20">
                      <p className="text-sm text-blue-200/80 leading-relaxed mb-3">{comparison.description}</p>
                    </div>
                    <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-400/30">
                      <p className="text-sm font-semibold text-cyan-300 mb-1">G-Box优势：</p>
                      <p className="text-sm text-blue-100 leading-relaxed">{comparison.gboxAdvantage}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 应用场景 Section */}
      {companyData.applicationScenarios && (
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 fluid-gradient opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 to-blue-900/60 backdrop-blur-sm"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="stat-badge mb-4 inline-block">
                {uiText.applicationScenarios.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="inline-block bg-gradient-to-br from-cyan-200 via-blue-100 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] filter brightness-150 contrast-125" style={{
                  textShadow: '0 0 40px rgba(34, 211, 238, 0.6), 0 0 80px rgba(96, 165, 250, 0.4), 0 4px 12px rgba(0, 0, 0, 0.9)',
                  WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.3)'
                }}>
                  {uiText.applicationScenarios.title}
                </span>
                <span className="text-cyan-300"> {uiText.applicationScenarios.titleHighlight}</span>
              </h2>
              <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
                {uiText.applicationScenarios.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* 2B模式 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                    className="bg-blue-900/30 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-cyan-400/20 tech-card-glow glass-card"
              >
                <h3 className="text-2xl font-bold text-blue-100 mb-6">{companyData.applicationScenarios.b2b.title}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {companyData.applicationScenarios.b2b.scenarios.map((scenario, index) => {
                    const Icon = iconMap[scenario.icon] || ImageIcon;
                    return (
                      <div key={index} className="flex items-start p-4 bg-blue-800/30 rounded-lg border border-blue-500/20">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 bg-cyan-500/20 border border-cyan-400/30"
                        >
                          <Icon className="w-5 h-5 text-cyan-300" />
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-100 mb-1">{scenario.name}</h4>
                          <p className="text-sm text-blue-200/80">{scenario.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* 2C模式 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                    className="bg-blue-900/30 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-cyan-400/20 tech-card-glow glass-card"
              >
                <h3 className="text-2xl font-bold text-blue-100 mb-6">{companyData.applicationScenarios.b2c.title}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {companyData.applicationScenarios.b2c.scenarios.map((scenario, index) => {
                    const Icon = iconMap[scenario.icon] || Heart;
                    return (
                      <div key={index} className="flex items-start p-4 bg-blue-800/30 rounded-lg border border-blue-500/20">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 bg-cyan-500/20 border border-cyan-400/30"
                        >
                          <Icon className="w-5 h-5 text-cyan-300" />
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-100 mb-1">{scenario.name}</h4>
                          <p className="text-sm text-blue-200/80">{scenario.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* 特定场景标签 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {companyData.applicationScenarios.specificScenarios.map((scenario, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 rounded-full text-sm font-medium"
                >
                  {scenario}
                </span>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* 3D数字IP Section */}
      {companyData.digitalIP && (
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 fluid-gradient opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-950/60 backdrop-blur-sm"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="stat-badge mb-4 inline-block">
                {uiText.digitalIP.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {uiText.digitalIP.title}
                <span className="text-cyan-300"> {uiText.digitalIP.titleHighlight}</span>
              </h2>
              <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
                {uiText.digitalIP.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {companyData.digitalIP.features.map((feature, index) => {
                const Icon = iconMap[feature.icon] || Star;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-blue-900/30 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-cyan-400/20 hover:border-cyan-400/40 tech-card-glow glass-card text-center"
                  >
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 bg-cyan-500/20 border border-cyan-400/30"
                    >
                      <Icon className="w-8 h-8 text-cyan-300" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-100 mb-3">{feature.name}</h3>
                    <p className="text-sm text-blue-200/80 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* 传统数字资产问题 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-red-900/20 backdrop-blur-xl border border-red-400/20 rounded-2xl p-6 max-w-4xl mx-auto tech-card-glow glass-card"
            >
              <h3 className="text-lg font-bold text-red-300 mb-4 text-center">数字资产当前面临的问题：</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {companyData.digitalIP.problems.map((problem, index) => (
                  <div key={index} className="text-center">
                    <span className="text-red-200 font-medium">{problem}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 自由通道 Section */}
      {companyData.freeChannel && (
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 fluid-gradient opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 to-blue-900/60 backdrop-blur-sm"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="stat-badge mb-4 inline-block">
                {uiText.freeChannel.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="inline-block bg-gradient-to-br from-cyan-200 via-blue-100 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] filter brightness-150 contrast-125" style={{
                  textShadow: '0 0 40px rgba(34, 211, 238, 0.6), 0 0 80px rgba(96, 165, 250, 0.4), 0 4px 12px rgba(0, 0, 0, 0.9)',
                  WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.3)'
                }}>
                  {uiText.freeChannel.title}
                </span>
                <span className="text-cyan-300"> {uiText.freeChannel.titleHighlight}</span>
              </h2>
              <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
                {uiText.freeChannel.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {companyData.freeChannel.channels.map((channel, index) => {
                const Icon = iconMap[channel.icon] || Settings;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-blue-900/30 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-cyan-400/20 hover:border-cyan-400/40 tech-card-glow glass-card text-center"
                  >
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 bg-cyan-500/20 border border-cyan-400/30"
                    >
                      <Icon className="w-8 h-8 text-cyan-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-100 mb-4">{channel.name}</h3>
                    <p className="text-blue-200/80 text-sm leading-relaxed">{channel.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}


      {/* Footer */}
      <footer className="py-8 text-center border-t border-blue-700/30 bg-blue-950/80 backdrop-blur-sm">
        <p className="text-sm text-blue-300">
          © {new Date().getFullYear()} {companyData.companyInfo.name}. {language === 'zh' ? '版权所有' : 'All rights reserved.'}
        </p>
        <p className="text-xs text-blue-400/70 mt-2">
          {companyData.companyInfo.focus}
        </p>
      </footer>
    </main>
  );
}
