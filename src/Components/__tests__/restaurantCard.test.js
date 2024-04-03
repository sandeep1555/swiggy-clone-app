import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../Mock/RestaurantCardmock.json";
import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render restaurant card with name",()=>
{
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name=screen.getByText("Shah Ghouse Hotel & Restaurant")
    expect(name).toBeInTheDocument()
})

// it("should render restaurant with promoted label",()=>
// {
//     render(<withPromotedLabel props={<RestaurantCard/>} />)
//     const   label=screen.getByText("Promoted");
//     expect(label).toBeInTheDocument();
// })