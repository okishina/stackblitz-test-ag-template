import { Component, OnInit } from '@angular/core'
import { Hero } from '../../model/hero'
import { HeroService } from '../../service/hero.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes()
  }
  getHeroes() {
    this.heroService
      .getHeroes()
      .subscribe(heroes => (this.heroes = heroes.slice(1, 5)))
  }
}
