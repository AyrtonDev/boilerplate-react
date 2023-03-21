import styled from 'styled-components';
import FormAddress from './components/form/FormAddress/FormAddress';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <FormAddress />
    </Container>
  );
};

export default App;
