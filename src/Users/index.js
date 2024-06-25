// import { useGetUsers } from './hooks/useGetUsers';
// import UserCard from '../Atoms/UserCard';
// import './index.css';


// const Users = () =>{

//     const {users, loading,error} = useGetUsers();
//     console.log('users...', users);

//     return(
//         <div className='user-details'>
//             {loading && <h2>Loading users...</h2>}
//             {users.length > 0  && !loading
//             ? users.map((user) =>(
//                 <UserCard 
//                 image = {user.image}
//                 fullName={`${user.firstName} ${user.lastName}`}
//                 key = {user.id}
//                 />
//             )) 
//             : !loading && <h2>No users found</h2>}
//               {error.length > 0 && <h2>Error: {error}</h2>}
//         </div>
//     );
// };

// export default Users;

import { useGetUsers } from "./hooks/useGetUsers";
import UserCard from "../Atoms/UserCard";
import "./index.css"
import {Link} from 'react-router-dom';




const Users = () =>{
   const {users,error,loading} =useGetUsers();
   console.log({users});
   return(
       <div className="images">
           {loading && <h2>loading users ...</h2>}
           {error.length> 0 && <h2>{error}</h2>}
           {users.length > 0 ? (
                        <div className="users-grid">
                        {users.map((user) => (
                            <Link to={`/user/${user.id}`} key={user.id} className="user-link">
                                <UserCard
                                    image={user.image}
                                    fullName={`${user.firstName} ${user.lastName}`}
                                />
                            </Link>
                        ))}
                    </div>
                ) : (
                    !loading && <h2>No users found</h2>
                )}
            </div>
        );
    };


          
export default Users;