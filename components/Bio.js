import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('./components/images/Myphoto.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
                I am a junior full stack web developer and i am looking to
                improve my skills and better understand how to properly use the 
                skills i have learned throughout the coding bootcamp that i have been a part of throughout this semester in ASU.
                My skills in coding as a developer include JavaScript, CSS,  and React.js,
                With the project i've developed i have come to better understand the development of apps.
				</p>
				<p>
					<a
						href="https://github.com/ChristopherSMM"
						target="_blank"
					>
						GitHub
					</a>{' '}
					a{' '}
					<a
						href="https://github.com/Natecon2/Dish-Hunt"
						target="_blank"
					>
					</a>{' '}
					This Application helps people search, add and remove their own 
                    recipes onto a web application.
				</p>
			</div>
		</section>
	);
}

export default About;