import React from 'react';

function RepoDetails({ repo }) {
    if (!repo) {
        return <div>Select a repository to view details.</div>;
    }

    return (
        <div>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <p>⭐ Stars: {repo.stargazers_count}</p>
            <p>🍴 Forks: {repo.forks_count}</p>
            <p>🐞 Open Issues: {repo.open_issues_count}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
}

export default RepoDetails;
