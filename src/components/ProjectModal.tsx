"use client";

import { memo, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'zh' | 'en';
}

export const ProjectModal = memo(({ isOpen, onClose, language }: ProjectModalProps) => {
  // 阻止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // ESC 键关闭
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const content = language === 'zh' ? {
    title: "品牌智能定位平台 | 用AI重新定义品牌价值",
    sections: [
      {
        title: "平台简介",
        content: "品牌智能定位平台是专为酒类品牌打造的AI驱动品牌战略系统。我们通过5个智能Agent工作流，将品牌定位、品牌识别、产品价值、品牌叙事等核心环节系统化、智能化，让品牌战略从经验驱动走向数据驱动。",
        content2: "平台采用多Agent协作架构，每个Agent专注于品牌战略的特定环节，通过结构化对话和智能分析，为品牌提供精准的定位建议、完整的品牌识别体系、清晰的产品价值主张，以及多模态的品牌叙事方案。"
      },
      {
        title: "我们解决什么问题？",
        content: "在品牌定位实践中，品牌方普遍面临以下痛点：",
        list: [
          "品牌定位高度依赖个人经验和主观判断，缺乏系统化方法论",
          "品牌识别、产品价值、品牌叙事分散在不同环节，难以形成统一体系",
          "缺乏数据支撑和竞品分析，定位策略可信度不足",
          "品牌叙事缺乏系统规划，内容创作效率低下",
          "品牌识别手册制作周期长，成本高，难以快速迭代"
        ],
        footer: "我们的目标，是让品牌定位从\"经验驱动\"走向\"理论驱动 + 数据驱动 + AI驱动\"。"
      },
      {
        title: "核心能力一览",
        items: [
          {
            title: "1️⃣ 品牌定位工作流（5个Agent）",
            content: [
              "市场分析Agent：分析目标市场、行业趋势、用户画像",
              "竞品分析Agent：深度分析竞品定位、优势劣势、市场表现",
              "定位策略Agent：基于STP理论和定位理论，输出精准定位策略",
              "定位验证Agent：验证定位策略的可行性和市场接受度",
              "定位输出Agent：整合所有分析结果，输出完整定位方案"
            ]
          },
          {
            title: "2️⃣ 品牌识别系统（一次性输出）",
            content: [
              "Logo设计指导：提供Logo设计方向、风格建议、应用规范",
              "色彩系统：定义主色、辅色、功能色，建立完整色彩体系",
              "字体规范：指定品牌字体、字号层级、排版规则",
              "视觉元素：图标系统、图形元素、摄影风格等视觉资产",
              "应用规范：品牌在不同场景下的应用指南和禁忌"
            ]
          },
          {
            title: "3️⃣ 产品价值定位",
            content: [
              "功能价值：产品解决的核心问题与功能优势",
              "情感价值：产品带来的情感体验与品牌联想",
              "社会价值：产品体现的社会意义与文化价值",
              "差异化价值：与竞品相比的独特优势与不可替代性"
            ]
          },
          {
            title: "4️⃣ 品牌叙事系统（两步走）",
            content: [
              "第一步：叙事计划生成 - 基于品牌定位和产品价值，生成完整的品牌叙事计划",
              "第二步：多模态脚本生成 - 调用优秀广告模板和社媒网红内容模板，生成多模态脚本",
              "第三步：专业工具对接 - 将生成的脚本对接专业设计工具和视频工具，输出成品"
            ]
          }
        ]
      }
    ]
  } : {
    title: "Brand AI Positioning Platform | Redefining Brand Value with AI",
    sections: [
      {
        title: "Platform Introduction",
        content: "Brand AI Positioning Platform is an AI-driven brand strategy system tailored for wine brands. Through 5 intelligent Agent workflows, we systematize and intelligently transform core aspects such as brand positioning, brand identity, product value, and brand narrative, moving brand strategy from experience-driven to data-driven.",
        content2: "The platform adopts a multi-Agent collaboration architecture, with each Agent focusing on specific aspects of brand strategy. Through structured dialogue and intelligent analysis, it provides brands with precise positioning recommendations, complete brand identity systems, clear product value propositions, and multimodal brand narrative solutions."
      },
      {
        title: "What Problems Do We Solve?",
        content: "In brand positioning practice, brands generally face the following pain points:",
        list: [
          "Brand positioning highly relies on personal experience and subjective judgment, lacking systematic methodology",
          "Brand identity, product value, and brand narrative are scattered across different aspects, making it difficult to form a unified system",
          "Lack of data support and competitor analysis, positioning strategy credibility is insufficient",
          "Brand narrative lacks systematic planning, content creation efficiency is low",
          "Brand identity manual production cycle is long, cost is high, difficult to iterate quickly"
        ],
        footer: "Our goal is to move brand positioning from \"experience-driven\" to \"theory-driven + data-driven + AI-driven\"."
      },
      {
        title: "Core Capabilities Overview",
        items: [
          {
            title: "1️⃣ Brand Positioning Workflow (5 Agents)",
            content: [
              "Market Analysis Agent: Analyze target market, industry trends, user personas",
              "Competitor Analysis Agent: Deeply analyze competitor positioning, strengths and weaknesses, market performance",
              "Positioning Strategy Agent: Based on STP theory and positioning theory, output precise positioning strategies",
              "Positioning Validation Agent: Validate positioning strategy feasibility and market acceptance",
              "Positioning Output Agent: Integrate all analysis results, output complete positioning plan"
            ]
          },
          {
            title: "2️⃣ Brand Identity System (Output at Once)",
            content: [
              "Logo Design Guidance: Provide Logo design direction, style recommendations, application standards",
              "Color System: Define primary, secondary, and functional colors to establish complete color system",
              "Typography Standards: Specify brand fonts, font size hierarchy, typography rules",
              "Visual Elements: Icon system, graphic elements, photography style and other visual assets",
              "Application Standards: Brand application guidelines and taboos in different scenarios"
            ]
          },
          {
            title: "3️⃣ Product Value Positioning",
            content: [
              "Functional Value: Core problems solved and functional advantages of the product",
              "Emotional Value: Emotional experiences and brand associations brought by the product",
              "Social Value: Social significance and cultural value reflected by the product",
              "Differentiation Value: Unique advantages and irreplaceability compared to competitors"
            ]
          },
          {
            title: "4️⃣ Brand Narrative System (Two-Step Approach)",
            content: [
              "Step 1: Narrative Plan Generation - Based on brand positioning and product value, generate complete brand narrative plan",
              "Step 2: Multimodal Script Generation - Call excellent advertising templates and social media influencer content templates to generate multimodal scripts",
              "Step 3: Professional Tool Integration - Connect generated scripts to professional design and video tools for final output"
            ]
          }
        ]
      }
    ]
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* 模态框 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 md:inset-8 lg:inset-[10%] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 头部 */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-white">
              <h2 className="text-xl font-semibold text-gray-900">{content.title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label={language === 'zh' ? '关闭' : 'Close'}
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* 内容区域 - 可滚动 */}
            <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6 md:py-8">
              <div className="space-y-8 max-w-3xl mx-auto">
                {content.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900">{section.title}</h3>
                    
                    {section.content && (
                      <p className="text-base text-gray-700 leading-relaxed">
                        {section.content}
                      </p>
                    )}
                    
                    {section.content2 && (
                      <p className="text-base text-gray-700 leading-relaxed">
                        {section.content2}
                      </p>
                    )}

                    {section.list && (
                      <ul className="space-y-2 list-disc list-inside text-base text-gray-700">
                        {section.list.map((item, i) => (
                          <li key={i} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.footer && (
                      <p className="text-base text-gray-700 leading-relaxed font-medium mt-4">
                        {section.footer}
                      </p>
                    )}

                    {section.items && (
                      <div className="space-y-6 mt-6">
                        {section.items.map((item, i) => (
                          <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                              {item.title}
                            </h4>
                            <ul className="space-y-2">
                              {item.content.map((point, j) => (
                                <li key={j} className="text-base text-gray-700 leading-relaxed flex items-start">
                                  <span className="text-gray-400 mr-2">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 底部按钮 */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
              >
                {language === 'zh' ? '关闭' : 'Close'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

ProjectModal.displayName = "ProjectModal";
