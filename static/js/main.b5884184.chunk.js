(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(3),i=n.n(s),o=n(1),c=n.n(o),p=n(4);n(11);var l=class extends a.a.Component{constructor(...e){super(...e),this.state={profile:!1,repo:!1,tempRepo:!1,isPrefetchDone:!1},this.filterRepos=(e=>{const t=e.target.value;if(t.length){const e=this.state.tempRepo.filter(e=>{if(e.name.toLowerCase().match(t.toLowerCase()))return e});this.setState({repo:e})}else this.setState({repo:this.state.tempRepo})})}fetchProfileData(){return fetch("https://api.github.com/users/supreetsingh247").then(e=>e.json()).then(e=>{this.setState({profile:e})})}fetchRepoData(){return fetch("https://api.github.com/users/supreetsingh247/repos").then(e=>e.json()).then(e=>{this.setState({repo:e,tempRepo:e,isPrefetchDone:!0})})}prefetchData(){var e=this;return Object(p.a)(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchProfileData();case 2:return t.next=4,e.fetchRepoData();case 4:case"end":return t.stop()}},t)}))()}componentDidMount(){this.prefetchData()}buildGithubPage(){console.log(this.state);const e=this.state,t=e.profile.avatar_url,n=e.repo.map(({name:e})=>a.a.createElement("div",{style:{border:"1px solid grey",padding:"10px",textAlign:"center",margin:"10px",background:"antiquewhite"},key:e},e));return a.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start",padding:"20px"}},a.a.createElement("div",null,a.a.createElement("img",{src:t})),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",padding:"100px"}},a.a.createElement("label",null,"Filter"),a.a.createElement("input",{type:"text",onChange:this.filterRepos}),n))}render(){return this.state.isPrefetchDone?this.buildGithubPage():"Loading !!!"}};const h=document.getElementById("root");i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l,null)),h)},5:function(e,t,n){e.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.b5884184.chunk.js.map