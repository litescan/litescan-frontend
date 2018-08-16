import React, {Component} from 'react';
import {trim} from "lodash";
import {tu} from "../../utils/i18n";
import {connect} from "react-redux";
import {BlockNumberLink} from "../common/Links";
import {FormattedNumber} from "react-intl";



class TronConvertTool extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {

  }

  hideModal = () => {
    this.setState({
      modal: null,
    });
  };

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {

    return (
        <div className="container header-overlap">
          <div className="card">
            <div className="row">
              <div className="col-md-12">
                <iframe style={{width:'100%',height:'100%',minHeight:'600px',paddingTop:'15px',border:0,scrolling:'no' }} src="http://18.221.104.145:8888/TronConvertTool.html"></iframe>
                {/*
                <h3 className="text-center">
                  Tron Convert Tool
                </h3>
                <div className="tabbable" id="tabs-495720">
                  <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item">
                      <a className="nav-link active show" href="#panel-47438" data-toggle="tab">
                        Base64_HexString</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#panel-551622" data-toggle="tab">
                        Base58Check_HexString</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#panel-551623" data-toggle="tab">
                        PubKey_Address</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#panel-551624" data-toggle="tab">
                        PriKey_PubKey_Address
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content text-center">
                    <div className="tab-pane active show" id="panel-47438">
                      <form id="form1" name="form1" method="post" action="">
                        <br/>
                        <p className="medium">Base64</p>
                        <textarea name="base64" id="base64" cols="80" rows="2"
                                  style={{width: '600px', height: '80px'}}></textarea>
                        <br/>
                        <input onClick="do64Encode();" type="button" value="Encode"
                               name="encode" className="button"/>
                        <input onClick="do64Decode();" type="button" value="Decode"
                               name="decode" className="button"/>
                        <p className="medium">Ascii(HexString)</p>
                        <textarea name="ascii" id="ascii" cols="80" rows="2"
                                  style={{width: '600px', height: '80px'}}></textarea>
                      </form>
                    </div>
                    <div className="tab-pane" id="panel-551622">
                      <form id="form2" name="form2" method="post" action="">
                        <br/>
                        <p className="medium">Base58</p>
                        <textarea name="base58" id="base58" cols="80" rows="2"
                                  style={{width: '600px', height: '80px'}}></textarea>
                        <br/>
                        <input onClick="do58Encode();" type="button" value="Encode"
                               name="encode" className="button"/>
                        <input onClick="do58Decode();" type="button" value="Decode"
                               name="decode" className="button"/>
                        <p className="medium">Ascii(HexString)</p>
                        <textarea name="ascii" id="ascii1" cols="80" rows="2"
                                  style={{width: '600px', height: '80px'}}></textarea>
                      </form>
                    </div>

                    <div className="tab-pane" id="panel-551623">
                      <form id="form3" name="form3" method="post" action="">
                        <br/>
                        <p>
                          <input type="radio" name="net0" value="mainnet" checked/> Main Net
                          <input type="radio" name="net0" value="testnet"/> Test Net
                        </p>
                        <p className="medium">PubKey</p>
                        <textarea name="pubkey" id="pubkey" cols="160" rows="2"
                                  style={{width: '600px', height: '80px'}}></textarea>
                        <br/>
                        <input onClick="pubkey2Address();" type="button" value="Start"
                               name="encode" className="button"/>
                        <p className="medium">Address(HexString)</p>
                        <textarea name="addresshex" id="addresshex" cols="80" rows="2"
                                  style={{width: '600px', height: '80px'}}></textarea>
                        <p className="medium">Address(Base58Check)</p>
                        <textarea name="address58" id="address58" cols="80" rows="2"
                                  style={{width: '600px', height: '80px'}}></textarea>
                      </form>
                    </div>

                    <div className="tab-pane" id="panel-551624">
                      <form id="form4" name="form4" method="post" action="">
                        <br/>
                        <p>
                          <input type="radio" name="net1" value="mainnet" checked/> Main Net
                          <input type="radio" name="net1" value="testnet"/> Test Net
                        </p>
                        <p className="medium">PriKey</p>
                        <textarea name="prikey" id="prikey" cols="80" rows="2"
                                  style={{width: '600px', height: '80px'}}></textarea>
                        <br/>
                        <input onClick="prikey2Address();" type="button" value="Start" name="encode"
                               className="button"/>
                        <p className="medium">PubKey</p>
                        <textarea name="pubkey" id="pubkey1" cols="160" rows="2"
                                  style={{width: '600px', height: '80px'}}></textarea>
                        <p className="medium">Address(HexString)</p>
                        <textarea name="addresshex" id="addresshex1" cols="80" rows="2"
                                  style={{width: '600px', height: '80px'}}></textarea>
                        <p className="medium">Address(Base58Check)</p>
                        <textarea name="address58" id="address581" cols="80" rows="2"
                                  style={{width: '600px', height: '80px'}}></textarea>
                      </form>
                    </div>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TronConvertTool)
