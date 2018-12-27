import { Component, OnInit, Input } from '@angular/core'
import { Hero } from '../../model/hero'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { HeroService } from 'src/app/service/hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero()
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero))
  }

  goBack() {
    this.location.back()
  }

  save() {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack())
  }
}
