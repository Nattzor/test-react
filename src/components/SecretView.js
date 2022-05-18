import { useState } from "react"

function SecretView() {
    const [login, setLogin] = useState(false)

    function tryLogin(e){
        console.log(e.target.value)
    }

return(<div>
<form>
    <input type="text" placeholder="username"></input>
    <input type="password" placeholder="password"></input>
    <button onClick={tryLogin(this.e)}>Submit</button>
</form>
</div>)
}

export default SecretView