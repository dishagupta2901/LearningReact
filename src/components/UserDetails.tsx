import React from "react";

class UserDetails extends React.Component {

    constructor(props: any){
        super(props);

        this.state = {
            userDetailsInfo : {
                name: "",
                id: 0,
                avatar_url: "",
                login: ""
            }
        }
    }

    async componentDidMount(){
        const gitUserdata = await fetch("https://api.github.com/users/dishagupta2901");
        const gitUserJson = await gitUserdata.json();

        this.setState({
            userDetailsInfo : gitUserJson
        })
    }

    render(){
        const { name, id, login, avatar_url } = this.state.userDetailsInfo;

        return (
            <div className="user-card m-2 p-2 rounded-md border hover:shadow-lg">
                <img src={avatar_url} alt="avatar_img" width="200px" className="img_user"/>
                <h1 className="font-bold">Name: {name}</h1>
                <h2>Id: {id}</h2>
                <h3>User Name: @{login} </h3>
            </div>
        );
    }
}

export default UserDetails;