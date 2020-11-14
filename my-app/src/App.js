import './App.css';
import {useRoutes} from 'hookrouter';
import {useState} from 'react';

function Main() {
  return <h1>Main page</h1>;
}
function Register() {
    const [name, setName] = useState("Name");
    const [email, setEmail] = useState("email");
    const [password, setPassword] = useState("password");
    const submit = (e) => {
        e.preventDefault();
        alert(name+' '+password+' '+email);
    }
  return (
      <form onSubmit={submit}>
      <div className="registration">
        <p><b>Ваше имя</b> <br />
          <label>
            <input
                value={name}
                name="name"
                type="text" size="40"
                onChange={event => { setName(event.target.value) } }
            />
          </label>
        </p>
        <p><b>Ваш логин (e-mail)</b> <br />
          <label>
            <input
                value={email}
                name="email"
                type="text" size="40"
                onChange={event => { setEmail(event.target.value) } }
            />
          </label>
        </p>
        <p><b>Пароль</b> <br />
          <label>
            <input
                value={password}
                name="password"
                type="text" size="40"
                onChange={event => { setPassword(event.target.value) } }
            />
          </label>
        </p>
          <p><input type="submit" value="Submit" /></p>
      </div>
      </form>
      );
}

function Auth() {
  return (
      <form>
          <div className="authentication">
              <p><b>Ваш логин (e-mail)</b> <br />
                  <label>
                      <input name="email" type="text" size="40" />
                  </label>
              </p>
              <p><b>Пароль</b> <br />
                  <label>
                      <input name="password" type="text" size="40" />
                  </label>
              </p>
              <p><input type="submit" value="Submit" /></p>
          </div>
      </form>
  )
}


const Routes = {
  "/": () => <Main />,
  "/register": () => <Register />,
  "/auth": () => <Auth />
}


function App() {
  const results = useRoutes(Routes);
  return (
      <div className="App">
        <a href="/">Main</a>
        <a href="/register">Registration</a>
        <a href="/auth">Authentication</a>
        {results}
      </div>
  );
}

export default App;
