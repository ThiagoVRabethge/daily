'use client';

import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import { useState } from 'react';
import server from '@/services/server';

export default function Home() {
  const [username, setUsername] = useState();

  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    server
      .post('/login', {username: username, password: password})
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  }

  return (
    <div className="container">
      <div className="mb-3 mt-4 text-center">
        <h3>Entrar</h3>
      </div>

      <form onSubmit={(e) => handleLogin(e)}>
        <div className="form-group mb-3 mt-3">
          <label htmlFor="username" className="mb-2">Usuário</label>
          <input 
            name="username" 
            type="text" 
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Doe John" 
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password" className="mb-2">Senha</label>
          <input 
            name="password" 
            type="password" 
            className="form-control"
            onChange={(e) => setPassword(e.target.value)} 
          />

          <div className="mt-2">
            <Link href="/">
              Ainda não possui uma conta?
            </Link>
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-sm btn-success">
            Entrar
          </button>

          <button type="reset" className="btn btn-sm btn-danger ms-2">
            Limpar
          </button>
        </div>
      </form>
    </div>
  )
}
