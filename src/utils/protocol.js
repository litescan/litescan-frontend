
import {Transaction} from "litescan-client/src/protocol/core/Litetokens_pb";

let contractTypes = {};

for (let key of Object.keys(Transaction.Contract.ContractType)) {
  contractTypes[Transaction.Contract.ContractType[key]] = key;
}

export const ContractTypes = contractTypes;
