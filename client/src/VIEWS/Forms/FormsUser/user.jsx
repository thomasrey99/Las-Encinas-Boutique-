const FormUser = () => {
    return (
        <div>
            <h1>Registro de Usuario</h1>
            <form>
                <label htmlFor="name">Nombre: </label>
                <input type="text" />
                <hr />
                <label htmlFor="last_name">Apellido: </label>
                <input type="text" />
                <hr />
                <label htmlFor="address">Dirección: </label>
                <input type="text" />
                <hr />
                <label htmlFor="email">E-Mail: </label>
                <input type="text" />
                <hr />
                <label htmlFor="phone">Teléfono: </label>
                <input type="text" />
                <hr />
            </form>
        </div>
    )
};

export default FormUser;