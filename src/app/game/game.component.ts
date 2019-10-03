import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
  NgForm
} from '@angular/forms';
import {
  CommonModule
} from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ActivatedRoute, Router } from'@angular/router';
import{ AppRoutingModule } from '../app-routing.module';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        background: '#6F0404',
        opacity: 1,
        color: '#E6E6E6',
        transform: 'rotate(0deg)'
      })),
      state('closed', style({
        background: '#cf7e7e',
        opacity: 0,
        transform: 'rotate(360deg)'
      })),
      transition('open => closed', [
        animate('0.6s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ]
})
export class GameComponent implements OnInit {

  formGame: FormGroup;
  player: any;
  computer: any;
  computerChoice = [];
  result: string;
  start: number = 4;
  r: boolean;
  isOpen: boolean = true;
  message: string;
  valid:string;

  constructor(private fb: FormBuilder, private route:ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.formGame = this.fb.group({
      armes: new FormControl(''),
    })
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
  get armes() {
    return this.formGame.get('armes');
  }
  onSubmit() {
    this.player = this.formGame.value['armes']
    this.computerChoice[0] = "pierre";
    this.computerChoice[1] = "feuille";
    this.computerChoice[2] = "ciseaux";
    this.computer = this.computerChoice[Math.floor(Math.random() * Math.floor(3))];
    console.log('CHOIX JOUEUR : ', this.player);
    console.log('CHOIX ORDI : ', this.computer);
    //let result = document.querySelector(".result");
    if(this.player) {
      switch (this.player) {
        case "pierre": {
          if (this.computer == "pierre") {
            this.result = "C'est une égalité.";
            this.r = true;
  
          } else if (this.computer == "ciseaux") {
            this.result = "Tu as gagné. Bravo !";
            this.r = true;
          } else {
            this.result = "L'ordinateur a gagné. Désolé !";
            this.r = false;
          }
        }
        break;
      case "ciseaux":
      case "ciseau": {
        if (this.computer == "pierre") {
          this.result = "L'ordinateur a gagné. Désolé !";
          this.r = false;
        } else if (this.computer == "ciseaux") {
          this.result = "C'est une égalité.";
          this.r = true;
        } else {
          this.result = "Tu as gagné. Bravo !";
          this.r = true;
        }
      }
      break;
      case "feuille": {
        if (this.computer == "pierre") {
          this.result = "Tu as gagné. Bravo !";
          this.r = true;
        } else if (this.computer == "ciseaux") {
          this.result = "L'ordinateur a gagné. Désolé !";
          this.r = false;
        } else {
          this.result = "C'est une égalité.";
          this.r = true;
        }
      }
      break;
      case "puits":{
        this.result = "Non ! Puits n'existe pas, tu es éliminé !!!";
        break;
      } 
      default:
        this.result = "Ton choix n'est pas valide. Recommence.";
        this.r = false
        break;
      }
  
      let crono = setInterval(() => {
        this.toggle();
        if (this.start > 0) {
          this.start--;
          console.log('START ', this.start);
          return this.start;
  
        } else {
          clearInterval(crono);
  
        }
      }, 1000);
    }
    else {
      this.valid = "Ton choix n'est pas valide. Recommence et choisis ton arme.";
  
    }
    

  }
  no() {
    this.message = "Quel dommage ! Mais reviens quand tu veux.";
    setTimeout(()=>{
      this.router.navigate(['home']);
    }, 3000)
  }
  yes() {
  this.player="";
    this.router.navigate(['game']);
   
    console.log('Olivia')
  }
}
