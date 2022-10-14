import SubscribedFeeds from "./SubscribedFeeds";
import BottomNavBar from "../components/BottomNavBar";
import SubscribeModal from "../components/SubscribeModal";

export default function Subscribed(props) {
    return (
        <div className="App">
            <header className="App-header">
                <SubscribeModal/>
                <SubscribedFeeds/>
            </header>
            <footer className="App-footer">
                <BottomNavBar
                    loginStatus={props.loginStatus}
                    userInfo={props.userInfo}
                    navIndex={props.navIndex}/>
            </footer>
        </div>
    );
}
