import { Routes,Route } from 'react-router-dom';

//Components
import Layout from './components/layout';
import HomePage from './components/home/HomePage';
import BlogPage from './components/blog/BlogPage';
import AuthorPage from './components/authors/AuthorPage';
import ScrollToTop from './components/shared/ScrollToTop';


function App() {
  return (
    <>
      <Layout>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/blogs/:slug' element={<BlogPage/>}/>
          <Route path='/authors/:slug' element={<AuthorPage/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
