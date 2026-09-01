import {
    useState
} from "react";

function App() {

    const [task, setTask] =
        useState("");

    const [tasks, setTasks] =
        useState([]);

    const addTask = () => {

        if (task !== "") {

            setTasks([
                ...tasks,
                task
            ]);

            setTask("");

        }

    };

    const deleteTask = (index) => {

        const updatedTasks =
            tasks.filter(
                (_, i) => i !== index
            );

        setTasks(updatedTasks);

    };

    return (

        <div>

            <h1>
                TODO Application
            </h1>

            <input

                value={task}

                placeholder="Enter Task"

                onChange={(e) =>
                    setTask(
                        e.target.value
                    )
                }

            />

            <button
                onClick={addTask}
            >
                Add Task
            </button>

            <ul>

                {tasks.map(
                    (item, index) => (

                        <li key={index}>

                            {item}

                            {" "}

                            <button
                                onClick={() =>
                                    deleteTask(index)
                                }
                            >
                                Delete
                            </button>

                        </li>

                    )
                )}

            </ul>

        </div>

    );

}

export default App;
