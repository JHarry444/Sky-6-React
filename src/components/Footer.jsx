const getTime = () => new Date().toISOString();

const Footer = () => {
    return (
        <footer>
            <small>Th-th-th-th-that's all folks!</small>
            <p>getTime()</p>
            <p>{getTime()}</p>
        </footer>
    )
}

export default Footer;