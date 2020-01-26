import React, { useState } from "react";

function Cart() {
  const [cartGameIds, setCardGameIds] = useState([2, 3]);
  return <span>{cartGameIds.length}</span>;
}

export default Cart;
