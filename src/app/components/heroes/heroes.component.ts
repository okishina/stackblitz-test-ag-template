import { Component, OnInit } from '@angular/core'
import { Hero } from '../../model/hero'
import { HeroService } from '../../service/hero.service'
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes))
  }

  add(name: string) {
    name = name.trim()
    if (!name) {
      return
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero)
    })
  }

  delete(hero: Hero) {
    this.heroes = this.heroes.filter(h => h !== hero)
    this.heroService.deleteHero(hero).subscribe()
  }
}
