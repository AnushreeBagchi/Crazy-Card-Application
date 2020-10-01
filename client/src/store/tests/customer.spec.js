import { addCustomer } from "../actions/customer";
import configureStore from "../configureStore";


describe("Tests for Customer", ()=> {
    let store;
    beforeEach(()=>{
        store = configureStore();
    });

    it("Should add customer",  () => {
        const fake = { "name":"John" };
        
        store.dispatch(addCustomer(fake));
        
        expect(store.getState().customer).toEqual(fake);
    });
   
});