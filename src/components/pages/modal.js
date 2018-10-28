import React, { Component } from 'react';

class Modal extends Component {
    // componentDidMount() {
    //     $(this.getDOMNode())
    //         .modal({backdrop: "static", keyboard: true, show: false});
    // }

    // componentWillUnmount() {
    //     $(this.getDOMNode())
    //         .off("hidden", this.handleHidden);
    // }

    // open() {
    //     $(this.getDOMNode()).modal("show");
    // }

    // close() {
    //     $(this.getDOMNode()).modal("hide");
    // }

    render() {
        let id = this.props.id;
        return (
            <div id={id} className="modal fade" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header border-0">
                            <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        {/* <div className="modal-footer">
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;