const NavBar = ({ unCompletedTodos, onChange,selectedOption}) => {
  return (
        <div className="navBar">
          <div>
          <h4>کارهای انجام نشده</h4><span>{unCompletedTodos}</span> 
          </div>
          <select onChange={onChange} value={selectedOption}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="UnCompleted">UnCompleted</option>
          </select>
        </div>
      );
    };
    
    export default NavBar;
    