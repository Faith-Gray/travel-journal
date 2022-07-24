import './App.css'
import Card from './Card'
import Nav from './Nav'
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.key}
            img={item.coverImg}
            view={item.view}
            description={item.description}
            date={item.date}
        />
    )
  })        

  return (
      <div>
          <Nav />
          <section className="cards-list">
            {cards}
          </section>
      </div>
  )
}

export default App
