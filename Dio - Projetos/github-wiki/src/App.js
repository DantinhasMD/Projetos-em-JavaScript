import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import RepoDetails from './components/RepoDetails';

function App() {
    const [repos, setRepos] = useState([]);
    const [selectedRepo, setSelectedRepo] = useState(null);

    const fetchRepos = async (username) => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const data = await response.json();
            setRepos(data);
            setSelectedRepo(null); // Reset selected repo on new search
        } catch (error) {
            console.error("Error fetching repos:", error);
        }
    };

    return (
        <div className="App">
            <h1>GitHub Repository Wiki</h1>
            <SearchBar onSearch={fetchRepos} />
            <RepoList repos={repos} onSelectRepo={setSelectedRepo} />
            <RepoDetails repo={selectedRepo} />
        </div>
    );
}

export default App;
