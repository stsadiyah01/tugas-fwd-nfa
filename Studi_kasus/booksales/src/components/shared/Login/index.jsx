const LoginForm = () => {

    const style = {
        form:{
            display:"flex",
            flexDirection:"column",
            gap:"10px",
            maxWidth:"300px",
            margin:"auto"},
        input:{
            padding:"10px",
            fontSize:"16px",
            border:"1px solid #ccc",
            borderRadius: "5px",
        },
        button:{
            padding:"10px",
            backgroundColor: "#007bff",
            color:"white",
            border:"none",
            borderRadius: "5x",

        },
    };

    return (
        <div>
        <h3>Login</h3>
        <p>Masukkan akun yang telah terdaftar</p>
        <form style={style.form}>
            <input style={style.input} type="text" placeholder="Username" />
            <input style={style.input} type="email"  placeholder="Email"/>
            <input style={style.input} type="password" placeholder="Password" />
            <button style={style.button}>Login</button>
        </form>
        </div>
    );
};

export default LoginForm;