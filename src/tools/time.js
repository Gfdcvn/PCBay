module.exports = (ms = Date.now()) => {
    const date = new Date(ms).toString().split(/ +/);
    return `${date[0]} ${date[2]} ${date[1]} ${date[3]} ${date[4]}`;
}