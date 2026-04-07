import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import TextCounter from "./components/TextCounter";
import Counter from "./components/Counter";

function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
  `;

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <div className="flex flex-col items-center">
      <Header user="John" />
      <p>Hello World</p>
      {/* <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper> */}
      {/* <TextCounter text="Random Text" /> */}
      <Counter />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
