async function get(url) {
    const res = await fetch() 
    const data = await res.json()
    return data
}


async function showData() {
    const data = await get(url) 
}