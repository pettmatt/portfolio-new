export default async function WorkExperience() {
	interface Data {
		title: string,
		jobs: Job[]
	}

	interface CustomDate {
		start: string,
		end: string,
		show_only_year: boolean
	}

	interface Job {
		company: string,
		job_title: string,
		date: CustomDate,
		contract_type: string,
		description: string
	}

	const data: Data = {
		title: "Work Experience",
		jobs: [
			{
				company: "Capacic",
				job_title: "Full-stack web developer",
				date: {
					start: "2024",
					end: "2024",
					show_only_year: true,
				},
				contract_type: "Contract",
				description: `
					<p>
						Capacic is a startup that aims to provide a more
						intuitive, flexible and user-friendly ERP system that
						adapts seamlessly to the unique needs of modern
						businesses.
					</p>
					<p>
						My responsibility was to provide my perspectives
						on new UI elements, developing essential Vue.js
						components, and writing Lua scripts for backend
						processes to generate Vue components. I was also
						responsible for creating documention from a
						technical perspective and researching the
						possibilities of AI technologies.
					</p>
				`
			}
		]
	}

	function formatDuration(date: CustomDate): String {
		const dStart = new Date(date.start)
		const dEnd = new Date(date.end)
		let result: Date | String | null = null

		if (dStart.getFullYear() === dEnd.getFullYear()) {
			result = dStart
		}

		if (date.show_only_year) {
			if (result === null) {
				result = `${dStart.getFullYear()} - ${dEnd.getFullYear()}`
			} else {
				result = result?.getFullYear().toString()
			}
		} else if (result instanceof Date) {
			result = `${result.getMonth()}.${result.getFullYear()}`
		}

		return result ? result : ""
	}

	return (
		<>
			<h3>{ data.title }</h3>

			<div className="content-container">
				<ul className="flex row wrap">
					{
						data.jobs.map((job: Job, index: number) => (
							<li key={index}>
								<h4 className="title">
									<span className="company">{ job.company }</span> - { job.job_title }
								</h4>
								<div className="timeline flex row">
									<span className="time">{ formatDuration(job.date) }</span>
									<div className="employment-type">{ job.contract_type }</div>
								</div>
								<div className="description-container">
									{
										<div dangerouslySetInnerHTML={
											{ __html: job.description }
										} />
									}
								</div>
							</li>
						))
					}
				</ul>
			</div>
		</>
	)
}