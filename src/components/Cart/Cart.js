import React, { useState } from "react";

function Cart() {
  const [cartGameIds, setCardGameIds] = useState([2, 3]);
  return (
    <>
      <div>{cartGameIds.length}</div>
    </>
  );
}

export default Cart;
