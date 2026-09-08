import React from 'react';
import styles from './ServicesSection.module.css';

// تعريف نوع البيانات
interface ServiceCard {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  icon: React.ReactNode;
  iconClass: string;
  accentClass: string;
  stat?: string;
  statLabel?: string;
}

const ServicesSection: React.FC = () => {
  // مصفوفة البيانات
const services: ServiceCard[] = [
  {
    id: 1,
    title: 'التحليل المكاني',
    subtitle: 'المتقدم والمحدد',
    description: 'تحول البيانات المكانية الخام إلى رؤى قابلة للتشغيل من خلال التحليل المتقدم والمنهجية التنبؤية.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    iconClass: styles.iconBlue,
    accentClass: styles.accentBlue,
  },
  {
    id: 2,
    title: 'تطوير تطبيقات كاي ونكامل المنصات',
    description: 'نقوم بتصميم وتطوير تطبيقات ومنصات جغرافية مخصصة لتكامل بسالسة مع الأنظمة الحالية.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path d="M8 2v20M16 2v20M2 8h20M2 16h20" />
      </svg>
    ),
    iconClass: styles.iconPurple,
    accentClass: styles.accentPurple,
  },
  {
    id: 3,
    title: 'الاستشارات وصناع التحليل',
    subtitle: 'الاستراتيجي للنظم المعلومات الجغرافية (GIS)',
    description: 'نساعد المؤسسات على التخطيط والتقييم وتنفيذ استراتيجيات GIS قفالة تنشئية مع أهدافها التشغيلية والاستراتيجية.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 21l-4.35-4.35" />
        <circle cx="9" cy="9" r="7" />
        <path d="M9 5v8M5 9h8" />
      </svg>
    ),
    iconClass: styles.iconAmber,
    accentClass: styles.accentAmber,
  },
  {
    id: 4,
    title: 'إدارة البيانات',
    subtitle: 'الجغرافية المكانية',
    description: 'نقدم دورة الحياة الكاملة للبيانات الجغرافية المكانية، مع ضمان الدقة، والانساق، والآمن، وجاهزيتها لتحليل واتخاذ القرارات.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    iconClass: styles.iconEmerald,
    accentClass: styles.accentEmerald,
  },
  {
    id: 5,
    title: 'حلول الاستشعار عن بُعد وصور الأقمار الصناعية',
    description: 'نعالج ونحلل صور الأقمار الصناعية والصور الجوية لمراقبة التغيرات المكانية وتقييمها وفهمها.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C13.5 3 15 3.5 16.2 4.5" />
        <circle cx="12" cy="12" r="3" />
        <path d="M21 3L12 12" />
      </svg>
    ),
    iconClass: styles.iconTeal,
    accentClass: styles.accentTeal,
  },
  {
    id: 6,
    title: 'حلول نظم المعلومات الجغرافية ثلاثية الأبعاد والتوأم الرقمي',
    description: 'نطوّر نماذج مكانية ثلاثية الأبعاد وتوائم رقمية متقدمة لدعم التخطيط الذكي وإدارة الأصول.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3L3 8L12 13L21 8L12 3Z" />
        <path d="M3 13L12 18L21 13" />
        <path d="M3 17L12 22L21 17" />
      </svg>
    ),
    iconClass: styles.iconPink,
    accentClass: styles.accentPink,
  },
  {
    id: 7,
    title: 'حلول التخطيط العمراني وإدارة الأراضي',
    description: 'ندعم التنمية الحضرية وإدارة الأراضي المعتمدة على البيانات باستخدام الذكاء الجغرافي المكاني.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="1" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <rect x="8" y="8" width="4" height="4" />
      </svg>
    ),
    iconClass: styles.iconOrange,
    accentClass: styles.accentOrange,
  },
  {
    id: 8,
    title: 'حلول GIS لقطاع الهندسة والعمارة والإنشاءات (AEC)',
    description: 'ندعم مشاريع الهندسة والإنشاءات من خلال حلول GIS متكاملة.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 20L20 4" />
        <path d="M4 4L20 20" />
        <rect x="8" y="8" width="8" height="8" />
      </svg>
    ),
    iconClass: styles.iconLime,
    accentClass: styles.accentLime,
  },
  {
    id: 9,
    title: 'حلول المسح والتخطيط باستخدام الطائرات بدون طيار',
    description: 'نوفّر خدمات مسح جوي ورسم خرائط عالية الدقة باستخدام تقنيات الدرون المتقدمة.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    iconClass: styles.iconSky,
    accentClass: styles.accentSky,
  },
  {
    id: 10,
    title: 'حلول المسح الليزري الأرضي ثلاثي الأبعاد',
    description: 'نقدّم عمليات مسح ثلاثية الأبعاد دقيقة لأغراض التوثيق والنمذجة وتطبيقات التوأم الرقمي.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="9" />
        <line x1="12" y1="15" x2="12" y2="22" />
        <line x1="2" y1="12" x2="9" y2="12" />
        <line x1="15" y1="12" x2="22" y2="12" />
      </svg>
    ),
    iconClass: styles.iconIndigo,
    accentClass: styles.accentIndigo,
  },
  {
    id: 11,
    title: 'حلول أنظمة المسح المتحرك (MMS)',
    description: 'نقدّم حلول مسح متحركة متطورة لجمع البيانات المكانية بدقة عالية أثناء الحركة لتطبيقات البنية التحتية والنقل.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19 9L22 9L22 15L19 15" />
        <path d="M5 15L2 15L2 9L5 9" />
        <rect x="7" y="4" width="10" height="16" rx="1" />
      </svg>
    ),
    iconClass: styles.iconRose,
    accentClass: styles.accentRose,
  },
  {
    id: 12,
    title: 'حلول الفوتوغرامتري (التصوير المساحي)',
    description: 'نوفّر بيانات مكانية تفصيلية من خلال الفوتوغرامتري الأرضي والجوي لإنتاج نماذج ثلاثية الأبعاد دقيقة.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="16" rx="2" />
        <circle cx="8" cy="10" r="2" />
        <circle cx="16" cy="10" r="2" />
        <path d="M2 18L8 14L12 16L18 12L22 15" />
        <path d="M22 18L18 12L12 16L8 14L2 18" />
      </svg>
    ),
    iconClass: styles.iconCyan,
    accentClass: styles.accentCyan,
  },
  {
    id: 13,
    title: 'الذكاء الجغرافي البيئي وGeoAI',
    description: 'نطبّق تقنيات الذكاء الاصطناعي على البيانات المكانية البيئية للحصول على تحليلات وتوقعات أكثر ذكاءً.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C9 2 6 4 6 8C6 12 12 18 12 18C12 18 18 12 18 8C18 4 15 2 12 2Z" />
        <circle cx="12" cy="8" r="2" />
        <path d="M4 12C4 16 8 20 12 20" />
        <path d="M20 12C20 16 16 20 12 20" />
      </svg>
    ),
    iconClass: styles.iconViolet,
    accentClass: styles.accentViolet,
  },
  {
    id: 14,
    title: 'حلول اضطرابات GPS وتحديد المواقع',
    description: 'نقدّم حلولًا متقدمة للتغلب على اضطرابات إشارات GPS في البيئات الصعبة مثل الأنفاق والمناطق الحضرية المزدحمة.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L12 7" />
        <path d="M12 17L12 22" />
        <path d="M2 12L7 12" />
        <path d="M17 12L22 12" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 12L19 5" />
        <path d="M12 12L5 19" />
        <path d="M12 12L19 19" />
        <path d="M12 12L5 5" />
      </svg>
    ),
    iconClass: styles.iconRed,
    accentClass: styles.accentRed,
  },
];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>خدماتنا</span>
          <h2 className={styles.title}>
            حلول <span className={styles.highlight}>جغرافية مكانية</span> متكاملة
          </h2>
          <p className={styles.subtitle}>
            نقدم مجموعة متكاملة من الخدمات المتخصصة لتلبية احتياجاتك في مجال نظم المعلومات الجغرافية
          </p>
        </div>

        {/* Grid - استخدام map لتوليد الكروت */}
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.iconWrapper}>
                  <div className={`${styles.icon} ${service.iconClass}`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                {service.subtitle && (
                  <span className={styles.cardSubtitle}>{service.subtitle}</span>
                )}
                <p className={styles.cardDesc}>{service.description}</p>
                
                
              </div>
              <div className={`${styles.accent} ${service.accentClass}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;