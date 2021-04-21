 import React, {Component} from 'react'
 const validate = (values) =>{
    const errors = {}        ;
    console.log(values);
    if(!values.nombre){
    errors.nombre = 'Este campo es obligatorio'
    }
    if(!values.apellido){
    errors.apellido = 'Este campo es obligatorio'
    }
    return errors;
}
 export default class FormularioSimple extends  Component {
     state = {
         errors: {}
     }
    
     handleChange = ({target}) =>{
         const {name,value } = target;
         this.setState({ [name]: value }); 
     }
     handleSubmit = (e) =>{
         e.preventDefault(); //No se refresca la página para tratar de enviar el formulario
         const { errors, ...sinErrors } = this.state;
         const result = validate(sinErrors);
         this.setState({errors: result})
         if(!Object.keys(result).length){
            console.log('Formulario Valido')
            e.target.reset();
         }
         
     }
     render() {
         const { errors } = this.state;
         return (
            <form onSubmit={this.handleSubmit}>
                <input name="nombre" onChange = {this.handleChange} />
                {errors.nombre && <p>{errors.nombre}</p>}
                <input name="apellido" onChange = {this.handleChange} />
                {errors.apellido && <p>{errors.apellido}</p>}
                <input type="submit" value="Enviar"/> 
            </form>
         )
     }
 }