import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
			</div>
			<div>
				<p>
					I am a junior full stack web developer and i am looking to
                    improve my skills and better understand how to properly use the 
                    skills i have learned throughout the coding bootcamp that i have
                    been a part of throughout this semester in ASU.
                    My skills in coding as a developer include JavaScript, CSS,  and React.js,
                    With the project i've developed i have come to better
                    understand the development of apps.
				</p>
				<p>
					This project was a colabortive effort between me and three other developers
                    i worked on the models for this specific project
					<a
						href="https://github.com/Natecon2/Dish-Hunt"
						target="_blank"
					>
						develop
					</a>{' '}
					a{' '}
					<a
						href="https://dish-hunt-3a8dcdfb266a.herokuapp.com/"
						target="_blank"
					>
						single-page for the dishhunt app
					</a>{' '}
					This app was created to help those who want to save, share and create recipes for others and yourself to see.
                    You are also supposed to be able to create an account using a server api to work

				</p>
			</div>
		</section>
	);
}

export default About;