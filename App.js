import React from "react";
import ReactDOM from "react-dom/client";
// const heading = document.createElement("h1"); heading.innerHTML = "Hellow
// world" const root = document.getElementById('root')
// root.appendChild(heading);
// const parent = React.createElement("div", {
//     id: "parent"
// }, [React.createElement("div", {
//     id: "child1"
// }, [
//     React.createElement("h1", {
//         id: "heading"
//     }, "I am here"),
//     React.createElement("h1", {
//         id: "heading"
//     }, "I am here")
// ]), React.createElement("div", {
//     id: "child2"
// }, [
//     React.createElement("h1", {
//         id: "heading"
//     }, "I am here 2"),
//     React.createElement("h1", {
//         id: "heading"
//     }, "I am here 2")
// ])])
// const header = (
//     <h1 id="heading" className="heading">
//         Welcome!💕

//     </h1>)
// const HeadingComponent = () => <h1>React function component</h1>
// const HeadingComponent = () => {
//     return <h1 id="heading" className="heading">React function component😉💲</h1>
// }
// const HeadingComponent1 = () => (
//     <div className="container">
//         <h1 id="heading" className="heading">{header} React function component 😍</h1>
//         <HeadingComponent />
//     </div>
// )
// const heading = React.createElement("h1", { id: "heading" }, "Hello world
// Himanshu");
const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-Stp3j9l7A7FmeODEQvEwQcBTz_-55i1uZrCXG6lyA&s" alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>cart</li>
            </ul>
        </div>
    </div>
)
const RestaurantCard = ({resName,cuisine}) => {
    console.log(resName)
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/6/18937206/8ee3a268f9a33ced56227b415573a6ec_o2_featured_v2.jpg?output-format=webp" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
        </div>
    )
}
const Body = () => (
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurantCard resName="Gulab Sweets and Restaurant" cuisine="North Indian,South Indian,..." />
            <RestaurantCard resName="Sardar Ji Da Dhaba" cuisine="North Indian, Fast Food" />
            <RestaurantCard resName="Pratigya Hotel" cuisine="North Indian, Chinese, Sha..." />
            <RestaurantCard resName="JGF Jugnu Grill Flame" cuisine="North Indian, Rolls, Momos" />
            <RestaurantCard resName="McDonald's" cuisine="Burger, Fast Food, Bevera..." />
            <RestaurantCard resName="Da Pizza Hub" cuisine="Pizza, Fast Food, Burger, ..." />
        </div>
    </div>
)
const AppLauout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLauout />);