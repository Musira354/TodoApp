import './App.css';
import Tasks from "./components/Task/Tasks";


function App() {

  const tasks = [
    {
      id: 't1',
      title: 'Dress',
      date: new Date(2021, 3, 28)
    },
    {
      id: 't2',
      title: 'Do dancing',
      date: new Date(2021, 1, 12)
    },
    {
      id: 't3',
      title: 'Arrange Notes',
      date: new Date(2021, 5, 29)
    },
    {
      id: 't4',
      title: 'Read Books',
      date: new Date(2021, 9, 11)
    }
  ]

  return (
    <div className='todo-app'>
      <Tasks
        items={tasks }
      />
    </div>
  )
}


export default App
