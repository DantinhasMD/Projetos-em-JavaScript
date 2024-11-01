import React from 'react';

function RepoList({ repos, onSelectRepo }) {
    return (
        <div>
            <h2>Repositories</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id} onClick={() => onSelectRepo(repo)}>
                        <strong>{repo.name}</strong> - {repo.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RepoList;
