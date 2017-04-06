import React from 'react';
import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'lifeCycle':'constructor'
		}
		console.log('Inside constructor!');
	}

	componentWillMount() {
		console.log('Inside componentWillMount!');
	}

	componentDidMount() {
		console.log('Inside componentDidMount!');
	}

	componentWillUnmount() {
		console.log('Inside componentWillUnmount!');
	}

	componentWillReceiveProps() {
		console.log('Inside componentWillReceiveProps!');	
	}

	shouldComponentUpdate() {
		console.log('Inside shouldComponentUpdate!');
		return true;	
	}

	componentWillUpdate() {
		console.log('Inside componentWillUpdate!');		
	}

	componentDidUpdate() {
		console.log('Inside componentDidUpdate!');
	}

	handleClick(){
		this.setState(function() {
			return {
				'lifeCycle':'handleClick'
			}
		});
	}

	render() {
		console.log('Inside render!');
		return (
			<div className="content-area">
				<Header headerLabel="Header Section" />
				<a href="javascript:void(0);" className="click-here" onClick={this.handleClick.bind(this)}>{this.props.name} !</a>
				<Footer  footerLabel="Footer Section"/>
			</div>
		);
	}
}