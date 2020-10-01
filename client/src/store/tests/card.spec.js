import configureStore from "../configureStore";
import { loadSelectedCards, onCardSelected, onCardRemoved } from '../actions/card';

describe ("Card Tests", ()=> {
    let store;
    beforeEach(() => {
        store = configureStore();
      });

    it("Should load selected cards section",  () => {
        const fake = { selectedCards: [] };
        
        store.dispatch(loadSelectedCards());
        
        expect(store.getState().card).toEqual(fake);
    });

    describe("Selected Cards Tests", ()=> {
        beforeEach(() => {
            store.dispatch(loadSelectedCards());
          });
  
        it("Should select cards on adding", () => {
            const fake = {"name": "Student"};
    
            store.dispatch(onCardSelected(fake));
            
            expect(store.getState().card.selectedCards).toContainEqual(fake);
        });
        it("Should remove cards on clicking Remove", ()=> {
            const fake = {"name": "Student"};
            store.dispatch(onCardRemoved(fake));
            expect(store.getState().card.selectedCards).not.toContainEqual(fake);
        })
    });

})