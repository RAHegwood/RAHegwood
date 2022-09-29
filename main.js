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