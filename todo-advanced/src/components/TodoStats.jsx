const Todostats = ({totalCount,completedTodos,remainingTodos}) => {
  return (
    <>
      <div className="count">
        <h4>Total : {totalCount}</h4>
        <h4>Completed Todos : {completedTodos}</h4>
        <h4>Remaining Todos : {remainingTodos}</h4>
      </div>
    </>
  );
};

export default Todostats;
