import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../model/member';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
  @Input() person: Member;
  constructor(private readonly router: Router) { }

  showProfile(): void {
    const navigationExtras: NavigationExtras = {
      state: this.person
    };
    this.router.navigate(['/member/' + this.person.id], navigationExtras);
  }


  ngOnInit() {
  }

}
