import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { useHistory } from 'react-router-dom';

function SearchProduct(props) {
  let history = useHistory();
  const [keyword, setKeyword] = useState('');
  const handleChangeInput = (e) =>{
    setKeyword(e.target.value);
  }
  const handleSearch = () => {
    props.onSearch(keyword);
    history.push('/listSearchProduct');
  }
  const handleSearchh = (event) => {
    if (event.key === 'Enter') {
    props.onSearch(keyword);
    history.push('/listSearchProduct');
    }
  }
  return (
    <div className="nav-right">
      <div className="search-wrap">
        <input
          className="inp-search"
          type="text"
          placeholder="Input product" value={keyword} onChange={handleChangeInput } onKeyPress={handleSearchh}
        />
        <button onClick={handleSearch}><i className="fa fa-search"></i></button>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(actions.search(keyword));
    },
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(SearchProduct);
