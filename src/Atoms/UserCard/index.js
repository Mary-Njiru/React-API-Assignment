import './index.css';

const UserCard = ({image, fullName, age, gender, email})=>{
    return (
        <div>
            <img src = {image} alt = {`${fullName} profile`}/>
            <h2>{fullName}</h2>
        </div>
    );

};
export default UserCard;


