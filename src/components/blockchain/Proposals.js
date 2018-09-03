import React, {Component, Fragment} from 'react';
import {trim} from "lodash";
import {tu} from "../../utils/i18n";
import {connect} from "react-redux";
import {Client} from "../../services/api";
import xhr from "axios";
import {TRXPrice} from "../common/Price";
import {ONE_TRX} from "../../constants";
import {AddressLink} from "../common/Links";
import TimeAgoI18N from "../common/TimeAgoI18N";
import {FormattedDate, FormattedRelative, FormattedTime} from "react-intl";
import {ChainParameterRenderers} from "../../utils/protocol";


function ParameterRow({ label, body }) {
  return (
    <tr>
      <th>{label}:</th>
      <td>{body}</td>
    </tr>
  )
}

class Proposals extends Component {

  constructor(props) {
    super(props);

    this.state = {
      proposals: [],
      parameters: {},
      parameterKeys: [],
    };
  }

  componentDidMount() {
    this.load();
  }

  load = async () => {
    let {data} = await xhr.get(`${Client.apiUrl}/api/grpc/full/listproposals`);
    let {data: dataParameters} = await xhr.get(`${Client.apiUrl}/api/grpc/full/getchainparameters`);

    let parameters = {};

    for (let param of dataParameters.data) {
      parameters[param.key] = param.value;
    }

    this.setState({
      proposals: data.data,
      parameters: parameters,
      parameterKeys: Object.keys(parameters),
    });
  };

  render() {

    let {proposals, parameters, parameterKeys} = this.state;

    return (
      <main className="container header-overlap">
          {
            proposals.map(proposal => (
              <div className="card border-left-3 border-left-success-400 rounded-left-0 mb-3">
                <div className="card-header text-center ">
                  <h5 className="m-0">{tu("Proposal")} <span className="text-success">#{proposal.proposalId}</span></h5>
                </div>
                <table className="table table-hover m-0 bg-white">
                  <tbody>
                  <tr>
                    <th>Proposed By</th>
                    <td><AddressLink address={proposal.proposerAddress} /></td>
                  </tr>
                  <tr>
                    <th>Date Created</th>
                    <td>
                      <FormattedDate value={proposal.createTime} />&nbsp;
                      <FormattedTime value={proposal.createTime} />&nbsp;
                      (<FormattedRelative value={proposal.createTime}/>)
                    </td>
                  </tr>
                  <tr>
                    <th>Expires On</th>
                    <td>
                      <FormattedDate value={proposal.expirationTime} />&nbsp;
                      <FormattedTime value={proposal.expirationTime} />&nbsp;
                      (<FormattedRelative value={proposal.expirationTime}/>)
                    </td>
                  </tr>
                  <tr>
                    <th>Proposal</th>
                    <td>
                      {
                        Object.entries(proposal.parameters).map(([key, value]) => (
                          <div>
                            Change <b>{parameterKeys[key]}</b> to <b>{ChainParameterRenderers[parameterKeys[key]](value)}</b>
                          </div>
                        ))
                        // <b>{ChainParameterRenderers[parameterKeys[key]](parameters[parameterKeys[key]])}</b>
                      }
                    </td>
                  </tr>
                    <tr>
                      <th>Approvals</th>
                      <td>
                        {
                          proposal.approvals.length > 0 ?
                            <Fragment>
                              {
                                proposal.approvals.map(approval => (
                                  <AddressLink address={approval}/>
                                ))
                              }
                            </Fragment> :
                            <div className="text-muted">
                              No approvals yet
                            </div>
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          }
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

export default connect(mapStateToProps, mapDispatchToProps)(Proposals)
