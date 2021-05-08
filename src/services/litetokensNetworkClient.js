import xhr from "axios";

export class LitetokensNetworkClient {

  async getMarketInfo() {
    let {data} = await xhr.get(`https://litetokens.org/api/v1/market_info`);

    return data.data;
  }
}
