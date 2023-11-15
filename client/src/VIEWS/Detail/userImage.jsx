import { useGetUserByIdQuery } from "../../libs/redux/services/usersApi";
import { Spin, Alert } from "antd";

const UserImage = ({ id }) => {

    const { data: user, isLoading, isError } = useGetUserByIdQuery(id);

return(
    <div>
        {isLoading 
        ? <Spin><div className="content"/></Spin>
        : isError || !user || user === null || user === undefined
        ?  <Alert message="Error" description="" type="error"showIcon/>
        :<img src={user.image} alt={user.name} />}
    </div>
);

}

export default UserImage;