import React from "react"; 

const WelcomeContext = React.createContext()

class WelcomeUser extends Component {
    constructor(props) {
        super(props); 
        this.state = { username: ""}
    }

    onChangeHandler = (username) => {
        this.setState({
            username: username 
        });
    }

render() {
    return(
        <WelcomeContext.Provider value={this.state.username}>

        </WelcomeContext.Provider> 
    )
}




}



