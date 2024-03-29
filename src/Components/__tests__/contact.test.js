import Contact from "../Contact";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
test("should load contact component",()=>
{
    render(<Contact/>);

    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})
test("should be a button in contact",()=>
{
    render(<Contact/>)

    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

test("should be a input in contact",()=>
{
    render(<Contact/>)

    const input=screen.getByPlaceholderText("Enter name");
    expect(input).toBeInTheDocument();
})

test("should be a button in contact",()=>
{
    render(<Contact/>)

    const input=screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
})