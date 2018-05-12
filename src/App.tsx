import * as React from "react";
import styles from "./App.scss";
// import MyClass from "./components/MyClass";
// import MyComp from "./components/MyComp";

interface IState {
  currentTask: string;
  tasks: ITask[];
}

interface ITask {
  id: number;
  value: string;
  completed: boolean;
}

class App extends React.Component<{}, IState, ITask> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentTask: "",
      tasks: []
    };
  }

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      currentTask: "",
      tasks: [
        ...this.state.tasks,
        {
          id: this._timeInMilliseconds(),
          value: this.state.currentTask,
          completed: false
        }
      ]
    });
  };

  public handleOnChange = (e: any) => {
    this.setState({
      currentTask: e.target.value
    });
  };

  public deleteTask = (id: number) => {
    const tasks: ITask[] = this.state.tasks.filter(
      (task: ITask) => task.id !== id
    );
    this.setState({ tasks });
  };

  public toggleDone = (index: number) => {
    const task: ITask[] = this.state.tasks.splice(index, 1);
    task[0].completed = !task[0].completed;
    const currentTasks: ITask[] = [...this.state.tasks, ...task];
    this.setState({ tasks: currentTasks });
  };

  public _timeInMilliseconds(): number {
    const date: Date = new Date();
    return date.getTime();
  }

  public render() {
    console.log(this.state);
    return (
      <div className={styles.App}>
        <h1>React Typescript Todo List </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add a Task"
            value={this.state.currentTask}
            onChange={this.handleOnChange}
          />
          <button type="submit">Add Task</button>
        </form>
        <section>
          {this.state.tasks.map((task: ITask, index: number) => {
            return (
              <div key={task.id}>
                <span>{task.value}</span>
                <button onClick={this.deleteTask.bind(this, task.id)}>
                  Delete
                </button>
                <button onClick={this.toggleDone.bind(this, index)}>
                  Done
                </button>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

// section 어떻게 const로 만드는 지?

export default App;
