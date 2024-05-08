import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RepoCard from './RepoCard';
import './App.css'; // Ensure your styles are defined here

function App() {
    const [repos, setRepos] = useState([]);
    const [count, setCount] = useState(10); // Default to showing top 10 repositories

    useEffect(() => {
        axios.get(`http://localhost:3000/api/repositories?count=${count}`) // Corrected port number
            .then(response => {
                setRepos(response.data);
            })
            .catch(error => console.error('Error fetching repos:', error));
    }, [count]); // Depend on count to refetch when it changes
    

    return (
        <div className="app-container">
            <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Top {count} GitHub Repositories</h1>
            <select value={count} onChange={e => setCount(e.target.value)} className="dropdown">
                <option value="10">Top 10</option>
                <option value="50">Top 50</option>
                <option value="100">Top 100</option>
            </select>
            <div className="card-container">
                {repos.map((repo, index) => <RepoCard key={repo.id} repo={repo} index={index} />)}
            </div>
        </div>
    );
}

export default App;
