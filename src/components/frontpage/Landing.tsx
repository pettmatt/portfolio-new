export default function Landing() {
    return (
        <div id="landing" className="flex flex-col sm:flex-row">
            <div className="title-wrapper flex-1">
                <h1 className="flex flex-col"
                    aria-label="Hello, I am your ordinary web developer with versatile skills"
                >
                    <span>Hello.</span>
                    <span>I am</span>
                    <span className="role-wrapper">
                        <span>your ordinary</span>
                        {/* Iterate a role array, web developer, backend, frontend,
                        debugger, optimizer, updater, tester, concepter. */}
                        <span>web developer</span>
                    </span>
                    <span className="name">Petteri Mattila</span>
                </h1>
            </div>
            <div className="tool-wrapper flex-1">
                {"Right tool to the right job"}
                {/* Image that shows a random skill of mine */}
                {/* After iteration show all with animation and add a text "and more to come" */}
                {/* Secondary anim: while iterating place the images in a list and when finished add the text */}
            </div>
        </div>
    )
}