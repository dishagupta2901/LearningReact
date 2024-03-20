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
            <div className="user-card w-96 m-2 p-2 rounded-md border-spacing-2 hover:shadow-lg flex justify-center bg-blue-200">
                <div className=" my-14">
                    <h1 className="font-bold">Name: {name}</h1>
                    <h2 className="font-medium">Id: {id}</h2>
                    <h3 className="font-medium">User Name: @{login} </h3>
                </div>

                <img src={avatar_url} alt="avatar_img" width="200px" className="img_user p-2  m-2 border border-gray-50 rounded bg-slate-200 shadow-md"/>
                
            </div>
        );
    }
}

export default UserDetails;