import React from "react";
import * as Spinners from "react-spinners";

const DEFAULT_COLOR = "#343a40";

export function BarLoader({ width = 60, ...props} = {}) {
    return (
        <Spinners.BarLoader color={DEFAULT_COLOR} loading={true} height={5} width={width} {...props} />
    )
}

export function PropagateLoader(props = {}) {
    return (
        <Spinners.PropagateLoader color={DEFAULT_COLOR} size={20} {...props} />
    )
}

export function LitetokensLoader({options = {}, children = null, height = 70, ...props}) {

    return (
        <div className="p-3 text-center">
            <div class="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {
                children && <div className="pt-3">
                    {children}
                </div>
            }

        </div>
    );
}
