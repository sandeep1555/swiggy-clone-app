import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import { fireEvent, render,screen } from "@testing-library/react";

import "@testing-library/jest-dom"

it("should render header with login button ",()=>
{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
     <Header/>
     </Provider>
     </BrowserRouter>
    );

    const loginButton= screen.getByRole("button", {name:"Login"});
    expect(loginButton).toBeInTheDocument();
})


it("should render header with cartitems",()=>
{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
     <Header/>
     </Provider>
     </BrowserRouter>
    );
    const cartitems=screen.getByText("Cart-(0)")
    expect(cartitems).toBeInTheDocument();
})

it("shouldchange login button to welcome,username  on clcik ",()=>
{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
     <Header/>
     </Provider>
     </BrowserRouter>
    );
    const loginbutton=screen.getByRole("button",{name: "Login"});

    fireEvent.click(loginbutton);
    const logoutbutton=screen.getByRole("button",{name:"Welcome,Sandeep"});

    expect(logoutbutton).toBeInTheDocument();
})