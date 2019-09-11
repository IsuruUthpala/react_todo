
class Storage {


    // Adding a method to the constructor
    getStorage(arg1) {
        return window.localStorage.getItem(arg1);

    }

    setStorage(arg1, arg2) {

        window.localStorage.setItem(arg1, JSON.stringify(arg2));


    }



}
export const getStorage = (n) => {
    return window.localStorage.getItem(n);
}
export const setStorage = (n, y) => {
    window.localStorage.setItem(n, JSON.stringify(y));
}



