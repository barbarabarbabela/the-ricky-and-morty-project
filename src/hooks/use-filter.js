import React from "react";

function useFilter() {
  const [selectedStatus, setSelectedStatus] = React.useState("");

  const handleRadioChange = (value) => {
    setSelectedStatus(value);
  };

  return { handleRadioChange, selectedStatus };
}

export default useFilter;
