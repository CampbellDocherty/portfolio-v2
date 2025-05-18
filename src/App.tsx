import { useState } from 'react';
import now from './assets/now.png';
import then from './assets/then.png';
import {
  About,
  ImageButton,
  ImageContainer,
  Name,
  BodyText,
  WorkInProgress,
  Wrapper,
  Footer,
  Link,
  SocialLinks,
} from './styles';
import { Wip } from './Wip';
import { wips } from './wips';

const App = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <Wrapper>
      <About>
        <div>
          <Name>Campbell Docherty</Name>
          <BodyText>
            Software engineer, technologist + (sometime) photographer!
          </BodyText>
        </div>
        <ImageContainer>
          <ImageButton
            $expanded={expanded === then}
            onClick={() => {
              return setExpanded((prev) => (prev === then ? null : then));
            }}
          >
            <img src={then} title="Then" alt="Cammy as a baby hehe" />
          </ImageButton>
          <ImageButton
            $expanded={expanded === now}
            onClick={() => {
              return setExpanded((prev) => (prev === now ? null : now));
            }}
          >
            <img src={now} title="Now" alt="Cammy now!" />
          </ImageButton>
        </ImageContainer>
      </About>
      <WorkInProgress>
        {wips.map((wip) => {
          return <Wip key={wip.id} wip={wip} />;
        })}
      </WorkInProgress>
      <Footer>
        <SocialLinks>
          <Link
            href="https://www.instagram.com/nowicanpostmyownpics/"
            target="_blank"
            rel="noreferrer"
          >
            Insta
          </Link>
          <Link
            href="https://github.com/campbellDocherty"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </SocialLinks>
      </Footer>
    </Wrapper>
  );
};

export default App;
