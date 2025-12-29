"use client";

import { memo, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ChatModal } from "@/components/ChatModal";
import { FloatingChatButton } from "@/components/FloatingChatButton";
import { ProjectModal } from "@/components/ProjectModal";
import { motion } from "framer-motion";
import {
  Languages,
  Bot,
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
      className="fixed top-6 right-6 z-50 flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      title={uiText.navigation.switchLanguage}
    >
      <Languages className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium text-gray-700">{language === 'zh' ? 'EN' : '中文'}</span>
    </button>
  );
});
LanguageToggle.displayName = "LanguageToggle";

// 主页面组件
export default function HomePage() {
  const { language } = useLanguage();
  const companyData = language === 'zh' ? companyDataZh : (companyDataEn as unknown as CompanyData);
  const uiText = language === 'zh' ? uiTextZh : (uiTextEn as unknown as UIText);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // 图标映射
  const iconMap: Record<string, any> = {
    Target, Eye, Sparkles, FileText, TrendingUp, Search, CheckCircle2,
    Zap, Heart, Users, Star, ImageIcon, Palette, Type, Layers, BookOpen, Video, Settings
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#FFFCF9] to-white">
      <LanguageToggle uiText={uiText} />
      
      {/* 聊天模态框 */}
      <ChatModal isOpen={isChatModalOpen} onClose={() => setIsChatModalOpen(false)} />
      
      {/* 项目简介模态框 */}
      <ProjectModal isOpen={isProjectModalOpen} onClose={() => setIsProjectModalOpen(false)} language={language} />
      
      {/* 浮动聊天按钮 */}
      <FloatingChatButton onClick={() => setIsChatModalOpen(true)} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div {...fadeInUp}>
            {/* Logo */}
            <div className="mb-12 sm:mb-16 flex justify-center">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60"
              >
                <Image
                  src="/images/team/ChatGPT_Image_2025年12月16日_20_59_50-removebg-preview.png"
                  alt={companyData.companyInfo.name}
                  width={240}
                  height={240}
                  className="object-contain drop-shadow-2xl w-full h-full"
                  priority
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 240px"
                />
              </motion.div>
            </div>

            {/* 标签 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 mb-8"
            >
              <span className="text-base sm:text-lg text-gray-500 tracking-wider font-light">
                {companyData.companyInfo.tagline}
              </span>
            </motion.div>

            {/* 主标题 */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {companyData.companyInfo.name}
              </span>
            </motion.h1>

            {/* 副标题 */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl text-gray-700 mb-10 font-medium"
            >
              {companyData.companyInfo.slogan}
            </motion.p>

            {/* 描述 */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
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
                onClick={() => setIsChatModalOpen(true)}
                className="cta-button px-12 py-7 text-lg font-semibold tracking-wide w-full sm:w-auto min-h-[64px] shadow-xl hover:shadow-2xl transition-all"
              >
                <Bot className="w-6 h-6 mr-3" />
                {language === 'zh' ? '开始定位' : 'Get Started'}
              </Button>
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
                    className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                      style={{ backgroundColor: area.color + '15' }}
                    >
                      <Icon className="w-8 h-8" style={{ color: area.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {area.name}
                    </h3>
                    <p className="text-gray-600 text-sm text-center leading-relaxed">
                      {area.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 品牌定位工作流 Section */}
      {companyData.brandPositioning && (
        <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F5F1ED]">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="stat-badge mb-4 inline-block">
                {uiText.brandPositioning.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {uiText.brandPositioning.title}
                <span className="text-primary"> {uiText.brandPositioning.titleHighlight}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {uiText.brandPositioning.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyData.brandPositioning.agents.map((agent, index) => {
                const Icon = iconMap[agent.icon] || Target;
                return (
                  <motion.div
                    key={agent.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                        style={{ backgroundColor: agent.color + '15' }}
                      >
                        <Icon className="w-6 h-6" style={{ color: agent.color }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{agent.name}</h3>
                        <span className="text-xs text-gray-500">Agent {index + 1}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {agent.description}
                    </p>
                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-xs font-semibold text-gray-500">输入:</span>
                        <p className="text-xs text-gray-600 mt-1">{agent.input.join('、')}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-gray-500">输出:</span>
                        <p className="text-xs text-gray-600 mt-1">{agent.output.join('、')}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 品牌识别系统 Section */}
      {companyData.brandIdentity && (
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="stat-badge mb-4 inline-block">
                {uiText.brandIdentity.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {uiText.brandIdentity.title}
                <span className="text-primary"> {uiText.brandIdentity.titleHighlight}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {uiText.brandIdentity.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {companyData.brandIdentity.features.map((feature, index) => {
                const Icon = iconMap[feature.icon] || ImageIcon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-white to-[#F5F1ED] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center"
                  >
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 产品价值 Section */}
      {companyData.productValue && (
        <section className="py-20 px-4 bg-gradient-to-b from-[#F5F1ED] to-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="stat-badge mb-4 inline-block">
                {uiText.productValue.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {uiText.productValue.title}
                <span className="text-primary"> {uiText.productValue.titleHighlight}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {uiText.productValue.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyData.productValue.dimensions.map((dimension, index) => {
                const Icon = iconMap[dimension.icon] || Star;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center"
                  >
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 bg-accent/10">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{dimension.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{dimension.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 场景与需求模块 Section */}
      {companyData.scenarioDemand && (
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="stat-badge mb-4 inline-block">
                场景与需求
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                场景与需求模块
                <span className="text-primary"> 内容的"燃料"</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {companyData.scenarioDemand.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {companyData.scenarioDemand.features.map((feature, index) => {
                const Icon = iconMap[feature.icon] || Zap;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-white to-[#F5F1ED] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 bg-secondary/10">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 灵魂与个性转译模块 Section */}
      {companyData.brandSoul && (
        <section className="py-20 px-4 bg-gradient-to-b from-[#F5F1ED] to-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="stat-badge mb-4 inline-block">
                品牌个性
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                灵魂与个性转译模块
                <span className="text-primary"> 内容的"神韵"</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {companyData.brandSoul.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {companyData.brandSoul.features.map((feature, index) => {
                const Icon = iconMap[feature.icon] || Heart;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 品牌叙事系统 Section */}
      {companyData.brandNarrative && (
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="stat-badge mb-4 inline-block">
                {uiText.brandNarrative.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {uiText.brandNarrative.title}
                <span className="text-primary"> {uiText.brandNarrative.titleHighlight}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {uiText.brandNarrative.subtitle}
              </p>
            </motion.div>

            <div className="space-y-8 max-w-5xl mx-auto">
              {companyData.brandNarrative.workflow.map((step, index) => {
                const Icon = iconMap[step.icon] || FileText;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-white to-[#F5F1ED] rounded-2xl p-8 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-primary/10 mr-6">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <span className="text-sm font-semibold text-primary mr-3">步骤 {step.step}</span>
                          <h3 className="text-2xl font-bold text-gray-900">{step.name}</h3>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <span className="text-xs font-semibold text-gray-500 block mb-2">输出内容:</span>
                            <ul className="space-y-1">
                              {step.output.map((item, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-center">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {step.templates && (
                            <div>
                              <span className="text-xs font-semibold text-gray-500 block mb-2">模板库:</span>
                              <ul className="space-y-1">
                                {step.templates.map((template, i) => (
                                  <li key={i} className="text-sm text-gray-600 flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>
                                    {template}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-200 bg-white">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {companyData.companyInfo.name}. {language === 'zh' ? '版权所有' : 'All rights reserved.'}
        </p>
        <p className="text-xs text-gray-400 mt-2">
          {companyData.companyInfo.focus}
        </p>
      </footer>
    </main>
  );
}
