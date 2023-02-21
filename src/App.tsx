import { Sidebar } from "./Components";
import Form from "./Components/Form";
import Header from "./Components/Header";

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="step__inner container">
                <Sidebar />
                <Form />
            </div>
        </div>
    );
}

export default App;
