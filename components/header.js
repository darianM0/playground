class Header extends HTMLElement {
    constructor() {
      super();
    }


  connectedCallback() {
    this.innerHTML = `
        <style>
            nav {
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color:  #0a0a23;
            }

            ul {
                padding: 0;
            }
            
            a {
                font-weight: 700;
                margin: 0 25px;
                color: #fff;
                text-decoration: none;
            }
            
            a:hover {
                padding-bottom: 5px;
                box-shadow: inset 0 -2px 0 0 #fff;
            }
        </style>

        <header>
            <nav class="navbar">
                <a hrer="#" class="nav-branding">DEEJAY'S PLAYGROUND</a>

                <ul class="nav-menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Recipes</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Beer</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Video Games</a>
                    </li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </header>
    `;
  }
}

  customElements.define('header-component', Header);