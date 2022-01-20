import React from 'react';
import { NavLink } from 'react-router-dom';

const ThoughtList = ({ thoughts, title }) => {
    if (!thoughts.length) {
        return <h3>No Thoughts Yet</h3>
    }

    return (
        <div>
            <h3>{title}</h3>
            {thoughts && 
                thoughts.map(thought => (
                    <div key={thought._id} className='card mb-3'>
                        <p className="card-header">
                        <NavLink
                            to={`/profile/${thought.username}`}
                            style={{ fontWeight: 700 }}
                            className="text-light"
                        >
                            {thought.username}
                        </NavLink>{' '}
                            thought on {thought.createdAt}
                        </p>
                        <div className='card-body'>
                        <NavLink to={`/thought/${thought._id}`}>
                            <p>{thought.thoughtText}</p>
                            <p className="mb-0">
                                Reactions: {thought.reactionCount} || Click to{' '}
                                {thought.reactionCount ? 'see' : 'start'} the discussion!
                            </p>
                        </NavLink>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ThoughtList;