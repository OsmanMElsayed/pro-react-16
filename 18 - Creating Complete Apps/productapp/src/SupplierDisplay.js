import React, { Component } from "react";
import { connect } from 'react-redux';
import { SupplierEditor } from "./SupplierEditor";
import { SupplierTable } from "./SupplierTable";
import { saveSupplier, deleteSupplier } from './store';

const mapStateToProps = (storeData) => ({
    suppliers: storeData.modelData.suppliers,
    showEditor: storeData.stateData.showEditor,
    selected: storeData.stateData.selectedModel
});

const mapDispatchToProps = {
    saveCallback: saveSupplier,
    deleteCallback: deleteSupplier
};

const connnectFunction = connect(mapStateToProps, mapDispatchToProps);

export const SupplierDisplay = connnectFunction(
    class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                showEditor: false,
                selected: null
            }
        }

        startEditing = (supplier) => {
            this.setState({ showEditor: true, selected: supplier })
        }

        createSupplier = () => {
            this.setState({ showEditor: true, selected: {} })
        }

        render() {
            if (this.props.showEditor) {
                return <SupplierEditor />
            } else {
                return <div className="m-2">
                    <SupplierTable suppliers={this.props.suppliers}
                        editCallback={this.startEditing}
                        deleteCallback={this.props.deleteCallback}
                    />
                    <div className="text-center">
                        <button className="btn btn-primary m-1"
                            onClick={this.createSupplier}>
                            Create Supplier
                        </button>
                    </div>
                </div>
            }
        }
    });
