import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "UnCompleted", label: "UnCompleted" },
];

const NavBar = ({ unCompletedTodos, onChange, selectedOption }) => {
  const customStyles = {
    control: (styles) => ({
      ...styles,
      width: "170px",
      backgroundColor: "#F0ABFC",
      border: "solid 1px #701A75",
      cursor:"pointer",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "#701A75",
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: "#F0ABFC",
    }),

    option: (styles, { data, isDisabled, isFocused}) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "#701A75" : "#F0ABFC",
        backgroundColor: isFocused ? "#701A75" : "#F0ABFC",
        color: isFocused ? "#F0ABFC" : "#701A75",
      };
    },
  };
  return (
    <div className="navBar">
      <div className="unCompletedTodos">
        <h4>کارهای انجام نشده</h4>
        <span>{unCompletedTodos}</span>
      </div>
      <Select
        value={selectedOption}
        onChange={onChange}
        options={options}
        styles={customStyles}
      />
    </div>
  );
};

export default NavBar;
