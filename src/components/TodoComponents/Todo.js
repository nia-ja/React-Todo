import React from 'react';
import "./Todo.css";
import moment from 'moment';
import {TweenMax} from 'gsap';

export class Todo extends React.Component {
    constructor(props){
        super(props);
        // reference to the DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = null;
    }
    
      componentDidMount(){
        // use the node ref to create the animation
        this.myTween = TweenMax.from(this.myElement, 0.7, {y: -20, opacity:0});
    }

    getStyle = () => {
        return {
            textDecoration: this.props.task.completed ? 'line-through' : 'none',
            color: this.props.task.completed ? '#D1AC69' : 'white',
            background: this.props.task.completed ? 'transparent' : '#41827B',
            boxShadow: this.props.task.completed ? 'none' : '0 10px 6px -6px rgba(209, 172, 105, .8)',
        }
    }
    
    render() {
        const { id, task} = this.props.task;
        const currentTime = moment(id).startOf('second').fromNow();

        return (
            <div ref={div => this.myElement = div} style={this.getStyle()} className="todo-item">
                <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} />
                <p>{task}</p>
                <p className="todo-item-date">Added: {currentTime}</p>
            </div>
        )
    }
}

export default Todo;