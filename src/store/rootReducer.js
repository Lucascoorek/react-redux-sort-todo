const initialState = {
  tasks: [
    {
      id: 1,
      content: "Przeczytać ksiązkę",
      active: true,
      date: "2019-02-16",
      finishDate: null,
      priority: true
    },
    {
      id: 2,
      content: "Kochać ludzi",
      active: true,
      date: "2019-02-14",
      finishDate: null,
      priority: false
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_NOTE":
      const newTasks = state.tasks.filter(task => task.id !== action.id);
      return {
        ...state,
        tasks: newTasks
      };
    case "CHANGE_ACTIVE":
      const newTasks2 = state.tasks.map(task => {
        if (task.id === action.id) {
          task.active = false;
          task.finishDate = action.date;
          return task;
        } else {
          return task;
        }
      });
      return {
        ...state,
        tasks: newTasks2
      };
    case "HANDLE_SUBMIT":
      const newTask = {
        id: state.tasks.length + 1,
        content: action.text,
        active: true,
        date: action.date,
        finishDate: null,
        priority: action.priority
      };
      const newTasks3 = [...state.tasks, newTask];
      return {
        ...state,
        tasks: newTasks3
      };
    default:
      return state;
  }
};
export default rootReducer;
