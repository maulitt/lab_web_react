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
          <div id="regi">
          <div className="registration">
              <h1>Sign up</h1>
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
              <p><b>Ваш логин (e-mail)</b><br />
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
          </div>
      </form>
      );
}

function Auth() {
    const [email, setEmail] = useState("email");
    const [password, setPassword] = useState("password");
    const submit = (e) => {
        e.preventDefault();
        alert(password+' '+email);
    }
    return (
        <form onSubmit={submit}>
            <div className="registration">
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


const Routes = {
  "/": () => <Main />,
  "/register": () => <Register />,
  "/auth": () => <Auth />
}


function App() {
  const results = useRoutes(Routes);
  return (
      <div className="App">
          <ul>
              <li><a href="/">Main</a></li>
              <li><a href="/register">Registration</a></li>
              <li><a href="/auth">Authentication</a></li>
          </ul>
        {results}
      </div>
  );
}

export default App;
