import { WATCHES } from "../constants/images";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Nav from "./Nav";
import TopNav from "./TopNav";

const Sidebar = () => {
    const { currentStep } = useTypedSelector((state) => state.formReducer);

    return (
        <aside className="sidebar">
            <img className="sidebar__img" src={WATCHES[currentStep - 1]} alt="часы" />
            <TopNav />
            <Nav />
        </aside>
    );
};

export default Sidebar;