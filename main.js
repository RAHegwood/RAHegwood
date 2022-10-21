class MyHeader extends HTMLElement {
    connectedCallback()  {
        this.innerHTML = `
        <header>
        <nav>
            <div class="logo">
            <img src="/images/Utsukushima red gate ink.svg"alt="GateIcon" id="Gate" height="100px">
                <h4>Robert A. Hegwood</h4>
            </div>
            <ul class="nav-links">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <div class="dropdown-menu">
                    <button class="menu-btn">Data</button>
                    <div class="menu-content">
                        <a class="links" href="SQL.html">
                            SQL Projects</a>
                        <a class="links" href="R.html">R Projects</a>
                        <a class="links" href="python_projects.html">Python</a>
                        <a class="links" href="tableau.html">Tableau</a>
                        <a class="links" href="network_analysis.html">Network Analysis</a>
                    </div>
                </div>
                <li>
                    <a href="research.html">Research</a>
                </li>
                <div class="dropdown-menu">
                    <button class="menu-btn">Projects</button>
                    <div class="menu-content">
                        <a class="links" href="Nikkei_Histories/Nikkei_home.html">
                            Nikkei Histories</a>
                    </div>
                </div>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
        </header> 
        `
    }
}
customElements.define('my-header', MyHeader)

class NkHeader extends HTMLElement {
    connectedCallback()  {
        this.innerHTML = `
        <header>
        <nav>
            <div class="logo">
            <img src="/images/Utsukushima red gate ink.svg" alt="GateIcon" id="Gate" height="100px">
           
                <h4>Nikkei Histories</h4>
            
            </div>
            <ul class="nav-links">
                <li>
                    <a href="../index.html">Home</a>
                </li>
                <!--
                <div class="dropdown-menu">
                    <button class="menu-btn">Data</button>
                    <div class="menu-content">
                        <a class="links" href="SQL.html">
                            SQL Projects</a>
                        <a class="links" href="R.html">R Projects</a>
                        <a class="links" href="python_projects.html">Python</a>
                        <a class="links" href="tableau.html">Tableau</a>
                        <a class="links" href="network_analysis.html">Network Analysis</a>
                    </div>
                </div>
                -->
                <li>
                    <a href="../research.html">Research</a>
                </li>
                <!--
                <li>
                    <a href="/html/projects.html">Projects</a>
                </li>
                -->
                <div class="dropdown-menu">
                    <button class="menu-btn">Nikkei Histories</button>
                    <div class="menu-content">
                        <a class="links" href="Nikkei_home.html">Nikkei Histories Home</a>
                        <a class="links" href="Nikkei_sources.html">
                            Sources</a>
                        <a class="links" href="Nikkei_digital_archives.html">Digital Archives</a>
                        <a class="links" href="Nikkei_online_newspapers.html">Online Newspapers</a>
                        <a class="links" href="Nikkei_archives_US.html">Archives US</a>
                        <a class="links" href="Nikkei_archives_japan.html">Archives Japan</a>
                        <a class="links" href="Nikkei_bibliographies.html">Bibliographies</a>
                    </div>
                </div>        

                
                <li>
                    <a href="../contact.html">Contact</a>
                </li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
        </header> 
        `
    }
}
customElements.define('nk-header', NkHeader)
/*I had to change header name from HeaderNK to NkHeader because the names were too similar.  */

class MyFooter extends HTMLElement {
    connectedCallback()  {
        this.innerHTML = `
        <footer id="footer" role="contentinfo">
            <div id="siteInfo">
                    <a href="mailto:contact@rahegwood.com" class="site-email">
                    <span>contact@rahegwood.com</span></a>
            </div>
            <div class="icons" alt="Social Media Icons">
                <a href="https://www.instagram.com/rhegwood/" class="icon icon--instagram" target="_blank" rel="noopener noreferrer" alt="Instagram Profile Link">
                    <i class="ri-instagram-line"></i>
                </a>
                <a href="https://twitter.com/RAHegwood" class="icon icon--twitter" target="_blank" rel="noopener noreferrer" alt="Twitter Profile Link">
                    <i class="ri-twitter-line"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/rahegwood/" class="icon icon--linkedin" target="_blank" rel="noopener noreferrer" alt="Linked-in Profile Link">
                    <i class="ri-linkedin-line"></i>
                  </a>
                  <a href="https://github.com/RAHegwood" class="icon icon--github" target="_blank" rel="noopener noreferrer" alt="Gtihub Profile Link">
                    <i class="ri-github-line"></i>
                  </a>    
            </div>
            
              <!-- target="_blank" opens new window, noopener helps remove a vulnerability this causes -->
            <div id="copyrt">&copy Copyright Robert Hegwood, 2022</div>     
        </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    // Set nav active status with boolean
    let isActive = false;
    console.log("nav-active : " + isActive)
    

    burger.addEventListener("click", ()=>{

        //Toggle nav
        nav.classList.toggle("nav-active");

        // Toggle nav active status to true/false
        isActive = !isActive;
        console.log("nav-active : " + isActive)
        
        //Animate link
        navLinks.forEach((link, index)=>{
            if(isActive) {
                link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
                console.log("nav li: "+ index + " in");
            } else {
                // link.style.animation = "";
                link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
                // link.style.animation = "";
                console.log("nav li: "+ index + " out");
            }
            console.log(link.style.animation);
        });
        
        //Burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();


class EditHeader extends HTMLElement {
    connectedCallback()  {
        this.innerHTML = `
        <header>
        <nav>
            <div class="logo">
            <img src="/images/Utsukushima red gate ink.svg" alt="GateIcon" id="Gate" height="100px">
           
                <h4>Nikkei Histories</h4>
            
            </div>
            <ul class="nav-links">
                <li>
                    <a href="../index.html">Home</a>
                </li>
                <!--
                <div class="dropdown-menu">
                    <button class="menu-btn">Data</button>
                    <div class="menu-content">
                        <a class="links" href="SQL.html">
                            SQL Projects</a>
                        <a class="links" href="R.html">R Projects</a>
                        <a class="links" href="python_projects.html">Python</a>
                        <a class="links" href="tableau.html">Tableau</a>
                        <a class="links" href="network_analysis.html">Network Analysis</a>
                    </div>
                </div>
                -->
                <li>
                    <a href="../research.html">Research</a>
                </li>
                <!--
                <li>
                    <a href="/html/projects.html">Projects</a>
                </li>
                -->
                <div class="dropdown-menu">
                    <button class="menu-btn">Nikkei Histories</button>
                    <div class="menu-content">
                        <a class="links" href="Nikkei_home.html">Nikkei Histories Home</a>
                        <a class="links" href="Nikkei_sources.html">
                            Sources</a>
                        <a class="links" href="Nikkei_digital_archives.html">Digital Archives</a>
                        <a class="links" href="Nikkei_online_newspapers.html">Online Newspapers</a>
                        <a class="links" href="Nikkei_archives_US.html">Archives US</a>
                        <a class="links" href="Nikkei_archives_japan.html">Archives Japan</a>
                        <a class="links" href="Nikkei_bibliographies.html">Bibliographies</a>
                    </div>
                </div>        

                
                <li>
                    <a href="../contact.html">Contact</a>
                </li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
        </header> 
        `
    }
}
customElements.define('edit-header', EditHeader)