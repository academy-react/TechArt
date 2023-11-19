import React, { useState } from "react";

const CheckBox = () => {
    const checkValues = [
        { id: 1, label: 'React', checked: false },
        { id: 2, label: 'Asp.net', checked: false },
        { id: 3, label: 'Angular', checked: false },
      ];
    
      const [checkboxValues, setCheckboxValues] = useState(checkValues);
    
      const handleCheckboxChange = (changedId) => {
        const updatedCheckboxes = checkboxValues.map((checkbox) =>
          checkbox.id === changedId ? { ...checkbox, checked: !checkbox.checked } : checkbox
        );
        setCheckboxValues(updatedCheckboxes);
      };
  return (
    <div className="flex flex-col p-1">
    {checkboxValues.map((checkbox) => (
      <label key={checkbox.id} className="inline-flex items-center mt-3">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-indigo-600"
          checked={checkbox.checked}
          onChange={() => handleCheckboxChange(checkbox.id)}
        />
        <span className="ml-2">{checkbox.label}</span>
      </label>
    ))}
  </div>
  );
};

export { CheckBox };
