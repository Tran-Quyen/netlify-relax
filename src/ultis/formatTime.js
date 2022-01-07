const formatTime = (time) => {
    if (typeof time !== 'number') return;
    const minutes = `0${Math.floor(time / 60)}`.slice(-2);
    const seconds = `0${Math.ceil(time - minutes * 60)}`.slice(-2);
    return `${minutes}:${seconds}`;
}

export default formatTime