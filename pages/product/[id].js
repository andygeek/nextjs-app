import React from "react";
import { useRouter } from "next/router";

function ProductItem() {
  const router = useRouter();

  // Destructuring object
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <p>Esta es la página de prueba del producto {id}</p>
    </div>
  );
}

export default ProductItem;
