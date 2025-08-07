import Title from '../../common/title';
import Text from '../../common/text';
import ContactSection from './contact-setion';
import UsefulLinksSection from './usefull-link-section';
import FollowUsSection from './follow-section';
import {
  FaceBookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterInIcon,
} from '../../common/icons';

const footerData = {
  contact: {
    title: 'تماس با ما',
    address: 'تهران، خیابان جمهوری، شماره ۱۰',
    phone: '۰۲۱-۱۲۳۴۵۶۷۸۹',
    email: 'support@example.com',
  },
  usefulLinks: {
    title: 'لینک‌های مفید',
    links: [
      { name: 'صفحه اصلی', url: '#' },
      { name: 'دسته‌بندی‌ها', url: '#' },
      { name: 'درباره ما', url: '#' },
      { name: 'سیاست‌های حفظ حریم خصوصی', url: '#' },
    ],
  },
  followUs: {
    title: 'ما را دنبال کنید',
    socialLinks: [
      {
        name: 'Facebook',
        icon: <FaceBookIcon width={24} height={24} />,
        url: '#',
      },
      {
        name: 'Instagram',
        icon: <InstagramIcon width={24} height={24} />,
        url: '#',
      },
      {
        name: 'Twitter',
        icon: <TwitterInIcon width={24} height={24} />,
        url: '#',
      },
      {
        name: 'LinkedIn',
        icon: <LinkedInIcon width={24} height={24} />,
        url: '#',
      },
    ],
  },
  aboutUs: {
    title: 'ما در خدمت شما هستیم',
    description: [
      'ما در تلاشیم تا بهترین محصولات را با کیفیت عالی و قیمت مناسب به شما ارائه دهیم.',
      'با ما در تماس باشید و از خرید آنلاین راحت و سریع لذت ببرید!',
    ],
  },
};

const AboutUsSection = () => (
  <div className="flex flex-col gap-4">
    <Title level={3} className="text-2xl font-semibold text-gray-100">
      {footerData.aboutUs.title}
    </Title>
    {footerData.aboutUs.description.map((desc, index) => (
      <Text key={index} className="text-sm text-gray-400">
        {desc}
      </Text>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <ContactSection data={footerData.contact} />
          <UsefulLinksSection
            title={footerData.usefulLinks.title}
            links={footerData.usefulLinks.links}
          />
          <FollowUsSection
            title={footerData.followUs.title}
            socialLinks={footerData.followUs.socialLinks}
          />
          <AboutUsSection />
        </div>
        <span className="border-t border-gray-600 my-6"></span>
        <div className="text-center text-sm text-gray-200"></div>
      </div>
    </footer>
  );
};

export default Footer;
