import React, { Component } from 'react';
import MyHeader from '../../components/header';
import MyNavbar from '../../components/navbar';
import MySidebar from '../../components/sidebar';
import MyMain from '../../components/main';
import MyFooter from '../../components/footer';

class WebView extends Component {
  render() {
    return (
      <div className="web">
      <MyHeader />
      <MyNavbar />
        <section className="middle">
          <MySidebar />
          <MyMain />
        </section>
      <MyFooter />
        {/*<h1 style= { style }>This is the Web View</h1>*/ }  
      </div>
    )
  }
}

export default WebView;