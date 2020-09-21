import React from "react";
import { useRouter } from "next/router";

function ProductItem() {
  const router = useRouter();

  return (
    <div>
      <p>Esta es la página de prueba del producto {router.query.id}</p>
    </div>
  );
}

export default ProductItem;