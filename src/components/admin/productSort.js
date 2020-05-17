import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

function ProductSort(props) {
  const handleSort = (sortBy, sortValue) => {
    props.onSort({
      by: sortBy,
      value: sortValue
    });
  }
  return (
    <li className="dropdown">
      <span>Sort By</span>
      <i className="fa fa-caret-up"></i>
      <ul className="dropdown-list">
        <li className="dropdown-item" onClick={() => handleSort('name', 1)}>
          <button className={(props.sortProduct.by === 'name' && props.sortProduct.value === 1) ? 'dropdown-item-btn dropdown-item-btn-select' : 'dropdown-item-btn'}>Sort By Name: A-Z</button>
        </li>
        <li className="dropdown-item" onClick={() => handleSort('quantity', 1)}>
          <button className={(props.sortProduct.by === 'quantity' && props.sortProduct.value === 1) ? 'dropdown-item-btn dropdown-item-btn-select' : 'dropdown-item-btn'}>Sort By Quantity</button>
        </li>
        <li className="dropdown-item" onClick={() => handleSort('brand', 1)}>
          <button className={(props.sortProduct.by === 'brand' && props.sortProduct.value === 1) ? 'dropdown-item-btn dropdown-item-btn-select' : 'dropdown-item-btn'}>Sort By Brand Product</button>
        </li>
        <li className="dropdown-item" onClick={() => handleSort('day', 1)}>
          <button className={(props.sortProduct.by === 'day' && props.sortProduct.value === 1) ? 'dropdown-item-btn dropdown-item-btn-select' : 'dropdown-item-btn'}>Sort By Day</button>
        </li>
      </ul>
    </li>
  );
}
const mapStateToProps = (state) => {
  return {
    sortProduct: state.sort
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: (sort) => { //sort.by sort.value
      dispatch(actions.sortProduct(sort));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSort);
