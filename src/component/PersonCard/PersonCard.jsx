import style from "./PersonCard.module.css";

const PersonCard = (props) => {
    const { person } = props;
    return <div className={style.container} >
        <h1>{person.first_name}</h1>
        <h1>{person.last_name}</h1>
        <h2>{person.email}</h2>
        <img className={style.img} src={person.avatar} />
    </div>
}
export default PersonCard