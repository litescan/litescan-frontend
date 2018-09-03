import React from "react";
import {Transaction} from "@tronscan/client/src/protocol/core/Tron_pb";
import {tu} from "./i18n";
import {ONE_TRX} from "../constants";
import {TRXPrice} from "../components/common/Price";

let contractTypes = {};

for (let key of Object.keys(Transaction.Contract.ContractType)) {
  contractTypes[Transaction.Contract.ContractType[key]] = key;
}

export const ContractTypes = contractTypes;


export const ChainParameterRenderers = {
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
};
