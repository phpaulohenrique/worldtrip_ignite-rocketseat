

interface IContinent {
    name: string;
    uid: string;
    imgUrl: string;
    description: string;
}


const generateUid = (name: string) => {
    const regexRemoveSpecial = /[^a-zA-Z\s]/g;
    const regexRemoveWhiteSpace = /\s/g;

    const uid = name
        .toLowerCase()
        .normalize("NFD")
        .replace(regexRemoveSpecial, "")
        .replace(regexRemoveWhiteSpace, "-");

    return uid;
};

export const continentsData = [
    {
        name: "América do Norte",
        imgUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        description: "O Continente mais antigo",
    },

    {
        name: "América do Sul",
        imgUrl: "https://images.unsplash.com/photo-1591533985302-42123fa9240b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        description: "O Continente mais antigo",
    },

    {
        name: "Ásia",
        imgUrl: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "O Continente mais antigo",
    },

    {
        name: "África",
        imgUrl: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        description: "O Continente mais antigo",
    },
    {
        name: "Europa",
        imgUrl: "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "O Continente mais antigo",
    },
    {
        name: "Oceania",
        imgUrl: "https://images.unsplash.com/photo-1493329306594-38b6b1cd381f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        description: "O Continente mais antigo",
    },
];




export const continents: IContinent[] = continentsData.map(continent => {
    return {
        name: continent.name,
        uid: generateUid(continent.name),
        imgUrl: continent.imgUrl,
        description: continent.description,
    }
})

// console.log(continents)
