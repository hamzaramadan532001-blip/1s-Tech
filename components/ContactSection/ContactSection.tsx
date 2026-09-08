// import React from "react";
// import styles from "./ContactSection.module.css";
// import { Cairo } from "next/font/google";

// const cairo = Cairo({
//   subsets: ["arabic", "latin"],
//   weight: ["300", "400", "600", "700", "800"],
// });

// const ContactSection: React.FC = () => {
//   const contactInfo = [
//     {
//       id: 1,
//       label: "الهاتف",
//       value: "+966540007344",
//       href: "tel:+966540007344",
//       icon: (
//         <svg
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//         >
//           <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       label: "البريد الإلكتروني",
//       value: "info@1stech.sa",
//       href: "mailto:info@1stech.sa",
//       icon: (
//         <svg
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//         >
//           <rect x="2" y="2" width="20" height="20" rx="2" />
//           <path d="M2 6l10 7 10-7" />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       label: "العنوان",
//       value: "الرياض، المملكة العربية السعودية",
//       href: "#",
//       icon: (
//         <svg
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//         >
//           <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//           <circle cx="12" cy="10" r="3" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <section className={`${styles.section} ${cairo.className}`}>
//       <div className={styles.container}>
//         {/* Background Decorations */}
//         <div className={styles.decoration1} />
//         <div className={styles.decoration2} />
//         <div className={styles.decoration3} />

//         <div className={styles.header}>
//           <span className={styles.badge}>تواصل معنا</span>
//           <h2 className={styles.title}>
//             كن على <span className={styles.highlight}>تواصل</span> معنا
//           </h2>
//           <p className={styles.subtitle}>
//             نحن هنا للإجابة على جميع استفساراتكم، تواصلوا معنا عبر إحدى القنوات
//             التالية
//           </p>
//         </div>

//         <div className={styles.grid}>
//           {contactInfo.map((item, index) => (
//             <a
//               key={item.id}
//               href={item.href}
//               className={`${styles.card} ${styles[`card${index + 1}`]}`}
//             >
//               <div className={styles.cardContent}>
//                 <div className={styles.iconWrapper}>
//                   <div className={styles.icon}>{item.icon}</div>
//                 </div>
//                 <h3 className={styles.cardLabel}>{item.label}</h3>
//                 <p className={styles.cardValue}>{item.value}</p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;


import React from "react";
import styles from "./ContactSection.module.css";
import { Cairo } from "next/font/google";
import Image from "next/image";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      id: 1,
      label: "الهاتف",
      value: "+966540007344",
      href: "tel:+966540007344",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: 2,
      label: "البريد الإلكتروني",
      value: "info@1stech.sa",
      href: "mailto:info@1stech.sa",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <path d="M2 6l10 7 10-7" />
        </svg>
      ),
    },
    {
      id: 3,
      label: "العنوان",
      value: "الرياض، المملكة العربية السعودية",
      href: "#",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section className={`${styles.section} ${cairo.className}`}>
      <div className={styles.container}>
        {/* Background Decorations */}
        <div className={styles.decoration1} />
        <div className={styles.decoration2} />
        <div className={styles.decoration3} />

        <div className={styles.header}>
          <span className={styles.badge}>تواصل معنا</span>
          <h2 className={styles.title}>
            كن على <span className={styles.highlight}>تواصل</span> معنا
          </h2>
          <p className={styles.subtitle}>
            نحن هنا للإجابة على جميع استفساراتكم، تواصلوا معنا عبر إحدى القنوات
            التالية
          </p>
        </div>

        {/* Content with Image and Cards */}
        <div className={styles.contentWrapper}>
            <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/TrustedPartner.jpg"
                alt="تواصل معنا"
                width={500}
                height={400}
                className={styles.image}
                priority
              />
              <div className={styles.imageGlow} />
            </div>
          </div>
          
          {/* Cards Section - Left Side */}
          <div className={styles.cardsSection}>
            {contactInfo.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                className={`${styles.card} ${styles[`card${index + 1}`]}`}
              >
                <div className={styles.cardContent}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.icon}>{item.icon}</div>
                  </div>
                  <div className={styles.cardText}>
                    <h3 className={styles.cardLabel}>{item.label}</h3>
                    <p className={styles.cardValue}>{item.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;