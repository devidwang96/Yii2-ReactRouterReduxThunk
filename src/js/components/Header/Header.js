// IMPORT PACKAGE REFERENCES

import React from 'react';
import { NavLink } from 'react-router-dom';

// COMPONENT

export const Header = () => (
    <header className="navbar navbar-static-top bs-docs-nav" id="top" role="banner">
        <div className="container">
            <div className="navbar-header">
                <button className="navbar-toggle" type="button" data-toggle="collapse"
                        data-target=".bs-navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>

            <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                <div className="row">
                    <div className="col-md-10 col-sm-10 col-xs-6">
                        <ul className="nav navbar-nav">
                            <li><NavLink to='/' activeClassName='menu selected' exact={true}>HOME</NavLink></li>
                            <li><NavLink to='/zipcodes' activeClassName='menu selected'>ZIP CODES</NavLink></li>
                            <li><NavLink to='/about' activeClassName='menu selected'>ABOUT</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
);