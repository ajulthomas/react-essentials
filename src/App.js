import './App.css';

function NewComponent(){
  return (
    <div>
      The New Component
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <NewComponent />
    </div>
  );
}

export default App;
