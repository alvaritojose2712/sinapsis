import React, { Component } from 'react';

class Editar extends Component {
    componentWillMount(){
        this.props.modoEdit(this.props.match.params.id)
    }
    render() {
        const {form,onEdit,match} = this.props
        return (
            <form className="form" onSubmit={event=>onEdit(event,match.params.id)}>
                <div className="text-right mb-2">
                    <button className="btn btn-outline-warning btn-lg">
                        Editar
                    </button>
                </div>
                {form}
            </form>
        );
    }
}
export default Editar;
