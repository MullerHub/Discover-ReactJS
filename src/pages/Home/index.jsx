import './styles.css'
import {Card} from '../../Components/Card'

export function Home() {

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input type='text' placeholder="Digite o nome..." />
      <button type="button" >Adicionar</button>
      <Card name="Murilo" time="10:55:25" />
      <Card name="Hortencio" time="11:00:10" />
      <Card name="Rafaela" time="12:10:33" />
    </div>

  )
}
