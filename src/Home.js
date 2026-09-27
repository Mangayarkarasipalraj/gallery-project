import ImageCard from "./components/ImageCard";

import one from "./assets/images/one.jpg";
import two from "./assets/images/two.jpg";
import three from "./assets/images/three.jpg";
import four from "./assets/images/four.jpg";
import five from "./assets/images/five.jpg";
import six from "./assets/images/six.jpg";

function Home() {

    const images = [
        {
            image: one,
            title: "Nature1",
            description: "Experience the Nature"
        },

        {
            image: two,
            title: "Nature2",
            description: "Enjoy The Nature"
        },

        {
            image: three,
            title: "Nature3",
            description: "Feel the beauty of nature"
        },

        {
            image: four,
            title: "Nature4",
            description: "Discover the energy of nature."
        },

        {
            image: five,
            title: "Nature5",
            description: "Explore amazing natures."
        },

        {
            image: six,
            title: "Nature6",
            description: "Feel the beauty and freshness of nature."
        }
    ];

    return (
        <div className="home">

            <header className="hero">
                <h1>World Of Nature</h1>
                <p>Enjoy the Nature Around Us</p>
            </header>

            <section className="gallery">

                {
         images.map(function(item) {
           return (
         <ImageCard
      image={item.image}
           title={item.title}
         description={item.description}
            />
          );
        })
       }

            </section>



      <footer className="footer">  
  <div className="footer-content">  
    <h2>Dynamic Image</h2> <p>Explore beautiful images from around the world.
        </p>  



<p className="copyright">  
  © 2026 World Of Nature. All Rights Reserved.  
</p>

  </div>  
</footer>      

        </div>
    );
}

export default Home;
