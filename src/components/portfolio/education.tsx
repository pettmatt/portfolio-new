export default async function Education() {
	const data = {
		title: "Education",
		studies: [
			{
				school: "Jamk University of Applied Sciences",
				program: "Bachelor of Business Administration",
				date: {
					start: new Date("08.2019"),
					ending: new Date("11.2022"),
					estimation: "~3.5 years"
				}
			}
		]
	}

	return (
		<>
			<h3>{ data.title }</h3>

			<div className="content-container">
				<ul>
					{ 
						data.studies.map((study, index) => (
							<li key={index}>
								<h4>{ study.school }</h4>
								<div className="details flex column children-max-width">
									<p className="program">{ study.program }</p>
									<p className="timeline">
										{ 
											study.date.start.getFullYear()
										} - {
											study.date.ending.getFullYear()
										} ({ study.date.estimation })
									</p>
								</div>
							</li>
						)
					)}
				</ul>
			</div>
		</>
	)
}