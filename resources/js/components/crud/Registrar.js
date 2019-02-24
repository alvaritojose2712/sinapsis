import React, { Component } from 'react';

class Registrar extends Component {
    componentWillMount(){
        this.props.modoRegistrar()
    }
    render() {
        const {onGuardar,form} = this.props
        return (
            <form className="form" onSubmit={onGuardar}>
                <div className="text-right mb-2">
                    <button className="btn btn-outline-danger btn-lg">
                        Registrar
                    </button>
                </div>
                {form}
            </form>
        );
    }
}

export default Registrar;
