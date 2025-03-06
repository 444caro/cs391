import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header.tsx';
import Nav from './components/Nav.tsx';
import Footer from './components/Footer.tsx';

import Home from './components/Home.tsx';
import Projects from './components/Projects.tsx';
import Education from './components/Education.tsx';
import Experience from './components/Experience.tsx';
import Volunteer from './components/Volunteer.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';


const PageWrapper = styled.div`
    width: 95vw;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`
const ContainerLayout = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    position: relative;
    background-color: rgb(226, 200, 167);
`

function Root() {
  return (
    <PageWrapper>
      <Header />
      <ContainerLayout>
          <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
      </ContainerLayout>
      <Footer />
    </PageWrapper>

  );
}


const router = createBrowserRouter(
  [{path: "*", Component: Root}]
);

function App() {
  return (
    <>  
      <RouterProvider router={router}/>
    </>
  );
}
export default App