import { addCustomer, getValidations } from "../store/actions/customer";
import configureStore from "../store/configureStore";


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
    it("Should add validations to the input fields", ()=>{
        const expected = {"income": "Required"};

        store.dispatch(getValidations());

        expect(store.getState().customer.errors).toMatchObject(expected);

        console.log(store.getState());
    })
});