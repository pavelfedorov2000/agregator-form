import { Sidebar } from "./Components";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Thanks from "./Components/Thanks";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";

const App = () => {
    const { success } = useTypedSelector((state) => state.formReducer);
    const { submitForm } = useActions();
    
    if (success) {
        setTimeout(() => {
            submitForm();
        }, 3000);
    }

    return (
        <div className="wrapper">
            <Header />
            {success
                ? <Thanks />
                :
                <div className="main container">
                    <Sidebar />
                    <Form />
                </div>
            }
        </div>
    );
}

export default App;