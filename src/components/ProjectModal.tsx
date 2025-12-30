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
    title: "数艺时空（成都）文化科技有限公司",
    sections: [
      {
        title: "公司简介",
        content: "数艺时空（成都）文化科技有限公司专注于裸眼全息显示技术的研发与应用。我们致力于通过创新的全息技术，让每个人都能拥有第一台全息设备，无需穿戴任何设备即可享受沉浸式3D全息体验，推动元宇宙产业的发展。",
        content2: "G-Box是我们推出的全球最大的全息数字消费平台，采用柱状透镜和立体显示技术，结合AI算法计算图像的空间深度，实现真正的裸眼3D全息影像。G-Box更符合自然的观影体验，将重新定义人与机器的交互方式。"
      },
      {
        title: "我们的使命与愿景",
        content: "使命：通过裸眼全息技术，让每个人都能拥有第一台全息设备，无需穿戴任何设备即可享受沉浸式3D全息体验，推动元宇宙产业的发展。",
        content2: "愿景：成为全球领先的全息数字消费平台，用技术创新打破传统全息技术的限制，让全息体验走进千家万户。",
        list: [
          "技术创新与用户体验并重",
          "硬件与软件深度融合",
          "内容生态与平台建设并重",
          "2B与2C双轮驱动"
        ]
      },
      {
        title: "核心技术优势",
        items: [
          {
            title: "1️⃣ 裸眼全息技术",
            content: [
              "采用柱状透镜和立体显示技术，用户无需穿戴任何设备",
              "利用柱状透镜折射原理，实现显示器影像扩张，观看者沉浸感大大增强",
              "60度超广角可视范围，更符合自然的观影体验",
              "49个视点，远超手机的1个视点和VR的2个视点"
            ]
          },
          {
            title: "2️⃣ AI智能学习",
            content: [
              "通过AI算法计算图像的空间深度",
              "使用先进的神经网络模型，由数十个深度模型与图像数据库交叉训练而成",
              "可以应对多种类来源的上传图像而计算出深度，生成多视角图像",
              "支持自动转3D功能，面片、拍照自动转换为3D全息影像"
            ]
          },
          {
            title: "3️⃣ 产品优势",
            content: [
              "小巧便携：尺寸仅5.7英寸 x 7.4英寸 x 1.6英寸，重量仅660g",
              "高分辨率：1536px x 2048px，清晰细腻",
              "智能控制：APP远程控制，方便用户操作和管理内容",
              "高精度模型：支持高精度Unity模型，确保内容质量"
            ]
          },
          {
            title: "4️⃣ 应用场景",
            content: [
              "2B模式：全息广告机、样品展示、特定场景如婚纱摄影、企业logo展示等",
              "2C模式：数字手办集成、全息相册等个人消费场景",
              "数字IP：与知名IP合作，推出联名款数字手办，如《斗破苍穹》联名款",
              "资产流转：通过G-App和G-Box实现数字资产的流转和交易"
            ]
          }
        ]
      },
      {
        title: "市场前景",
        content: "全息投影技术得益于国家政策支持、技术迭代加速、投资规模扩大等因素，中国全息影像行业发展突飞猛进。中国全息投影行业市场规模2021年预计98亿，2022年预计将破百亿元，预计未来五年将维持在9.0%的年均复合增长率，2026年整体全息投影市场规模接近150亿元。",
        content2: "G-Box作为消费级全息产品，解决了传统全息技术无消费类产品、成本高昂、体验效果差强人意等痛点，为全息技术的大众化应用开辟了新的道路。"
      }
    ]
  } : {
    title: "Shu Yi Shi Kong (Chengdu) Culture Technology Co., Ltd.",
    sections: [
      {
        title: "Company Introduction",
        content: "Shu Yi Shi Kong (Chengdu) Culture Technology Co., Ltd. focuses on the research and application of naked-eye holographic display technology. We are committed to enabling everyone to own their first holographic device through innovative holographic technology, enjoying immersive 3D holographic experiences without wearing any equipment, and promoting the development of the metaverse industry.",
        content2: "G-Box is our world's largest holographic digital consumption platform, using lenticular lens and stereoscopic display technology, combined with AI algorithms to calculate image spatial depth, achieving true naked-eye 3D holographic imaging. G-Box provides a more natural viewing experience and will redefine the way humans interact with machines."
      },
      {
        title: "Our Mission and Vision",
        content: "Mission: Through naked-eye holographic technology, enable everyone to own their first holographic device, enjoy immersive 3D holographic experiences without wearing any equipment, and promote the development of the metaverse industry.",
        content2: "Vision: To become the world's leading holographic digital consumption platform, using technological innovation to break the limitations of traditional holographic technology and bring holographic experiences into every household.",
        list: [
          "Equal emphasis on technological innovation and user experience",
          "Deep integration of hardware and software",
          "Equal emphasis on content ecosystem and platform construction",
          "Dual drive of 2B and 2C"
        ]
      },
      {
        title: "Core Technology Advantages",
        items: [
          {
            title: "1️⃣ Naked-Eye Holographic Technology",
            content: [
              "Using lenticular lens and stereoscopic display technology, users don't need to wear any equipment",
              "Utilizing the refraction principle of lenticular lenses to achieve expanded display images, greatly enhancing viewer immersion",
              "60-degree ultra-wide viewing angle, more natural viewing experience",
              "49 viewpoints, far exceeding the 1 viewpoint of mobile phones and 2 viewpoints of VR"
            ]
          },
          {
            title: "2️⃣ AI Intelligent Learning",
            content: [
              "Calculate image spatial depth through AI algorithms",
              "Using advanced neural network models trained by dozens of depth models and image databases",
              "Capable of handling various types of uploaded images to calculate depth and generate multi-view images",
              "Supports automatic 3D conversion, converting images and photos to 3D holographic images"
            ]
          },
          {
            title: "3️⃣ Product Advantages",
            content: [
              "Compact and portable: Dimensions only 5.7\" x 7.4\" x 1.6\", weight only 660g",
              "High resolution: 1536px x 2048px, clear and detailed",
              "Intelligent control: APP remote control for convenient user operation and content management",
              "High-precision models: Supports high-precision Unity models, ensuring content quality"
            ]
          },
          {
            title: "4️⃣ Application Scenarios",
            content: [
              "2B Mode: Holographic advertising machines, sample displays, specific scenarios such as wedding photography, corporate logo displays, etc.",
              "2C Mode: Digital figure integration, holographic albums and other personal consumption scenarios",
              "Digital IP: Cooperate with well-known IPs to launch limited edition digital figures, such as \"Battle Through the Heavens\" limited edition",
              "Asset Transfer: Realize digital asset transfer and trading through G-App and G-Box"
            ]
          }
        ]
      },
      {
        title: "Market Prospects",
        content: "Holographic projection technology benefits from national policy support, accelerated technology iteration, and expanded investment scale. China's holographic imaging industry has developed rapidly. China's holographic projection industry market size is expected to be 9.8 billion yuan in 2021, expected to exceed 10 billion yuan in 2022, and is expected to maintain an average annual compound growth rate of 9.0% in the next five years. By 2026, the overall holographic projection market size will approach 15 billion yuan.",
        content2: "As a consumer-grade holographic product, G-Box solves the pain points of traditional holographic technology such as no consumer products, high costs, and unsatisfactory experience effects, opening up new paths for the popularization of holographic technology."
      }
    ]
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 - 玻璃质感 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-blue-950/60 backdrop-blur-md z-50"
          />

          {/* 模态框 - 玻璃质感设计 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 md:inset-8 lg:inset-[10%] bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-950/40 backdrop-blur-xl rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden max-w-4xl mx-auto border border-cyan-400/20 glass-effect"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 头部 - 玻璃质感 */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-cyan-400/20 bg-blue-900/20 backdrop-blur-md">
              <h2 className="text-xl font-semibold text-blue-100 glow-text">{content.title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-cyan-500/20 rounded-full transition-colors text-cyan-300 hover:text-cyan-200"
                aria-label={language === 'zh' ? '关闭' : 'Close'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 内容区域 - 可滚动 */}
            <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6 md:py-8">
              <div className="space-y-8 max-w-3xl mx-auto">
                {content.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-2xl font-semibold text-cyan-300 glow-text">{section.title}</h3>
                    
                    {section.content && (
                      <p className="text-base text-blue-100/90 leading-relaxed">
                        {section.content}
                      </p>
                    )}
                    
                    {section.content2 && (
                      <p className="text-base text-blue-100/90 leading-relaxed">
                        {section.content2}
                      </p>
                    )}

                    {section.list && (
                      <ul className="space-y-2 list-disc list-inside text-base text-blue-100/90">
                        {section.list.map((item, i) => (
                          <li key={i} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.items && (
                      <div className="space-y-6 mt-6">
                        {section.items.map((item, i) => (
                          <div key={i} className="bg-blue-900/30 backdrop-blur-md rounded-xl p-5 border border-cyan-400/20 glass-card">
                            <h4 className="text-lg font-semibold text-cyan-300 mb-3 glow-text">
                              {item.title}
                            </h4>
                            <ul className="space-y-2">
                              {item.content.map((point, j) => (
                                <li key={j} className="text-base text-blue-100/80 leading-relaxed flex items-start">
                                  <span className="text-cyan-400 mr-2">•</span>
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
            <div className="px-6 py-4 border-t border-cyan-400/20 bg-blue-900/20 backdrop-blur-md">
              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-cyan-500/50 glow-button"
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
