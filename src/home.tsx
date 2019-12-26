import * as React from "react";

let isDone: boolean = false;
let name: string = 'Ram';
let list: number[] = [1,2,3,4,5];
let arrayList: Array<number> = [2,4,6];

export interface HelloProps { compiler: string; framework: number; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Home extends React.Component<HelloProps, {}> {
    render() {
        return <div>
            Hello from {this.props.compiler} and {this.props.framework}!

            {isDone} {name} {list}
        </div>;
    }
}