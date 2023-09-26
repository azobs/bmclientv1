import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Menu} from "./menu";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  public menuProperties: Array<Menu> =
    [
      {
        id: "1",
        title: "Tableau de bord",
        icon:"fa-solid fa-screwdriver-wrench",
        url:"",
        visible:true,
        sousMenu:
          [
            {
              id: "11",
              title: "Entreprises",
              icon:"fa-solid fa-globe",
              url:"enterprises",
              visible:true
            },
            {
              id: "12",
              title: "Devises",
              icon:"fa-solid fa-regular fa-coins",
              url:"",
              visible:true
            },
            {
              id: "13",
              title: "Statistiques",
              icon:"fa-solid fa-chart-simple",
              url:"",
              visible:true
            },
            {
              id: "14",
              title: "Utilisateurs",
              icon:"fa-solid fa-users-line",
              url:"",
              visible:true
            }
          ]
      },
      {
        id: "2",
        title: "Point de vente",
        icon:"fa-solid fa-shop",
        url:"",
        visible:true,
        sousMenu:
          [
            {
              id: "21",
              title: "Categories",
              icon:"fa-solid fa-list",
              url:"",
              visible:true
            },
            {
              id: "22",
              title: "Produits",
              icon:"fa-solid fa-gear",
              url:"",
              visible:true
            },
            {
              id: "23",
              title: "Formats",
              icon:"fa-solid fa-wrench",
              url:"",
              visible:true
            },
            {
              id: "24",
              title: "Fromatage de produit",
              icon:"fa-solid fa-screwdriver",
              url:"",
              visible:true
            },
            {
              id: "25",
              title: "Unite de vente",
              icon:"fa-solid fa-franc-sign",
              url:"",
              visible:true
            },
            {
              id: "26",
              title: "Article",
              icon:"fa-solid fa-cake-candles",
              url:"articles",
              visible:true
            },
            {
              id: "27",
              title: "Fournisseurs",
              icon:"fa-solid fa-truck",
              url:"",
              visible:true
            },
            {
              id: "28",
              title: "Emballage",
              icon:"fa-solid fa-bag-shopping",
              url:"",
              visible:true
            },
            {
              id: "29",
              title: "Point de vente",
              icon:"fa-solid fa-cart-shopping",
              url:"",
              visible:true
            }
          ]
      },
      {
        id: "3",
        title: "Provision",
        icon:"fa-solid fa-boxes-stacked",
        url:"",
        visible:true,
        sousMenu:
          [
            {
              id: "31",
              title: "Arrivage",
              icon:"fa-solid fa-cart-flatbed",
              url:"",
              visible:true
            }
          ]
      },
      {
        id: "4",
        title: "Stock",
        icon:"fa-solid fa-layer-group",
        url:"",
        visible:true,
        sousMenu:
          [
            {
              id: "41",
              title: "Inventaire",
              icon:"fa-solid fa-file-lines",
              url:"",
              visible:true
            }
          ]
      },
      {
        id: "5",
        title: "Ventes",
        icon:"fa-solid fa-pen",
        url:"",
        visible:true,
        sousMenu:
          [
            {
              id: "51",
              title: "Facturation",
              icon:"fa-solid fa-calculator",
              url:"",
              visible:true
            },
            {
              id: "52",
              title: "Chargement",
              icon:"fa-solid fa-car",
              url:"",
              visible:true
            },
            {
              id: "53",
              title: "Livraison",
              icon:"fa-solid fa-car",
              url:"",
              visible:true
            }
          ]
      },
      {
        id: "6",
        title: "Clients/Divers",
        icon:"fa-solid fa-restroom",
        url:"",
        visible:true,
        sousMenu:
          [
            {
              id: "61",
              title: "Clients",
              icon:"fa-solid fa-user",
              url:"",
              visible:true
            },
            {
              id: "62",
              title: "Divers",
              icon:"fa-regular fa-user",
              url:"",
              visible:true
            }
          ]
      }
    ];


  ngOnInit(): void {
  }

  constructor(
    private router: Router
  ) {
  }

  navigate(url?: String):void {
    this.router.navigate([url]);
  }

}
