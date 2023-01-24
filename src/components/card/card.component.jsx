import { Component } from 'react';
import './card.style.css';

class Card extends Component {
    render() {
        const {title,image_url} = this.props.monster;
            return (
                <div className='card-container'>
                    <img src={image_url} alt={`monster ${title}`} />
                    <h2>{title}</h2>
                </div>
            );
    }
}

export default Card;