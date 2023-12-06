const getLocal = () => {
    let response = localStorage.getItem("jwtToken")
    return response;
}

export default getLocal;