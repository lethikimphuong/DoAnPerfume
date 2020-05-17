import React from 'react'; 
import AboutUs from '../user/aboutUs';
import NewProduct from '../user/newProduct';
import News from '../user/news';
  class MainContent extends React.Component {
    render() {
      return (
        <main>
          <AboutUs></AboutUs>
          <NewProduct></NewProduct>
          <News></News>
        </main>
      )
    }
  }
export default MainContent;
