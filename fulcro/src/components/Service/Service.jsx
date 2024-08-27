import React, { useEffect, useState } from 'react';
import expertiseImg from "../../assets/images/our-expertise.webp";
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const TitleWithSubtitles = ({ title, subtitles, titleLink, subtitleLinks }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className="mb-8 w-full pl-40 ">
      <a href={titleLink} className={`text-4xl text-blue-900 font-bold ${inView ? 'animate__animated animate__fadeInUp' : ''}`}>
        {title}
      </a>
      {inView && (
        <ul className="mt-2 animate__animated animate__fadeIn">
          {subtitles.map((subtitle, index) => (
            <li key={index} className={`text-xl my-5 ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}>
              <a href={subtitleLinks[index]}>
                {subtitle}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Service = () => {
  const services = [
    {
      title: "Digital Strategy & Consulting",
      titleLink: "#digital-strategy",
      subtitles: ["Digital Transformation", "CX Strategy", "Content Strategy"],
      subtitleLinks: ["#digital-transformation", "#cx-strategy", "#content-strategy"]
    },
    {
      title: "Experience Design",
      titleLink: "#experience-design",
      subtitles: ["UX/UI Design", "Design Systems", "Prototyping"],
      subtitleLinks: ["#ux-ui-design", "#design-systems", "#prototyping"]
    },
    {
      title: "Technology & Engineering",
      titleLink: "#technology-engineering",
      subtitles: ["Web Development", "App Development", "DevOps"],
      subtitleLinks: ["#web-development", "#app-development", "#devops"]
    },
    {
      title: "Digital Marketing",
      titleLink: "#digital-marketing",
      subtitles: ["SEO", "Social Media Marketing", "Email Campaigns"],
      subtitleLinks: ["#seo", "#social-media-marketing", "#email-campaigns"]
    },
    {
      title: "AI/ML & Emerging Tech",
      titleLink: "#ai-ml-emerging-tech",
      subtitles: ["Machine Learning", "Data Analytics", "AR/VR Solutions"],
      subtitleLinks: ["#machine-learning", "#data-analytics", "#ar-vr-solutions"]
    },
  ];

  return (
    <div className="min-h-screen sticky top-0 flex flex-col lg:flex-row " id="service-section">
      <div className='lg:w-1/2 w-full px-8 py-16 h-[100vh] lg:flex-col ms-20 my-auto  flex overflow-auto hide-scrollbar'>
        {services.map((service, index) => (
          <div key={index} className={`w-full min-h-96 animate__fadeInUp`}>
              <TitleWithSubtitles
                title={service.title}
                titleLink={service.titleLink}
                subtitles={service.subtitles}
                subtitleLinks={service.subtitleLinks}
              />
              </div>

        ))}
      </div>

      <div className="hidden lg:flex lg:w-1/2">
        <div className={`h-screen flex absolute' right-0 top-0 items-center justify-center`}>
          <img src={expertiseImg} alt="Consulting" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Service;
