import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/common/Toolbar.css'
import SettingsImage from  '../../assets/images/Toolbar/settings.png'

// Enable home button for easier testing
// import HomeImage from  '../../assets/images/Toolbar/home.png'

class ToolBar extends Component {

	renderToolBarItem(item, index) {

		if (window.location.pathname !== item.url) {

			return (
				<Link className="coinster-tooltbar-item" key={index} to={item.url}>
					<img alt={item.url.split('/')[1]} src={item.imgsrc} />
				</Link>
			);

		}

		return false;
	}

	render() {

		const toolBarItems = [
			// {
			// 	imgsrc: HomeImage,
			// 	url: '/list'
			// },
			{
				imgsrc: SettingsImage,
				url: '/settings'
			}
		];

	    return (
	        <div className="coinster-toolbar">
	      	    {
	      		    toolBarItems.map((item, index) => {
		      		    return this.renderToolBarItem(item, index)
		      	    })
		        }
	        </div>
	    );
	}
}
export default ToolBar;
