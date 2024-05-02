import styled from 'styled-components';
import DesktopExperience from './desktop/desktop';
import MobileExperience from './mobile/mobile';

const Experience = () => {
  return (
    <Container id='experience'>
      <PageContainer>
        <DesktopExperience />
        <MobileExperience />
      </PageContainer>
    </Container>
  );
};
export default Experience;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  min-height: 60vh;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 849px) {
    padding: 0;
    padding-top: 1rem;
    overflow: auto;
  }
`;

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  height: 100%;
  max-height: calc(85 vh - 6rem);
  width: 100%;
  padding: 1rem 2rem;
  > p {
    margin-top: 1rem;
    text-align: center;
  }
`;
