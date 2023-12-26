const root = ReactDOM.createRoot(document.querySelector('#root'));

function Counter() {
        return (
            <div className="counter">
                <button class="plus">+</button>
                <h2>{0}</h2>
                <button class="reduce">-</button>
                <button class="more">C</button>
                <button class="delete">X</button>
            </div>
        )
    }
    

function App(){
    return (
        <div className="counter1">
            {/* <h1>Today : {new Date().toDateString()}</h1> */}
            <h1 className="Sum" >Sum = 0</h1>
            <button class="add" > Add Counter</button>
            <Counter />
        </div>
    );
}



root.render(<App />)