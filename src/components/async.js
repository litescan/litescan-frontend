import React from "react";
import {asyncComponent} from "react-async-component";
import {LitetokensLoader} from "./common/loaders";


const $script = require("scriptjs");

export const StatisticsAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./blockchain/Statistics/index.js"));
            });
          },
          'Stats',
      )
  )
});

export const SingleChartAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./blockchain/Statistics/SingleChart.js"));
            });
          },
          'SingleStats',
      )
  )
});

export const MarketsAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./markets"));
            });
          },
          'Markets',
      )
  )
});


export const WalletWizardAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./wallet/Wizard"));
            });
          },
          'WalletWizard',
      )
  )
});


export const TransactionViewerAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./tools/TransactionViewer"));
            });
          },
          'TransactionViewer',
      )
  )
});


export const VoteOverviewAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./voting/VoteOverview"));
            });
          },
          'VoteOverview',
      )
  )
});


export const VoteLiveAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./voting/VoteLive"));
            });
          },
          'VoteLive',
      )
  )
});


export const RepresentativesAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./envoys/Representatives"));
            });
          },
          'Representatives',
      )
  )
});

export const AccountAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./account/Account"));
            });
          },
          'Account',
      )
  )
});

export const NodeTesterAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./tools/NodeTester/index"));
            });
          },
          'NodeTester',
      )
  )
});

export const LitetokensConvertToolAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./tools/LitetokensConvertTool"));
            });
          },
          'LitetokensConvertTool',
      )
  )
});

export const SystemAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./tools/System"));
            });
          },
          'System',
      )
  )
});

export const DemoAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./Demo"));
            });
          },
          'DemoAsync',
      )
  )
});

export const FaqAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./Pages/Faq"));
            });
          },
          'FaqAsync',
      )
  )
});

export const MyTokenAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./Pages/MyToken"));
            });
          },
          'MyToken',
      )
  )
});

export const LITETOKENSRatingAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./Pages/LITETOKENSRating"));
            });
          },
          'LITETOKENSRating',
      )
  )
});

export const CopyrightAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./Pages/Copyright"));
            });
          },
          'CopyrightAsync',
      )
  )
});

export const LedgerHelpAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./Pages/LedgerHelp"));
            });
          },
          'LedgerHelp',
      )
  )
});


export const TokenOverviewAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./tokens/Overview/index"));
            });
          },
          'TokenOverview',
      )
  )
});

export const TokenListAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./tokens/Overview/TokenList"));
            });
          },
          'TokenList',
      )
  )
});

export const TokensCreateAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./tokens/TokenCreate"));
            });
          },
          'TokensCreate',
      )
  )
});



export const AccountsAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./Accounts"));
            });
          },
          'Accounts',
      )
  )
});


export const FoundationAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./Foundation"));
            });
          },
          'Foundation',
      )
  )
});

export const NodesAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./network/Nodes"));
            });
          },
          'Nodes',
      )
  )
});

export const LiveAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./blockchain/Live"));
            });
          },
          'Live',
      )
  )
});

export const TokenDetailAsync = asyncComponent({
  LoadingComponent: () => (
      <LitetokensLoader/>
  ),
  resolve: () => new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
          [],
          (require) => {
            $script("", () => {
              resolve(require("./tokens/TokenDetail/index"));
            });
          },
          'TokenDetail',
      )
  )
});

