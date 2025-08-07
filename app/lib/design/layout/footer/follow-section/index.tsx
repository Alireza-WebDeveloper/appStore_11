import LinkContainer from '../../../common/link-container';
import Title from '../../../common/title';
import { FollowUsSectionProps } from './index.types';

const FollowUsSection: React.FC<FollowUsSectionProps> = ({
  title,
  socialLinks,
}) => (
  <div className="flex flex-col gap-4">
    <Title level={3} className="text-2xl font-semibold text-gray-100">
      {title}
    </Title>
    <div className="flex gap-6">
      {socialLinks.map((social, index) => (
        <LinkContainer
          key={index}
          href={social.url}
          className="text-gray-400 hover:text-teal-500 transition-all"
        >
          {social.icon}
        </LinkContainer>
      ))}
    </div>
  </div>
);

export default FollowUsSection;
