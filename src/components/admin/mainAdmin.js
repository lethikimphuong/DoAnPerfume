import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import AboutUsDetail from '../user/aboutUsDetail';
import News from '../user/news';
// class MainAdmin extends React.Component {
//   constructor(props) {
//     let history = useHistory();
//     if (props.userLogin.role === 1) {
//       history.push('/');
//     }
//   }

//   render() {
//     return (
//       <main>
//         <AboutUsDetail></AboutUsDetail>
//         <News></News>
//       </main>
//     )
//   }
// }
// // export default MainAdmin;
function MainAdmin(props) {
  let history = useHistory();
  if (props.userLogin.role === 1) {
    history.push('/');
  }
  return (
    <main>
      <AboutUsDetail></AboutUsDetail>
      <News></News>
    </main>
  )
}
const mapStateToProps = (state) => {
  return {
    userLogin: state.userLogin
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainAdmin);
