import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../model/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})

export class MemberListComponent implements OnInit {
  member: Member[];
  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.http.get('../../assets/members.json').subscribe(
        data => {
          this.member = data as Member[];
        });
  }

}
