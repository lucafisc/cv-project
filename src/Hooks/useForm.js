import React, { useState } from "react";
export default function useForm(fields) {
  const [data, setData] = useState({});

  function handleUpdateField(e) {
    setData((prevState) => ({
      ...prevState,
      [fields]: e.target.value,
    }));
  }
  return { data, handleUpdateField };
}
