import LinkContainer from '../../../common/link-container';
import Title from '../../../common/title';

const UsefulLinksSection: React.FC<UsefulLinksSectionProps> = ({
  title,
  links,
}) => (
  <div className="flex flex-col gap-4">
    <Title level={3} className="text-2xl font-semibold text-gray-100">
      {title}
    </Title>
    <ul className="text-sm text-gray-400 space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <LinkContainer
            href={link.url}
            className="hover:text-teal-500 transition-all"
          >
            {link.name}
          </LinkContainer>
        </li>
      ))}
    </ul>
  </div>
);

export default UsefulLinksSection;
