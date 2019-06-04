import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../model/member';


@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
  @Input() person: Member;
  constructor() { }

  ngOnInit() {
  }

}