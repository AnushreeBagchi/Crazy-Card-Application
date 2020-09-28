
module.exports = {
    getCards : function (data) {
        return (
            {
                cards: [
                    {
                      id: 1,
                      name: "Student Life Card",
                      image: "../src/images/cards/studentLife.png",
                      apr: "18.9%",
                      balanceOfferDuration: "0 months",
                      purchaseOfferDuration: "6 months",
                      credit: "£1200",
                    },
                    {
                      id: 2,
                      name: "Anywhere Card",
                      image: "../src/images/cards/anywhere.png",
                      apr: "33.9%",
                      balanceOfferDuration: "0 months",
                      purchaseOfferDuration: "0 months",
                      credit: "£300",
                    },
                    {
                      id: 3,
                      name: "Liquid Card",
                      image: "../src/images/cards/liquid.png",
                      apr: "33.9%",
                      balanceOfferDuration: "12 months",
                      purchaseOfferDuration: "6 months",
                      credit: "£3000",
                      minIncome: 16000,
                    },
                  ]
            }
        )
    },

    getCardDetails : function() {
        return ({
            cardDetails: [
                {
                  name: "apr",
                  text: "Representative % APR (variable)",
                },
                {
                  text: "Balance Transfer Offer Duration",
                  name: "balanceOfferDuration",
                },
                {
                  text: "Purchase Offer Duration",
                  name: "purchaseOfferDuration",
                },
                {
                  text: "Credit Available",
                  name: "credit",
                },
              ]
        })
    }
}
    