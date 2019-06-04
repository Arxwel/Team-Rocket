import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../model/member';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  id: number;
  person: Member;
  constructor( private readonly route: ActivatedRoute, private readonly http: HttpClient) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    let members: Member[];
    this.http.get('../../assets/members.json').subscribe(
      data => {
        members = data as Member[];
        this.person = members.filter(x => x.id === this.id)[0];
      });
  }

}
