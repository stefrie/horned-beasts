// --------------Lab 02------------//
// function Footer(props) {
//     return <h2>By acclaimed author {this.props.author}</h2>;
// }

// export default Footer;

function Footer(props) {
    return (
        <>
            <footer>
                <h3>Author: {props.author}</h3>
            </footer>
        </>
    );
}

export default Footer;
