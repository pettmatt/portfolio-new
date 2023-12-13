export default function Continue({ socials = [] }) {
    return (
        <div>
            <h1>My links</h1>
            <ul>
                { socials.map(social => (
                    <li key={ social.id }>
                        <a href={ social.attributes.link }>
                            { social.attributes.name }
                        </a>
                    </li>
                )) }
            </ul>
        </div>
    )
}