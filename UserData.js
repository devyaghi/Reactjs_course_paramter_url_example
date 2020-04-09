import React from "react";
import MainMenu from "./MainMenu";
import axios_o from 'axios';
export default class UserData extends React.Component{


    constructor(props) {
        super(props);
        this.state={post_data:[]}
    }


    render() {
        return (
            [

                <MainMenu/>,
                <div>
                    Posts Data : {this.props.match.params.id}
                </div>,


                  this.state.post_data.map(
                  p=>
                      <div ><h1>{p.title}</h1> {p.body}</div>

                  )

            ]

        )
    }

    componentDidMount() {

        axios_o.get("https://jsonplaceholder.typicode.com/posts",{params:{
                userId:this.props.match.params.id
            }}).then(
                response=>{
                    console.log(response);
                    this.setState({post_data:response.data})
                }
        );


    }

}