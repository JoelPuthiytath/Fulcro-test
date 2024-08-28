import { useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import expertiseImg from '../../assets/images/our-expertise.webp';
import AiIcon from '../../assets/images/ai-ml-and-emerging-tech.webp';
import MarketingIcon from '../../assets/images/digital-marketing.webp';
import StrategyAndConsultingIcon from '../../assets/images/digital-strategy-and-consulting.webp';
import ExperienceDesignIcon from '../../assets/images/experience-design.webp';
import TechAndEngineeringIcon from '../../assets/images/technology-and-engineering.webp';
import Lenis from '@studio-freight/lenis';

const TitleWithSubtitles = ({ title, subtitles, subtitleLinks, icon }) => {
  return (
    <div className="p-5">
      <span
        className="text-2xl legacy:text-3xl xl:text-4xl 2xl:text-4xl lg:mb-6 mb-3 w-full capitalize leading-normal font-extrabold text-[#001B94] border-0 border-[#D9D9D9] font-poppins"
      >
        {title}
      </span>

      <ul className="mt-2">
        {subtitles.map((subtitle, index) => (
          <motion.li
            key={index}
            className="font-[500] leading-[36px] legacy:leading-[28px] 2xl:leading-[36px] capitalize service-list-item 2xl:text-[20px] text-[16px] legacy:text-[18px] xl:mb-4 lg:mb-2 "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{
              delay: index * 0.2,
              duration: 0.3,
              ease: 'easeOut'
            }}
          >
            <a href={subtitleLinks[index]}>{subtitle}</a>
          </motion.li>
        ))}
      </ul>

      <motion.img
        src={icon}
        alt={title}
        className="block lg:hidden max-w-full mt-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
    </div>
  );
};



const Service = () => {

    const controls = useAnimation();


    useEffect(() => {
        const lenis = new Lenis({
          duration: 1.2,
          easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

          direction: 'vertical',
          smooth: true,
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
      }, []);


  const services = [
    {
      title: 'Digital Strategy & Consulting',
      titleLink: '#digital-strategy',
      subtitles: ['Digital Transformation', 'CX Strategy', 'Content Strategy'],
      subtitleLinks: ['#digital-transformation', '#cx-strategy', '#content-strategy'],
      icon: StrategyAndConsultingIcon,
    },
    {
      title: 'Experience Design',
      titleLink: '#experience-design',
      subtitles: ['UX Consultancy', 'Design Systems', 'UI/UX Design'],
      subtitleLinks: ['#ux-consultancy', '#design-systems', '#ui/ux-desing'],
      icon: ExperienceDesignIcon,
    },
    {
      title: 'Technology & Engineering',
      titleLink: '#technology-engineering',
      subtitles: ['Web Development', 'CMS Solutions', 'Commerce','Mobile Apps', 'Cloud & DevSecOps'],
      subtitleLinks: ['#web-development', '#cms-solutions', '#commerce','#mobile-apps','#cloud-devsecops'],
      icon: TechAndEngineeringIcon,
    },
    {
      title: 'Digital Marketing',
      titleLink: '#digital-marketing',
      subtitles: ['Brand Digital Strategy','Campaign communication','Digital Filims & Shorts', 'Social Media Management', 'Content Marketing'],
      subtitleLinks: ['#digital-strategy', '#campaign', '#digital-filims','#social-media-marketing','#content-marketing'],
      icon: MarketingIcon,
    },
    {
      title: 'AI/ML & Emerging Tech',
      titleLink: '#ai-ml-emerging-tech',
      subtitles: ['AI/ML Solutions','Immersive Technologies: AR, VR & MR'],
      subtitleLinks: ['#ai-ml-solutions', '#ar-vr-technologies'],
      icon: AiIcon,
    },
  ];



  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newHeight = Math.max(10, 100 - scrollY / 100);
    controls.start({ height: `${newHeight}vh` });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<div className="container mx-auto flex min-h-screen scroll-smooth lg:flex-row flex-col">
  {/* Left Side */}
  <div className="left lg:w-1/2 w-full h-full px-8 py-16 lg:py-0">
    <div className="my-36 p-10">
      <span className="text-2xl mb-20 block font-bold uppercase">Our Services</span>

      {services.map((service, index) => (
        <motion.div key={index} className="my-5" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.3 }}>
          <a className="text-2xl legacy:text-3xl xl:text-4xl 2xl:text-4xl lg:mb-6 mb-3 w-full capitalize leading-normal font-extrabold text-[#001B94] border-0 border-[#D9D9D9] font-poppins" href={service.titleLink}>{service.title}</a>
        </motion.div>
      ))}

    </div>

    {services.map((service, index) => (
      <div key={index} className="relative">
        <div
          className="sticky top-64 my-10 md:my-4"
        >
          <TitleWithSubtitles
            title={service.title}
            titleLink={service.titleLink}
            subtitles={service.subtitles}
            subtitleLinks={service.subtitleLinks}
            icon={service.icon}
          />
        </div>
        <motion.div
          className="pin-spacer bg-transparent hidden md:block"
          initial={{ height: '80vh', opacity: 1 }}
          animate={controls}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        ></motion.div>
      </div>
    ))}
  </div>

  {/* Right Side */}

  <div className="right lg:w-1/2 w-full sticky top-10 min-h-full lagacy:flex items-start justify-center lg:py-16 hidden lg:flex">
    <img src={expertiseImg} alt="Consulting" className="max-w-full h-auto sticky top-10" />
  </div>
</div>

  );
};

export default Service;
