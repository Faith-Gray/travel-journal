export default function Card(props) {

    return (
        <div className="card">
            <p>{props.title}</p>
            <p>{props.view}</p>
            <p>{props.date}</p>
            <p>{props.description}</p>

        </div>
    )
}

// id: 1,
// title: "Minneapolis, MN",
// view: "View on Google Maps",
// description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis et ullam rem quo voluptatem ut, ipsum necessitatibus dolore esse ea corporis aliquid culpa quod. Doloremque, dolore! Nesciunt voluptatum tempore tenetur reiciendis repellendus!",
// date: "January 20th, 2022",
// // coverImg: "minneapolis.png",

// key={item.key}
// img={item.coverImg}
// title={item.title}
// view={item.view}
// description={item.description}
// date={item.date}