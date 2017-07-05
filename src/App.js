import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Article from './Article'
import Footer from './Footer'
import Avatar from './Avatar'
import Body from './Body'
import Links from './Links'
import Aside from './Aside'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

    <main className="expanded row">
      <div className="large-8 medium-12 columns article">
        <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
        <Avatar />
        <Body />
        <Links />
        </div>
        <Aside />
    <Article />
    </main>
    <Footer/>
      </div>
    );
  }
}

export default App;
