import React from "react";
import {filter, flatten} from "lodash";
import Block from "./components/blockchain/Block";
import Transaction from "./components/blockchain/Transaction";
import Address from "./components/addresses/Address";
import Home from "./components/Home";
import {
  MarketsAsync,
  StatisticsAsync,
  SingleChartAsync,
  TransactionViewerAsync,
  VoteLiveAsync,
  VoteOverviewAsync,
  WalletWizardAsync,
  EnvoysAsync,
  AccountAsync,
  NodeTesterAsync,
  LitetokensConvertToolAsync,
  SystemAsync,
  DemoAsync,
  FaqAsync,
  MyTokenAsync,
  LITETOKENSRatingAsync,
  CopyrightAsync,
  LedgerHelpAsync,
  TokenOverviewAsync,
  TokenListAsync,
  TokensCreateAsync,
  AccountsAsync,
  FoundationAsync,
  NodesAsync,
  LiveAsync,
  TokenDetailAsync
} from "./components/async";
import Blocks from "./components/blockchain/Blocks";
import Transactions from "./components/blockchain/Transactions";
import Transfers from "./components/blockchain/Transfers";
import Envoy from "./components/envoys/envoy";
import {Redirect} from "react-router-dom";

export const routes = [
  {
    path: "/blockchain",
    label: "blockchain",
    icon: 'fa fa-link',
    component: () => <Redirect to="/blockchain/blocks"/>,
    routes: [
      {
        path: "/blockchain/blocks",
        label: "blocks",
        icon: 'fa fa-cubes',
        component: Blocks,
      },
      {
        icon: 'fas fa-handshake',
        path: "/blockchain/transactions",
        label: "transactions",
        component: Transactions
      },
      {
        icon: 'fas fa-handshake',
        path: "/blockchain/transactions/:date",
        label: "daily_transactions",
        component: Transactions,
        showInMenu: false
      },
      {
        icon: 'fa fa-exchange-alt',
        path: "/blockchain/transfers",
        label: "transfers",
        component: Transfers,
      },
      {
        path: "/blockchain/accounts",
        label: "accounts",
        icon: "fa fa-users",
        component: AccountsAsync,
      },
      {
        label: "statistics",
        icon: `fa fa-chart-pie`,
        path: "/blockchain/stats",
        component: StatisticsAsync
      },
      {
        label: "statistics",
        icon: `fa fa-chart-pie`,
        path: "/blockchain/stats/:chartName",
        component: SingleChartAsync,
        showInMenu: false
      },
      {
        label: "live",
        icon: `fa fa-bolt`,
        path: "/blockchain/live",
        component: LiveAsync
      },
      {
        path: "/blockchain/foundation",
        label: "foundation",
        icon: "fa fa-address-book",
        component: FoundationAsync,
      }
    ]
  },
  {
    label: "nodes",
    icon: 'fa fa-server',
    path: "/nodes",
    component: NodesAsync,
  },
  {
    label: "envoys",
    path: "/envoys",
    icon: "fa fa-rocket",
    component: EnvoysAsync
  },
  {
    path: "/block/:id",
    label: "block",
    component: Block,
    showInMenu: false,
  },
  {
    path: "/transaction/:hash",
    label: "transaction",
    component: Transaction,
    showInMenu: false,
  },
  {
    path: "/address/:id",
    label: "address",
    component: Address,
    showInMenu: false,
  },
  {
    path: "/envoy/:id",
    label: "envoy",
    component: Envoy,
    showInMenu: false,
  },
  {
    path: "/tokens",
    label: "tokens",
    icon: "fas fa-coins",
    component: TokenOverviewAsync,
    routes: [
      {
        label: "overview",
        path: "/tokens/list",
        icon: 'fa fa-list',
        component: TokenListAsync
      }, {
        label: "participate",
        path: "/tokens/view",
        icon: 'fas fa-coins',
        component: TokenOverviewAsync
      }, {
        label: "create",
        path: "/tokens/create",
        icon: 'fa fa-plus-square',
        component: TokensCreateAsync
      },
    ]
  },
  {
    path: "/token/:name",
    label: "token",
    component: TokenDetailAsync,
    showInMenu: false,
  },
  {
    label: "my_token",
    component: MyTokenAsync,
    path: "/myToken",
    showInMenu: false
  },
  {
    label: "LITETOKENSRating",
    component: LITETOKENSRatingAsync,
    path: "/rating",
    showInMenu: false
  },
  {
    path: "/markets",
    label: "markets",
    icon: "fa fa-chart-line",
    component: MarketsAsync
  },
  {
    path: "/votes",
    label: "votes",
    icon: 'fas fa-comment',
    component: VoteOverviewAsync
  },
  {
    path: "/votes-live",
    label: "live",
    icon: 'fas fa-comment',
    component: VoteLiveAsync,
    showInMenu: false,
  },
  {
    path: "/account",
    label: "account",
    showInMenu: false,
    component: AccountAsync,
  },
  {
    path: "/tools",
    label: "tools",
    icon: "fa fa-wrench",
    routes: [
      {
        label: "transaction_viewer",
        path: "/tools/transaction-viewer",
        icon: "fa fa-eye",
        component: TransactionViewerAsync,
      },
      {
        label: "node_tester",
        path: "/tools/node-tester",
        icon: "fa fa-server",
        component: NodeTesterAsync,
      },
      {
        label: "litetokens_convert_tool",
        path: "/tools/litetokens-convert-tool",
        icon: "fa fa-random",
        component: LitetokensConvertToolAsync,
      },
      {
        path: "/tools/system",
        icon: "fa fa-database",
        label: "system",
        component: SystemAsync
      },
      {
        url: "https://github.com/litescan/litescan-desktop/releases",
        icon: "fa fa-download",
        label: "desktop_explorer"
      },
      {
        url: "https://test.litescan.org/#/",
        icon: "fa fa-link",
        label: "link_test_server"
      }
    ]
  },
  {
        path: "list_xlt",
        label: "list_xlt",
        icon: "fa fa-plus",
        enurl: "https://litetokens.org/exchangesList?lng=en",
        zhurl: "https://litetokens.org/exchangesList?lng=zh",
        linkHref:true
  },
  {
    path: "/help",
    label: "help",
    icon: "fa fa-question",
    component: null,
    routes: [
      'LITETOKENS',
      {
        url: "https://dn-peiwo-web.qbox.me/What_is_LITETOKENS1.4.pdf",
        label: "what_is_litetokens",
      },
      '-',
      'Litescan',
      {
        label: "frequently_asked_questions",
        component: FaqAsync,
        path: "/help/faq",
      },
      {
        label: "copyright",
        component: CopyrightAsync,
        path: "/help/copyright",
        showInMenu: false
      },
      {
        label: "Ledger",
        component: LedgerHelpAsync,
        path: "/help/ledger",
      },
      {
        url: "https://t.me/litescan",
        label: "telegram_updates",
      },

      '-',
      "Community",
      {
        url: "https://www.reddit.com/r/litetokens",
        label: "reddit",
      },
      {
        url: "https://t.me/litescantalk",
        label: "telegram",
      },
      '-',
      "Development",
      {
        url: "https://api.litescan.org",
        label: "litetokens_explorer_api"
      },
      {
        url: "https://dn-peiwo-web.qbox.me/Design_Book_of_LITETOKENS_Architecture1.4.pdf",
        label: "litetokens_architechure",
      },
      {
        url: "https://dn-peiwo-web.qbox.me/LITETOKENS%20Protobuf%20Protocol%20Document.pdf",
        label: "litetokens_protobuf_doc",
      },
      '-',
      "Feedback",
      {
        url: "https://github.com/litescan/litescan-frontend/issues/new",
        label: "report_an_error",
      },
    ]
  },
  {
    path: "/wallet/new",
    label: "wallet",
    showInMenu: false,
    component: WalletWizardAsync,
  },
  {
    path: "/demo",
    label: "demo",
    showInMenu: false,
    showSubMenu: false,
    showSubHeader: false,
    component: DemoAsync,
  },
  {
    path: "/",
    label: "home",
    showInMenu: false,
    showSubMenu: false,
    showSubHeader: false,
    component: Home,
  },

];

export const flatRoutes = flatten(routes.map(route => [...(route.routes || []), route]));
