import React, {Fragment} from "react";
import {ONE_XLT} from "../../../constants";
import {AddressLink, ExternalLink} from "../../common/Links";
import Field from "./Field";
import {XLTPrice} from "../../common/Price";
import {tu} from "../../../utils/i18n";
import {FormattedNumber, FormattedDate, injectIntl} from "react-intl";

export default function Contract({contract}) {

  switch (contract.contractType.toUpperCase()) {
    case "TRANSFERCONTRACT":


      return (
        <Fragment>
          <div className="card-body">
            <h5 className="card-title text-center">{tu("transfer_contract")}</h5>
            <p>
              {tu("XLT_transfer_between_addresses")}
            </p>
          </div>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <Field label="from"><AddressLink address={contract.from} /></Field>
                <Field label="to"><AddressLink address={contract.to} /></Field>
                <Field label="amount"><XLTPrice amount={contract.amount / ONE_XLT} /></Field>
              </tbody>
            </table>
          </div>
        </Fragment>
      );

    case "TRANSFERASSETCONTRACT":
      return (
        <Fragment>
          <div className="card-body">
            <h5 className="card-title text-center">{tu("transfer_asset_contract")}</h5>
            <p>
              {tu("token_transfer_between_addresses")}
            </p>
          </div>
          <div className="table-responsive">
              <table className="table">
                <Field label="from"><AddressLink address={contract.from} /></Field>
                <Field label="to"><AddressLink address={contract.to} /></Field>
                <Field label="amount">{contract.amount}</Field>
                <Field label="token">{contract.token}</Field>
              </table>
          </div>
        </Fragment>
      );

    case "PARTICIPATEASSETISSUECONTRACT":
      return (
          <Fragment>
            <div className="card-body">
              <h5 className="card-title text-center">{tu("participate_asset_issue_contract")}</h5>
              <p>
                {tu("participate_token_between_addresses")}
              </p>
            </div>
            <div className="table-responsive">
                <table className="table">
                  <Field label="to"><AddressLink address={contract.ownerAddress} /></Field>
                  <Field label="issuer"><AddressLink address={contract.toAddress} /></Field>
                  <Field label="amount">{contract.amount / ONE_XLT}</Field>
                  <Field label="token">{contract.token}</Field>
                </table>
            </div>
          </Fragment>
      );
    case "WITNESSUPDATECONTRACT":
      return (
        <Fragment>
          <div className="card-body">
            <h5 className="card-title text-center">{tu("witness_update_contract")}</h5>
            <p>
              {tu("updates_a_witness")}
            </p>
          </div>
          <table className="table">
            <Field label="owner_address"><AddressLink address={contract.ownerAddress} /></Field>
            <Field label="URL">{contract.url}</Field>
          </table>
        </Fragment>
      );
    case "WITNESSCREATECONTRACT":
      return (
          <Fragment>
            <div className="card-body">
              <h5 className="card-title text-center">{tu("witness_create_contract")}</h5>
              <p>
                {tu("create_a_witness")}
              </p>
            </div>
            <table className="table">
              <Field label="owner_address"><AddressLink address={contract.ownerAddress} /></Field>
              <Field label="URL">{contract.url}</Field>
            </table>
          </Fragment>
      );

    case "ACCOUNTUPDATECONTRACT":
      return (
        <Fragment>
          <div className="card-body">
            <h5 className="card-title text-center">{tu("account_update_contract")}</h5>
            <p>
              {tu("update_account_name")}
            </p>
          </div>
          <table className="table">
            <Field label="owner_address"><AddressLink address={contract.ownerAddress} /></Field>
            <Field label="account_name">{contract.name}</Field>
          </table>
        </Fragment>
      );
    case "WITHDRAWBALANCECONTRACT":
      return (
          <Fragment>
            <div className="card-body">
              <h5 className="card-title text-center">{tu("withdraw_balance_contract")}</h5>
              <p>
                {tu("withdraw_balance")}
              </p>
            </div>
            <table className="table">
              <Field label="owner_address"><AddressLink address={contract.ownerAddress} /></Field>
            </table>
          </Fragment>
      );

    case "FREEZEBALANCECONTRACT":
      return (
        <Fragment>
          <div className="card-body">
            <h5 className="card-title text-center">{tu("freeze_balance_contract")}</h5>
            <p>
              {tu("freeze_XLT")}
            </p>
          </div>
          <table className="table">
            <Field label="owner_address"><AddressLink address={contract.ownerAddress} /></Field>
            <Field label="frozen_balance">{contract.frozenBalance / ONE_XLT}</Field>
            <Field label="frozen_days">{contract.frozenDuration}</Field>
          </table>
        </Fragment>
      );

    case "UNFREEZEBALANCECONTRACT":
      return (
          <Fragment>
            <div className="card-body">
              <h5 className="card-title text-center">{tu("unfreeze_balance_contract")}</h5>
              <p>
                {tu("unfreeze_XLT")}
              </p>
            </div>
            <table className="table">
              <Field label="owner_address"><AddressLink address={contract.ownerAddress} /></Field>
            </table>
          </Fragment>
      );

    case "VOTEWITNESSCONTRACT":
      return (
        <Fragment>
          <div className="card-body">
            <h5 className="card-title text-center">{tu("vote_witness_contract")}</h5>
            <p>
              {tu("vote_for_a_witness")}
            </p>
          </div>
          <table className="table">
            <Field label="owner_address"><AddressLink address={contract.ownerAddress} /></Field>
            <tr>
              <th>{tu("votes")}</th>
              <td>
                <ul>
                  {
                    contract.votes.map(vote => (
                      <li>
                        <AddressLink address={vote.voteAddress} truncate={false} />
                        {tu("counts")} : {vote.voteCount}
                      </li>
                    ))
                  }
                </ul>
              </td>
            </tr>
          </table>
        </Fragment>
      );

    case "ASSETISSUECONTRACT":
      return (
        <Fragment>
          <div className="card-body">
            <h5 className="card-title text-center">{tu("asset_issue_contract")}</h5>
            <p>
              {tu("issue_a_new_asset")}
            </p>
          </div>
          <table className="table">
            <Field label="owner_address"><AddressLink address={contract.ownerAddress} /></Field>
            <Field label="token_name">{contract.name}</Field>
            <Field label="total_supply">{contract.totalSupply}</Field>
            <Field label="XLT_exchange_rate">{contract.xltNum / ONE_XLT} : {contract.num}</Field>
            <Field label="start_time"><FormattedDate value={contract.startTime}/></Field>
            <Field label="end_time"><FormattedDate value={contract.endTime}/></Field>
            <Field label="description">{contract.description}</Field>
            <Field label="URL"><ExternalLink url={contract.url}/></Field>
          </table>
        </Fragment>
      );

      default:
      return (
        <Fragment>
          <div className="card-body">
            <h5 className="card-title text-center">#</h5>
            <p>
              contract not found
            </p>
          </div>
        </Fragment>
      );
  }

  return (
    <div className="card-body">
      {JSON.stringify(contract)}
    </div>
  );
}
