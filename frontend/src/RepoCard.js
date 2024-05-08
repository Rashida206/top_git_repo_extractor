import React from 'react';

const RepoCard = ({ repo, index }) => {
    // Assign color class based on index to rotate through predefined colors
    const colorClass = `card card-${(index % 4) + 1}`;
    
    return (
        <div className={colorClass}>
            <h2>{repo.name}</h2>
            <h4>{repo.owner.login}</h4>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
};

export default RepoCard;
