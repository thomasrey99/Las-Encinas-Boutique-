import { useGetUserByIdQuery } from "../../libs/redux/services/usersApi";

const UserImage = ({ id }) => {

    const { data: user } = useGetUserByIdQuery(id);

return(
    <img src={user.image} alt={user.name} />
);

}

export default UserImage;