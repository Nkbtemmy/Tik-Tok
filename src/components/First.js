import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class First extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            secondName: '',
        }
    }
    handleChange = e => {
        this.setState({[e.target.id]: e.target.value});
    }
    saveData = () =>{
            localStorage.setItem('fistPlayer', this.state.firstName);
            localStorage.setItem('secondPlayer', this.state.secondName);
        }
       render() {
        return (
           <div className="container d-flex justify-content-center">
            <form action="game" className="card mx-5 my-5" onSubmit={this.saveData} >
                <div className="card-body py-2 px-2">
                    <h2 className="card-heading py-3 px-5">Enter players names</h2>
                    <div className="row rone mx-3 my-3">
                        <div className="col-md-6">
                            <div className="form-group"><label  className="sr-only"></label><input
                                    type="text" className="form-control" id="firstName" value={this.state.firstName} 
                        onChange={this.handleChange} placeholder="First Player" required  />    
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group"><label className="sr-only"></label><input
                                    type="text" className="form-control" id="secondName" placeholder="Second Player" value={this.state.secondName} 
                        onChange={this.handleChange} required />
                            </div>
                        </div>
                    </div>
                  <div className="row rtwo mx-3">
                        <div className="col-md-6">
                            <div className="form-group start"><button type="submit" className="btn btn-primary mb-2">Start</button></div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
        )
    }
}
