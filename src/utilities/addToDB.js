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

const addToStoreDB = (id) => {
    const storedBookData = (getStoredBook() || []).map(Number);
    const numericId = Number(id);
    if (storedBookData.includes(numericId)) {
        return { added: false, duplicate: true };
    }
    storedBookData.push(numericId);
    localStorage.setItem("readlist", JSON.stringify(storedBookData));
    return { added: true };
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
    const wishlist = (getStoredWishlist() || []).map(Number);
    const numericId = Number(id);
    if (wishlist.includes(numericId)) {
        return { added: false, duplicate: true };
    }
    wishlist.push(numericId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    return { added: true };
};

export { addToStoreDB, getStoredBook, getStoredWishlist, addToWishlistDB };