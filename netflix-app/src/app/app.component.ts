import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';
  public isDark: boolean = false;

  public theme: string = "🌙";

  public navBar = [{
    name: "Inicio",
    link: "/"
  },
  {
    name: "Buscar",
    link: "/buscar"
  }
  ]

  public topGallery = {
    title: "Los 5 más populares hoy",
    gallery: [{
      position: 1,
      image: "./assets/images/Top10/1-papel.webp",
      name: "La Casa de Papel"
    },
    {
      position: 2,
      image: "./assets/images/Top10/2-reina.webp",
      name: "La Reina del Flow"
    },
    {
      position: 3,
      image: "./assets/images/Top10/3-titanes.webp",
      name: "Titans"
    },
    {
      position: 4,
      image: "./assets/images/Top10/4-lostinspace.webp",
      name: "Lost in Space"
    },
    {
      position: 5,
      image: "./assets/images/Top10/5-dondecaben.webp",
      name: "Donde Caben"
    }]
  }

  public scifiGallery = {
    title: "Ciencia Ficción",
    gallery: [{
      image: "./assets/images/Sci-fi/6dia.webp",
      name: "6 dia"
    },
    {
      image: "./assets/images/Sci-fi/12monos.webp",
      name: "12 monos"
    },
    {
      image: "./assets/images/Sci-fi/afterearth.webp",
      name: "After Earth"
    },
    {
      image: "./assets/images/Sci-fi/colverparadox.jpg",
      name: "Cloverfield Paradox"
    },
    {
      image: "./assets/images/Sci-fi/core.webp",
      name: "Core"
    },
    {
      image: "./assets/images/Sci-fi/deepimpact.webp",
      name: "Deep Impact"
    }]
  }

  public terrorGallery = {
    title: "Terror",
    gallery: [{
      image: "./assets/images/Terror/apostol.jpg",
      name: "Apostol"
    },
    {
      image: "./assets/images/Terror/calleterror.jpg",
      name: "12 monos"
    },
    {
      image: "./assets/images/Terror/infiernoagua.webp",
      name: "After Earth"
    },
    {
      image: "./assets/images/Terror/insidious2.webp",
      name: "Cloverfield Paradox"
    },
    {
      image: "./assets/images/Terror/life.webp",
      name: "Core"
    },
    {
      image: "./assets/images/Terror/malasana.webp",
      name: "Deep Impact"
    }]
  }

    public changeDark = () => {
    if (this.isDark == false) {
      this.isDark = true;
      this.theme = "☀️"
    }
    else if (this.isDark == true) {
      this.isDark = false;
      this.theme = "🌙"
    }
  }


}


