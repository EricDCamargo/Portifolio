import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { colors } from '@src/shared/themes/colors';
import { projectsData } from '@src/shared/helpers/projectData';
import { TechButton } from '@src/shared/components/techButton/TechButton';

const Project = () => {
  const { t } = useTranslation();

  return (
    <Section id='project'>
      <Header>
        <Title>{t('home:project')}</Title>
        <Subtitle>{t('home:projectsIntro')}</Subtitle>
      </Header>
      <Grid>
        {projectsData.map((project) => (
          <Card key={project.id}>
            <ImageContainer href={project.liveUrl || project.repoUrl} target='_blank'>
              <img src={project.image} alt={t(project.title)} />
            </ImageContainer>
            <Content>
              <h3>{t(project.title)}</h3>
              <p>{t(project.description)}</p>
              <TechList>
                {project.techs.map((tech, idx) => (
                  <TechButton name={tech} key={idx} style={{ background: colors.black }} />
                ))}
              </TechList>
              <Links>
                {project.repoUrl && (
                  <a href={project.repoUrl} target='_blank' aria-label='GitHub repository'>
                    <FiGithub />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target='_blank' aria-label='Live demo'>
                    <FiExternalLink />
                  </a>
                )}
              </Links>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Project;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${colors.pink};
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${colors.gray};
  max-width: 600px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Card = styled.div`
  background-color: ${colors.softBlack};
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(255, 0, 79, 0.2);
  }
`;

const ImageContainer = styled.a`
  display: block;
  overflow: hidden;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h3 {
    font-size: 1.5rem;
    color: ${colors.white};
    margin-bottom: 0.75rem;
  }

  p {
    color: ${colors.gray};
    line-height: 1.6;
    flex-grow: 1;
    margin-bottom: 1.5rem;
  }
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;

  a {
    color: ${colors.gray};
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.pink};
    }
  }
`;
