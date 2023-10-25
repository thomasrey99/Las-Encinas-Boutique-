const FormUser = () => {
    return (
        <div>
            <h1>Registro de Usuario</h1>
            <form>
                <label htmlFor="name"></label>
                <input type="text" />
                <hr />
                <label htmlFor="last_name"></label>
                <input type="text" />
                <hr />
                <label htmlFor="address"></label>
                <input type="text" />
                <hr />
                <label htmlFor="email"></label>
                <input type="text" />
                <hr />
            </form>
        </div>
    )
};

export default FormUser;