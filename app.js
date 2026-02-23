const fullName = {
    firstName : "Reda",
    lastName : "Laghrissi"
}
function getName(name){
    return name.firstName +' °° '+name.lastName
}
const testValue = true;
const inslineStyle = {
    color : 'red',
    fontSize : '9px'
}
const element = (
    <div>
        <h1>Hello</h1>
        <h2>World !!</h2>
        <p style={inslineStyle}>Test Paragraph</p>
    </div>
)
ReactDOM.createRoot(document.getElementById('app')).render(element)
console.log('test')