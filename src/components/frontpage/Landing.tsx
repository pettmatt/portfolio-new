export default function Landing() {
    return (
        <div id="landing" className="flex flex-col sm:flex-row gap-6 py-12">
            <div className="title-wrapper flex-1">
                <h1 className="flex flex-col"
                    aria-label="Hello, I am your ordinary web developer with versatile skills"
                >
                    <span aria-hidden className="text-6xl md:text-9xl my-12">Hello.</span>
                    <span aria-hidden className="text-2xl my-4">I am</span>
                    {/* whitespace-nowrap, min-[410px]:whitespace-wrap */}
                    <span aria-hidden className="name whitespace-nowrap text-custom">Petteri Mattila</span>
                    {/*  whitespace-nowrap,  */}
                    <span aria-hidden className="flex gap-2 whitespace-nowrap min-[410px]:flex-column sm:flex-row text-2xl my-6">
                        {/* Iterate a role array, web developer, backend, frontend,
                        debugger, optimizer, updater, tester, concepter. */}
                        your ordinary <span className="role">web developer</span>
                    </span>
                </h1>
            </div>
            <div className="tool-wrapper flex-1 sm:m-auto sm:text-center">
                {/* <div>Right tool to the right job</div> */}
                {/* Image that shows a random skill of mine */}
                {/* After iteration show all with animation and add a text "and more to come" */}
                {/* Secondary anim: while iterating place the images in a list and when finished add the text */}
            </div>
        </div>
    )
}