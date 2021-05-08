import React from "react";
import {asyncComponent} from "react-async-component";
import {LitetokensLoader} from "../../common/loaders";
import {tu} from "../../../utils/i18n";

const $script = require("scriptjs");


export const NodeMapAsync = asyncComponent({
  LoadingComponent: () => (
    <div className="card">
      <LitetokensLoader>
        {tu("loading_map")}
      </LitetokensLoader>
    </div>
  ),
  resolve: () => new Promise(resolve =>
    // Webpack's code splitting API w/naming
    require.ensure(
      [],
      (require) => {
        $script("", () => {
          resolve(require('./NodeMap'));
        });
      },
      'NodeMap'
    )
  )
});
