import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() title:string;
  @Input() content:string;


  posts = [
    {
      title: 'Un petit commentaire',
      content: 'Vraiment la bouffe c\'est de la merde a poumRestau',
      loveIts: 0,
      created_at: new Promise(
        (resolve, reject) => {
          const date = new Date();
          setTimeout(
            () => {
              resolve(date);
            }, 2000
          )
        }
      )
    },
    {
      title: 'Deliicieux',
      content: 'Ah ouais j\'ai beaucoup aime la pizza de pizzaPalace',
      loveIts: 0,
      created_at: new Promise(
        (resolve, reject) => {
          const date = new Date();
          setTimeout(
            () => {
              resolve(date);
            }, 2000
          )
        }
      )
    },
    {
      title: 'Bientot',
      content: 'Envie de manger la recette secret extra piquante de PiquanceRestau',
      loveIts: 0,
      created_at: new Promise(
        (resolve, reject) => {
          const date = new Date();
          setTimeout(
            () => {
              resolve(date);
            }, 2000
          )
        }
      )
    }
  ];
}
