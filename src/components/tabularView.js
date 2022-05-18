import { useState } from "react"

function TabularView() {
 function renderSwitch(view) {
 switch(view){
     case 1 : return <p>Laboris amet nulla magna velit ad ut fugiat exercitation commodo. Dolor mollit reprehenderit esse Lorem. Labore minim quis cupidatat excepteur laborum qui ea laborum labore excepteur. Aliquip pariatur duis mollit excepteur anim.

Velit amet elit consectetur Lorem do nisi eu amet qui pariatur. Enim eiusmod cupidatat commodo culpa aute velit. Ullamco proident ea eiusmod consequat ullamco labore. Voluptate sint sit ut fugiat nisi esse eu cupidatat. Sit anim id ullamco velit anim nostrud quis irure reprehenderit tempor cillum enim qui incididunt.

Ex laboris excepteur ex aliqua do sit. Dolor fugiat magna ullamco mollit proident et proident. Lorem ad enim sunt aliquip adipisicing elit ex excepteur culpa laborum aute mollit. Tempor irure nostrud aliqua amet laborum aliquip. Dolor velit ea irure incididunt deserunt aliqua cupidatat. Nulla ullamco sint qui laboris quis Lorem culpa cupidatat.

Nisi nulla reprehenderit cillum cillum eiusmod sit commodo dolore minim adipisicing. Minim anim amet sit officia aute occaecat ad. Ullamco amet aute sit laboris ad laboris exercitation culpa voluptate nulla. Enim sint minim laborum culpa voluptate cupidatat deserunt aliquip tempor sunt fugiat incididunt. Laboris dolor anim ipsum veniam laboris laboris cupidatat est quis ipsum dolore. Eu eiusmod do quis cillum adipisicing ut ea qui. Ad nisi officia culpa pariatur reprehenderit et aliquip voluptate irure.

Ipsum amet elit exercitation deserunt exercitation et cupidatat quis esse sunt deserunt voluptate incididunt est. Do culpa reprehenderit eu non nisi. Ipsum officia quis duis sit reprehenderit anim cupidatat dolore amet qui. Dolore irure in occaecat deserunt in do irure.

Ullamco ut laboris aliqua cupidatat elit nisi laborum aliqua nostrud adipisicing nisi culpa duis laboris. Lorem mollit velit aliquip laborum. Excepteur aute est irure fugiat aliquip nostrud. Nostrud nulla dolore qui nisi ut duis velit.

Pariatur occaecat et aute nulla reprehenderit voluptate nostrud tempor do fugiat. Commodo aliqua nulla nostrud dolor pariatur elit esse aliqua irure id adipisicing fugiat sit. Minim qui ea officia nostrud quis proident.

Cupidatat commodo et culpa incididunt eu cillum quis. Veniam mollit commodo officia aliqua dolor incididunt Lorem non. Qui amet exercitation proident ipsum.</p>
     case 2 : return <p>Minim mollit ex Lorem excepteur sint excepteur. Tempor est tempor enim sit excepteur. Nulla reprehenderit ipsum et sunt velit. Aliquip cupidatat aliqua Lorem ipsum adipisicing irure in.

Veniam duis mollit adipisicing est Lorem veniam elit eu enim reprehenderit fugiat non voluptate laborum. Voluptate eu eiusmod non proident non veniam. Veniam dolor ut culpa voluptate laboris consequat et fugiat occaecat dolore commodo laboris veniam eu. Minim veniam laboris ea ad irure non qui. Irure sit nisi officia velit enim commodo non ullamco irure laboris commodo elit eiusmod. Sit et amet est officia ex est. Est tempor mollit commodo incididunt.

Lorem irure excepteur proident sunt tempor tempor. Anim culpa magna quis nulla Lorem nostrud officia adipisicing. Laboris Lorem velit cillum cillum Lorem enim culpa officia id proident nisi id consequat. Minim minim Lorem adipisicing velit consequat in.

Aliquip sunt nulla esse enim sunt do incididunt elit. Ad ullamco id excepteur ea amet sint labore sit dolor. Aliqua et est qui proident voluptate velit sint. Veniam sunt sint id consequat aute sint exercitation irure. Ullamco sunt commodo sunt sint ea minim elit aliquip non. Consectetur qui ad qui nisi sit ea laborum quis excepteur consectetur eu cillum. Ullamco veniam cupidatat fugiat culpa commodo commodo mollit ex occaecat est reprehenderit.</p>
     case 3 : return <p>Reprehenderit nulla excepteur tempor ad laboris anim irure irure adipisicing ipsum adipisicing sit. Officia ipsum aute ea excepteur consectetur eiusmod est ea officia nostrud. Mollit dolore ex consequat non sunt ea duis exercitation adipisicing nulla officia deserunt tempor sit. Ea minim ullamco tempor ipsum officia aute laborum. Aliquip veniam dolore amet ullamco. Proident nulla duis amet do Lorem exercitation Lorem sint voluptate in Lorem dolore exercitation. Aliquip do irure dolor eu anim ex non dolor mollit magna adipisicing proident.

Laborum do incididunt id commodo eu pariatur deserunt proident amet eu nisi. Duis ex labore deserunt labore. Tempor proident aliquip commodo cupidatat dolore. Nulla minim magna culpa ex duis mollit eiusmod.

Consequat incididunt et officia laborum ullamco anim occaecat velit. Consequat do sint cillum est ut adipisicing esse magna pariatur proident do. Deserunt excepteur sit culpa elit officia nisi. In excepteur mollit eiusmod consequat fugiat duis aute. Qui Lorem amet ex nulla. Laboris enim nisi culpa incididunt sint deserunt amet cupidatat et pariatur aliqua.
     </p>
     default : return 1
 }
 }
    const [view, setView] = useState(1)
return(<div>
    <button onClick={() => setView(1)}>1</button>
    <button onClick={() => setView(2)}>2</button>
    <button onClick={() => setView(3)}>3</button>
    {renderSwitch(view)}
</div>)
}

export default TabularView