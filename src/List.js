export const List = (props) => {
    console.log(props);
    return (
        <>
        <p>{props.message}</p>
        <ul>
            { props.items.map(item => <li>{item}</li>)}
        </ul>
        </>
    );
};