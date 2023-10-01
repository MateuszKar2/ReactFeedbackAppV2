import React, { Component } from 'react';
import  PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';
                 
    export default class FeedbackOptions extends Component {
        render () {
            return (
                <ul className={css.buttonsFeedback}>
                    {this.props.options.map((item) => (
                        <li key={nanoid()}>
                            <button className={`${css.btn} ${this.getButtonClass(item)}`} type="button" onClick={() => this.props.onLeaveFeedback(item)}>{item}</button>
                        </li>
                    ))}
                </ul>
            );
        };

        getButtonClass = (item) => {
            switch(item) {
                case 'good':
                    return css.btnGood;
                case 'neutral':
                    return  css.btnNeytral;
                case 'bad':
                    return css.btnBad;
                    default:
                        return '';
            }
        }
        };




FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};