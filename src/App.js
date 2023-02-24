import { useState } from "react";
import "./App.css";
import AddMovie from "./Components/AddMovie";
import Home from "./Components/Home";
import MovieList from "./Components/MovieList";
import Navbar from "./Components/Navbar";

function App() {
  const [movies,setMovies]=useState([
    {
      name:"Game Of Thrones",
      genre:"Action, Adventure, Fantasy",
      image:"https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
      description:"Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.",
      rate:"4.5",
    },
    {
      name:"Breaking Bad",
      genre:"Thriller, Drama, Suspense, Crime film",
      image:"https://www.themoviedb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      description:"Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.",
      rate:"5",
      
    },
    {
      name:"Vikings",
      genre:" War, Adventure, Miniseries, Historical Fiction, Action fiction",
      image:"https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      description:"Ragnar Lothbrok, a legendary Norse hero, is a mere farmer who rises up to become a fearless warrior and commander of the Viking tribes with the support of his equally ferocious family.",
      rate:"4",
    },
    {
      name:"Narcos",
      genre:"Crime",
      image:"https://flxt.tmsimg.com/assets/p11993086_b_v12_af.jpg",
      description:"A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
      rate:"4.5",
    },
    {
      name:"Prison Break",
      genre:"Serial drama, Crime drama, Action",
      image:"https://flxt.tmsimg.com/assets/p185128_b_v8_ag.jpg",
      description:"An engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence.",
      rate:"5",
    },
    {
      name:"You",
      genre:"Psychological thriller",
      image:"https://m.media-amazon.com/images/M/MV5BZmUxYTllMzEtNmNmMi00OWNkLTg0ZmItZDdkYTJkOTAxZmJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
      description:"A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
      rate:"1",
    },
    {
      name:"Riverdale",
      genre:"Drama",
      image:"https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/163/334/163334212_23336a.jpg",
      description:"Archie, Betty, Jughead and Veronica tackle being teenagers in a town that is rife with sinister happenings and blood-thirsty criminals.",
      rate:"2.5",
    },
    {
      name:"Carnival Row",
      genre:" Crime film, Urban, Fantasy",
      image:"https://m.media-amazon.com/images/M/MV5BZGY4ZDFiYWYtYzMwZS00ZmVlLWEwOGEtM2I1ZjcxNTFjMTRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg",
      description:"A human detective and a fairy rekindle a dangerous affair in a Victorian fantasy world, where the city's uneasy peace collapses when a string of murders reveals an unimaginable monster.",
      rate:"4",
    },
    {
      name:"Behind Her Eyes",
      genre:"Psychological thriller",
      image:"https://m.media-amazon.com/images/M/MV5BMDk2Njg0ZTUtNTFjZS00NzUwLWEwZDQtZTg5MDZiMmJhNGEzXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_FMjpg_UX1000_.jpg",
      description:"A single mother enters a world of twisted mind games when she begins an affair with her psychiatrist boss while secretly befriending his mysterious wife.",
      rate:"3.5",
    },
    {
      name:"My Name",
      genre:" Action, Noir, Crime film",
      image:"https://flxt.tmsimg.com/assets/p20665682_b_v13_aa.jpg",
      description:"Following her father's murder, a revenge-driven woman puts her trust in a powerful crime boss -- and enters the force under his direction.",
      rate:"4",
    },
    {
      name:"Shaft",
      genre:" Action",
      image:"https://m.media-amazon.com/images/M/MV5BNmExNGZmYzItZTMzMi00YWJjLWJkYmQtMDg5MjgzYjYyZDk1XkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_.jpg",
      description:"John Shaft Jr. may be an FBI cyber security expert, but to uncover the truth behind his best friend's untimely death, he needs an education that only his dad can provide. Absent throughout his childhood.",
      rate:"5",
    },
    {
      name:"Bay Watch",
      genre:"Comedy",
      image:"https://m.media-amazon.com/images/I/A13tucXoWlL._AC_SL1500_.jpg",
      description:"Lifeguard Mitch Buchannon and his team discover a drug racket involving businesswoman Victoria Leeds and decide to unearth the truth and bring the perpetrators to justice.",
      rate:"3.5",
    },
    {
      name:"Jumanji",
      genre:"Comedy, Kids, Adventure",
      image:"https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/jumanjithenextlevel_onesheet_1400x2100.jpg?itok=1_kQc_Bz",
      description:"When Spencer goes missing, his group of friends return to Jumanji to travel unexplored territories and help him escape the world's most dangerous game.",
      rate:"5",
    },
    {
      name:"Avengers",
      genre:" Action, Super Hero, Fantasy, Adventure, Science Fiction",
      image:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      description:"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      rate:"3",
    },
    {
      name:"Noura's Dream",
      genre:"Drama, Sex",
      image:"https://www.avoir-alire.com/local/cache-vignettes/L672xH911/1884265.jpg-r_1920_1080-f_jpg-q_x-xxyxx-a75a5.jpg?1578283496",
      description:"Noura's Dream is a 2019 Tunisian drama film directed by Hinde Boujemaa and co-produced by Marie Besson, François d'Artemare, Tatjana Kozar, Imed Marzouk and Samuel Tilman for Propaganda.",
      rate:"1.5",
    },

  ])
  const [new_movie,setNew_Movie]=useState({
    name:"",
    genre:"",
    image:"",
    description:"",
    rate:"",
  });
  const addmovi=()=>{setMovies([...movies,new_movie])}
  const [show,setShow]=useState(false);
  const [search, setSearch] = useState("");
  function handleInputChange(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="App">
      <AddMovie show={show} setShow={setShow} new_movie={new_movie} setNew_Movie={setNew_Movie} addmovi={addmovi} />
      <Navbar show={show} setShow={setShow} handleInputChange={handleInputChange}/>
      <Home />
      <MovieList movies={movies}  new_movie={new_movie}  search={search} />
      
    </div>
  );
}

export default App;
