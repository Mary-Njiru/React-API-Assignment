import './index.css';

const UserCard = ({image, fullName, id})=>{
    return (
        <div className='user-card'>
            <img src = {image} alt = {`${fullName} profile`}/>
            <h3>{fullName}</h3>
        </div>
    );

};
export default UserCard;


