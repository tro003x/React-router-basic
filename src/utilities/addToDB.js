import { stringify } from "postcss";

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
export {addToStoreDB};