import React, {Component} from 'react';
import {trim} from "lodash";
import {tu} from "../../utils/i18n";
import {connect} from "react-redux";
import {Client} from "../../services/api";
import xhr from "axios";
import {TRXPrice} from "../common/Price";
import {ONE_TRX} from "../../constants";
import {ChainParameterRenderers} from "../../utils/protocol";


function ParameterRow({ label, body }) {
  return (
    <tr>
      <th>{label}:</th>
      <td>{body}</td>
    </tr>
  )
}

class ChainParameters extends Component {

  constructor(props) {
    super(props);

    this.state = {
      parameters: {},
      parameterRenderers: ChainParameterRenderers,
    };
  }

  componentDidMount() {
    this.load();
  }

  hideModal = () => {
    this.setState({
      modal: null,
    });
  };

  load = async () => {
    let {data} = await xhr.get(`${Client.apiUrl}/api/grpc/full/getchainparameters`);

    let parameters = {};

    for (let param of data.data) {
      parameters[param.key] = param.value;
    }

    this.setState({
      parameters,
    });
  };

  render() {

    let {parameters, parameterRenderers} = this.state;

    return (
      <main className="container header-overlap">
        <div className="card">
        <table className="table table-hover m-0 bg-white">
          <tbody>
          <tr>
            <td colSpan="2" className="bg-dark text-white border-top-0">Parameters</td>
          </tr>
          {
            Object.entries(parameters).map(([key, value]) => (
              <ParameterRow label={tu(key)} body={parameterRenderers[key](value)} />
            ))
          }
          </tbody>
        </table>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    sync: state.app.syncStatus,
  };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ChainParameters)
