var cards = require("./cards.json").cards;
module.exports = {
    getCards : function () {
        return cards
    },

    getAvailableCards : function (data) {
      return cards.filter(card => card.min_income <= data.income)
            .filter(card=> card.empStatus == null || card.empStatus === data.empStatus);
     
    }
  }
