function Fruits(){
const frutis = [
'apple','orange','pear'
]
return (<ul>{
    frutis.map( fruit =>
    <li key={fruit}> {fruit} </li>
    )
    }</ul>)
}

export default Fruits