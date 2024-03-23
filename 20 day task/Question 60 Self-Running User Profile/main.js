var userProfile = function () {
    var name = "Shoaib";
    var age = 18;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age:").concat(age));
        }
    };
}();
userProfile.displayInfo();
