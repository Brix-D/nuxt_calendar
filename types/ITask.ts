// Sub Task
export interface ISubTask {
  title: string
  completed: boolean
}

// Task Tool
export interface ITaskTool {
  img: string
}

export interface ITaskBackground {
  color: string
  shadow: string
}

// Task
export interface ITask {
  title: string
  subTasks: ISubTask[],
  tools: ITaskTool[],
  background: ITaskBackground
}
