import * as React from "react";

export default class FirstComponent extends React.Component<{}> {

        public render() {
                return (
                        <div className="centreText">
                                {/* React components must have a wrapper node/element */}

                                <h5>Enter a country name in the box</h5>
                                Country: <input type="text" name=""/>
                                <input type="submit" value="Go"/>
                        </div>
                );
        }
}