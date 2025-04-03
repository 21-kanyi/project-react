function InputField({ value, onChange }) {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter an item"
      />
    );
  }
  
  export default InputField;