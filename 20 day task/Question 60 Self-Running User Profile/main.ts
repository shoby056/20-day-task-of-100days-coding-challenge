// *Question 60:** Self-Running User Profile:
//  Create a quick, self-setup profile for a user
//   that can tell you the user's name and age.

let userProfile=function(){
    let name="Shoaib"
    let age : number=18;

return{
    displayInfo:function() {
        console.log(`Name: ${name}, Age:${age}`);
     }
 };
}();
userProfile.displayInfo();
