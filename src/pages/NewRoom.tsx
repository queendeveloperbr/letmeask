//import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button'

import '../styles/auth.scss';

export function NewRoom() {
  // const { user } = useAuth()

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas." />
        <strong> Toda pergunta tem uma resposta. </strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logomarca da letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input 
             type="text"
             placeholder="Nome da sala"
            />
            <Button type="submit">
             Criar sala
            </Button>     
          </form>
          <p>
            Quer entrar em uma sala já existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}