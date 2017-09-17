import React from 'react';


class TodoItems extends  React.Component {

    static propTypes = {
        items: React.PropTypes.array.isRequired
    }
    constructor(props) {
        super(props);
    }
    render() {
        const createItem = (item, index) => {
            return (
                <li key = {index}>{item}</li>
            );
        };
        return <ul>{this.props.items.map(createItem)}</ul>;

   }

};
export default TodoItems;
