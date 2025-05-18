import { useState } from 'react';
import { WipProject, Header, Content, Link, Tech } from './styles';

export const Wip = ({
  wip,
}: {
  wip: { title: string; description: string; link: string; tech: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <WipProject
      key={wip.title}
      onClick={() => {
        return setIsOpen((prev) => !prev);
      }}
      $isOpen={isOpen}
    >
      <Header>
        <p>{wip.title}</p>
        <p>{isOpen ? '-' : '+'}</p>
      </Header>

      <Content $isOpen={isOpen}>
        <p>{wip.description}</p>
        <Link
          href={wip.link}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          rel="noreferrer"
        >
          {wip.link}
        </Link>
        <Tech>{wip.tech}</Tech>
      </Content>
    </WipProject>
  );
};
