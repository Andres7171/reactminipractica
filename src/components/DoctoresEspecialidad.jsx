import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
export default class DoctoresEspecialidad extends Component {
  
  selectEspecialidades=React.createRef()
  state={
    especialidades:[],
    doctores:[]
  }


  loadEspecialidades=()=>{
    let request='/api/Doctores/Especialidades'
    axios.get(Global.urlDoctores+request).then((response)=>{
        this.setState({
            especialidades:response.data
        })
    })
  }
  mostrarDoctores=(event)=>{
    event.preventDefault()
    let request='/api/Doctores/DoctoresEspecialidad/'+this.selectEspecialidades.current.value
    axios.get(Global.urlDoctores+request).then((response)=>{
        this.setState({
            doctores:response.data
        })
    })
    

  }
  
    render() {
    return (

      <div>
        {
        this.loadEspecialidades()}
        <h1>Doctores Especialidad</h1>
        <form action="">
            <select ref={this.selectEspecialidades} name="" id="">
                {
                    this.state.especialidades.map((especialidad,index)=>{
                        return(
                        <option value={especialidad} key={index}>{especialidad}</option>
                    )
                    })
                    
                }
            </select>
            <button onClick={this.mostrarDoctores}>Mostrar</button>
        </form>
        {this.state.doctores != null &&
        (
            <ul>
                {
                    this.state.doctores.map((doctor,index)=>{
                        return(
                            <li key={index}>{doctor.apellido}</li>
                        )
                    })
                }
            </ul>
        )}
       

      </div>
    );
  }
}
