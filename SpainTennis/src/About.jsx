import "./about.css"

const About = () => {
    return(
        <>
            <div className="cont" style={{width:"100%", backgroundColor:"black", color: "white", height:"100vh", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center"}}>
                <p>About</p>
                <p>This website was created by Samarth Kolanupaka as part of my 11th grade Spanish Enthusiasm Project. As a tennis player, something that I wanted to learn more about is how Spain is able to produce great players every generation. This project gave me an opportunity to explore this, and this website will share what I discovered!</p>
                <a href="https://github.com/samarth212/Spanish-Enthusiasm-Project" target="_blank">Github Link</a>
                <a href="/">Back</a>
            </div>
        </>
       
    )
};

export default About;