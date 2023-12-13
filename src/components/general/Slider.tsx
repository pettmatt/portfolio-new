export default function Slider({ array = [] }) {
    return (
        array.map((item, index) => (
            <Item key={ index } item={ item } />
        ))
    )
}

function Item({ item = {} }) {
    return (
        (item)
            ? item
            : "Item string"
    )
}