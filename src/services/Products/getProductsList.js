 const getProductsList = async query => {
    try {
        const response = await fetch('https://miszmasz-e885f.firebaseio.com/api.json');

        return response.json();
    } catch (error) {
        console.log(error);
    }
};

export { getProductsList };