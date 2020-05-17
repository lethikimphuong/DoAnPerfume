import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

function ProductSearch(props) {
  const [keyword, setKeyword] = useState('');
  const handleChangeInput = (e) => {
    setKeyword(e.target.value);
  }
  const handleSearch = () => {
    props.onSearch(keyword);
  }

  return (
    <div className="search-wrap">
      <input
        className="inp-search"
        type="text"
        placeholder="Input product"
        value={keyword}
        onChange={handleChangeInput}
      />
      <button onClick={handleSearch}><i className="fa fa-search"></i></button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(actions.search(keyword));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch);
