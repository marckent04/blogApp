import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input() titre:string;
  @Input() contenu:string;
  @Input() datePost:string;
  likes:number = 0;

  moreLikes () {
    this.likes++;
  }
  dislike() {
    this.likes--;
  }
  constructor() { }

  ngOnInit() {
  }


}
