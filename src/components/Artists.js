import React, { Component } from "react";
import axios from "axios";
import "babel-polyfill";
import data from "../data/data.json";
import FaSpotify from "react-icons/lib/fa/spotify";
import FaWordpress from "react-icons/lib/fa/wordpress";

class Artists extends Component {
	constructor(props) {
		super(props);
		this.state = {
			artists: []
		};
		this.getArtists = this.getArtists.bind(this);
	}
	componentDidMount() {
		this.getArtists();
	}
	getArtists() {
		axios.get("../data/data.json").then(res => {
			this.setState({
				artists: res.data.reverse()
			});
		});
	}
	renderArtist() {
		return this.state.artists.map((artist, index) => {
			const artistStyle = {
				backgroundImage: `url(/images/${artist.image})`
			};
			return (
				<div
					className="box"
					key={index}
					data-aos="fade-zoom-in"
					data-aos-offset="-200"
					data-aos-easing="ease-in-sine"
					data-aos-duration="600"
					data-aos-once="true"
				>
					<div className="box-text">
						<h2>{artist.version}</h2>
						<h3>{artist.musician}</h3>
						<p>{artist.date}</p>

						<a className="box-link box-link-spotify" href={artist.spotify}>
							<FaSpotify className="box-icon box-icon-spotify" />Listen on
							Spotify
						</a>
						<a className="box-link" href={artist.blog}>
							<FaWordpress className="box-icon box-icon-releasenotes" />Release
							notes
						</a>

					</div>
					<div className="box-image" style={artistStyle} />
				</div>
			);
		});
	}
	render() {
		return (
			<div className="container">
				{this.renderArtist()}
				{this.props.children}
			</div>
		);
	}
}
export default Artists;
