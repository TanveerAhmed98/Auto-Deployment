const counterReducer = (state=0, action) => {
   switch (action){
       case 'INCREMENT':
       return state + 1
   }
}
export default counterReducer;
