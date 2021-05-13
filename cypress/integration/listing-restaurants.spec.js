import RestaurantList from "../../src/components/RestaurantList";

describe("Listing Restaurants", () => {
  it("shows restaurants from the server", () => {
    const sushiPlace = "Salad Place";
    const pizzaPlace = "Pasta Place";

    cy.server({force404: true});

    cy.route({
      method: "GET",
      url: "https://outside-in-dev-api.herokuapp.com/ZD6lbDGw1oKtTG4fymQl01VsZcPWClLq/restaurants",
      reponse: [
        {id: 1, name: sushiPlace},
        {id: 2, name: pizzaPlace},
      ],
    });

    cy.visit("/");
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
