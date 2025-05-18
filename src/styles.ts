import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-around;
  padding: 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const WorkInProgress = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: scroll;
  gap: 18px;
  font-size: 0.9rem;
  margin-top: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
`;

export const ImageButton = styled.button<{ $expanded: boolean }>`
  width: ${(props) => (props.$expanded ? '12%' : '10%')};
  transition: width 0.3s ease-in-out;
  background-color: black;
  padding: 0;
  outline: none;
  border: none;
  cursor: ${(props) => (props.$expanded ? 'zoom-out' : 'zoom-in')};

  &::selection {
    background-color: transparent;
  }

  & > img {
    width: 100%;
    transition: width 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.$expanded ? '24%' : '22%')};
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Name = styled.p`
  margin: 8px 0;
`;

export const BodyText = styled.p`
  margin: 0;
  margin-bottom: 12px;
  font-size: 14px;
`;

export const WipProject = styled.div<{ $isOpen: boolean }>`
  width: 95%;

  border-bottom: 1px solid white;
  padding-bottom: 8px;

  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p {
    margin: 0;
  }
`;

export const Content = styled.div<{ $isOpen: boolean }>`
  box-sizing: border-box;
  transition: max-height 0.6s ease;
  max-height: ${(props) => (props.$isOpen ? '200px' : '0px')};
  justify-self: center;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
`;

export const Link = styled.a`
  text-decoration: underline;
  color: white;
  margin-bottom: 8px;
  cursor: pointer;
  display: inline;
`;

export const Tech = styled.p`
  margin: 8px 0;
  font-style: italic;
  font-size: 10px;
`;

export const Footer = styled.footer`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 8px;
  & > a {
    font-size: 12px;
  }
`;
