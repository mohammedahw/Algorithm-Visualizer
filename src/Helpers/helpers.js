export const getArrayLength = () => {
    return document.body.offsetWidth * 0.09
}

export const sleep = (time) => {
    return new Promise((callback) => {
        setTimeout(() => {
            callback()
        }, time)
    })
}