import React, {Component} from 'react';
import {trim} from "lodash";
import {tu} from "../../utils/i18n";
import {connect} from "react-redux";
import {Client} from "../../services/api";
import xhr from "axios";
import {TRXPrice} from "../common/Price";
import {ONE_TRX} from "../../constants";


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
      parameterRenderers: {
        MAINTENANCE_TIME_INTERVAL: time => <span>{time / 1000 / 60} {tu("minutes")}</span>,
        ACCOUNT_UPGRADE_COST: value => <TRXPrice amount={value / ONE_TRX}/>,
        CREATE_ACCOUNT_FEE: value => <TRXPrice amount={value / ONE_TRX}/>,
        TRANSACTION_FEE: value => <TRXPrice amount={value / ONE_TRX}/>,
        ASSET_ISSUE_FEE: value => <TRXPrice amount={value / ONE_TRX}/>,
        WITNESS_PAY_PER_BLOCK: value => <TRXPrice amount={value / ONE_TRX}/>,
        WITNESS_STANDBY_ALLOWANCE: value => <TRXPrice amount={value / ONE_TRX}/>,
        CREATE_NEW_ACCOUNT_FEE_IN_SYSTEM_CONTRACT: value => <TRXPrice amount={value / ONE_TRX}/>,
        CREATE_NEW_ACCOUNT_BANDWIDTH_RATE: value => <span>{value / ONE_TRX}</span>,
        ALLOW_CREATION_OF_CONTRACTS: value => <span>{value ? tu("yes") : tu("no")}</span>,
        REMOVE_THE_POWER_OF_THE_GR: value => <span>{value ? tu("yes") : tu("no")}</span>,
        ENERGY_FEE: value => <TRXPrice amount={value / ONE_TRX}/>,
        EXCHANGE_CREATE_FEE: value => <TRXPrice amount={value / ONE_TRX}/>,
        MAX_CPU_TIME_OF_ONE_TX: value => <span>{value}</span>,
      }
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
