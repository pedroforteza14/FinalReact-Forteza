import React from 'react'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';

const CartWidget = ({ cartQuantity }) => {
  return (
    <Link to="/cart" style={{ textDecoration: 'none', color: '#fff' }}>
      <Badge badgeContent={cartQuantity} color="error">
        <ShoppingCartIcon />
      </Badge>
    </Link>
  )
}

export default CartWidget;