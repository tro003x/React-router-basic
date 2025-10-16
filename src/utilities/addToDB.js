const getStoredBook= () =>{
    const storedBookSTR = localStorage.getItem("readlist")

if(storedBookSTR){
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
}

else{
    return[];
}

}

const addToStoreDB = id =>{

    const storedBookData = getStoredBook();

    if(storedBookData.includes(id)){
        alert("This ID already exists")
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readlist", data)
    }

}


const getStoredWishlist = () => {
    const storedWishSTR = localStorage.getItem("wishlist");
    if (storedWishSTR) {
        try {
            return JSON.parse(storedWishSTR);
        } catch {
            return [];
        }
    }
    return [];
};

const addToWishlistDB = (id) => {
    const wishlist = getStoredWishlist();
    if (wishlist.includes(id)) {
        alert("Already in wishlist");
        return;
    }
    wishlist.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export { addToStoreDB, getStoredBook, getStoredWishlist, addToWishlistDB };