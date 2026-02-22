:root {
    --primary: #0b192c;
    --secondary: #1a365d;
    --accent: #f59e0b;
    --text-light: #ffffff;
    --text-dark: #1f2937;
    --bg-light: #f3f4f6;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', system-ui, sans-serif;
    scroll-behavior: smooth;
}

body {
    background-color: var(--primary);
    color: var(--text-dark);
    line-height: 1.6;
}

/* HEADER */
header {
    background-color: rgba(11, 25, 44, 0.95);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 5%;
    gap: 3rem;
}

.logo {
    color: var(--text-light);
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.logo span {
    color: var(--accent);
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
}

.nav-links a {
    color: var(--text-light);
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--accent);
}

/* HERO IMAGE */
#home {
    height: 100vh;
    background: linear-gradient(rgba(11, 25, 44, 0.6), rgba(11, 25, 44, 0.6)),
        url('https://www.canadianenergycentre.ca/wp-content/uploads/2021/05/sunrise-bp-1920x1080-c-default.jpg')
        center/cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--text-light);
}

#home h1 {
    font-size: 5rem;
    font-weight: 900;
    text-shadow: 2px 4px 10px rgba(0,0,0,0.5);
    margin-bottom: 1rem;
}

#home p {
    font-size: 1.5rem;
    color: var(--accent);
    font-weight: 600;
}

/* SECTION LAYOUT */
section {
    min-height: 80vh;
    display: flex;
    align-items: stretch;
}

.content-half {
    flex: 1;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.image-half {
    flex: 1;
    background-size: cover;
    background-position: center;
}

/* HEADINGS */
h2 {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
    border-bottom: 4px solid var(--accent);
    display: inline-block;
    padding-bottom: 0.5rem;
}

p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
}

/* ABOUT */
#about {
    background-color: var(--bg-light);
}

#about .image-half {
    background-image: url('https://as1.ftcdn.net/v2/jpg/06/46/97/56/1000_F_646975685_RHyNTOqNi07adnumeASrvcIO1k8BPfst.jpg');
}

/* MISSION */
#mission {
    background-color: var(--text-light);
    flex-direction: row-reverse;
}

#mission .image-half {
    background-image: url('https://thumbs.dreamstime.com/b/steel-long-pipes-crude-oil-factory-sunset-gas-pipeline-background-high-quality-photo-ai-generated-338472546.jpg');
}

/* SERVICES */
#services {
    background: linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.9)),
        url('https://png.pngtree.com/thumb_back/fh260/background/20240426/pngtree-a-closeup-of-pipelines-in-oil-and-gas-engineering-and-industrial-image_15671495.jpg')
        center/cover no-repeat;
    flex-direction: column;
    padding: 5rem 5%;
    color: var(--text-light);
    text-align: center;
}

#services h2 {
    color: var(--text-light);
    margin: 0 auto 3rem auto;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
}

.service-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.2);
}

.service-img {
    height: 200px;
    width: 100%;
    object-fit: cover;
}

.service-text {
    padding: 2rem;
}

.service-text h3 {
    color: var(--accent);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

/* CONTACT */
#contact {
    background-color: var(--primary);
    color: var(--text-light);
    padding: 5rem 5%;
    text-align: center;
    display: block;
}

#contact h2 {
    color: var(--text-light);
}

.contact-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 3rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 3rem;
    border-top: 4px solid var(--accent);
}

.contact-info h3 {
    color: var(--accent);
    margin-bottom: 0.5rem;
}

footer {
    margin-top: 4rem;
    font-size: 0.9rem;
    color: #888;
}
