import React, { Fragment } from 'react';

import './style/Perfil.css';
import twitgov_logo from '../imagenes/twitgov_logo.png';
import david_photo from '../imagenes/david_photo.png';

class Perfil extends React.Component {
	render() {
		return (
			<Fragment>
				<div className="containernprincipal">
					<div className="container_header">
						<img src={twitgov_logo} alt="Logo de la conferencia" className="twitgov_logo" />
					</div>

					<div className="section-name">
						<img className="avatar" src={david_photo} alt="Avatar" />
						<h1>
							{this.props.nombre} <br /> {this.props.apellido} <br /> {this.props.edad} años
						</h1>
					</div>

					<div className="section-info">
						<h3> {this.props.empresa} </h3>
						<h5> {this.props.emails} </h5>
					</div>

					<div className="footer row"> {this.props.tipo} </div>
				</div>
			</Fragment>
		);
	}
}

export default Perfil;
