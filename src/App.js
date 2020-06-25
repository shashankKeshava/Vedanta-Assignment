import React from 'react';
import './styles.css';

class GitHubMock extends React.Component {
	state = {
		profile: false,
		repo: false,
		tempRepo: false,
		isPrefetchDone: false,
	};
	fetchProfileData() {
		return fetch('https://api.github.com/users/supreetsingh247')
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					profile: response,
				});
			});
	}
	fetchRepoData() {
		return fetch('https://api.github.com/users/supreetsingh247/repos')
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					repo: response,
					tempRepo: response,
					isPrefetchDone: true,
				});
			});
	}

	async prefetchData() {
		await this.fetchProfileData();
		await this.fetchRepoData();
	}

	componentDidMount() {
		this.prefetchData();
	}

	filterRepos = (event) => {
		const value = event.target.value;
		if (value.length) {
			const newData = this.state.tempRepo.filter((repo) => {
				const { name } = repo;

				if (name.toLowerCase().match(value.toLowerCase())) {
					return repo;
				}
			});
			this.setState({
				repo: newData,
			});
		} else {
			this.setState({
				repo: this.state.tempRepo,
			});
		}
	};

	buildGithubPage() {
		console.log(this.state);
		const {
			profile: { avatar_url },
			repo,
		} = this.state;
		const repoList = repo.map(({ name }) => (
			<div
				style={{
					border: '1px solid grey',
					padding: '10px',
					textAlign: 'center',
					margin: '10px',
					background: 'antiquewhite',
				}}
				key={name}
			>
				{name}
			</div>
		));

		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-start',
					padding: '20px',
				}}
			>
				<div>
					<img src={avatar_url} />
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						padding: '100px',
					}}
				>
					<label>Filter</label>
					<input type="text" onChange={this.filterRepos} />
					{repoList}
				</div>
			</div>
		);
	}

	render() {
		return this.state.isPrefetchDone ? this.buildGithubPage() : 'Loading !!!';
	}
}

export default GitHubMock;
